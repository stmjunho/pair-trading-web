
from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from pybit.unified_trading import WebSocket as PybitWebSocket
from pybit.unified_trading import HTTP
from threading import Thread, Lock
import datetime
import time
from statsmodels.tsa.stattools import coint
import numpy as np
import pandas as pd
import statsmodels.api as sm
from sklearn.preprocessing import StandardScaler
from statsmodels.tsa.stattools import adfuller
from itertools import combinations
from fastapi.responses import JSONResponse

print("Script is running!")
app = FastAPI()

# Setting up CORS for FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variables
product_ids = ["BTCUSDT", "ETHUSDT", "SOLUSDT", "BCHUSDT", "1000PEPEUSDT", "OGNUSDT", "XLMUSDT", "SUIUSDT", "UNFIUSDT", "CRVUSDT", "RDNTUSDT", "SHIB1000USDT", "CFXUSDT", "YGGUSDT", "1INCHUSDT", "UNIUSDT", "SUSHIUSDT", "IDUSDT", "WAVESUSDT", "COMPUSDT", "LTCUSDT", "MATICUSDT", "STMXUSDT", "XEMUSDT", "XRPUSDT", "AVAXUSDT", "TUSDT", "ARBUSDT", "TOMOUSDT", "EOSUSDT", "INJUSDT", "APEUSDT", "DOGEUSDT", "FTMUSDT", "ANKRUSDT", "ADAUSDT", "OPUSDT", "MKRUSDT", "APTUSDT", "ETCUSDT", "BNBUSDT", "ATOMUSDT", "AAVEUSDT",
               "LINKUSDT", "MTLUSDT", "TRBUSDT", "BELUSDT", "GALAUSDT", "NEARUSDT", "OCEANUSDT", "1000XECUSDT", "ASTRUSDT", "LINAUSDT", "GRTUSDT", "FILUSDT", "FLOWUSDT", "AGLDUSDT", "RNDRUSDT", "AXSUSDT", "LDOUSDT", "GMTUSDT", "MASKUSDT", "SANDUSDT", "STXUSDT", "DOTUSDT", "ARPAUSDT", "DYDXUSDT", "KAVAUSDT", "SNXUSDT", "TRXUSDT", "ALGOUSDT", "ZENUSDT", "WOOUSDT", "MAGICUSDT", "FXSUSDT", "ONTUSDT", "SFPUSDT", "THETAUSDT", "MANAUSDT", "CHZUSDT", "HBARUSDT", "KNCUSDT", "CTSIUSDT", "ZILUSDT", "ICPUSDT", "GMXUSDT"]
session = HTTP(testnet=False)
ws = PybitWebSocket(testnet=False, channel_type="linear")
data_lock = Lock()
crypto_data = {}
latest_data = {}
market_candidates = {"candidates": []}
market_positions = {"positions": []}

# Placeholder for the WebSocket connection and data fetching logic


@app.on_event("startup")
async def startup_event():
    init()
    # Start WebSocket client in a new thread
    ws_thread = Thread(target=start_websocket)
    ws_thread.start()
    seek_candidates_thread = Thread(target=compute_combinations)
    seek_candidates_thread.start()
    update_candidates_thread = Thread(target=update_market_data)
    update_candidates_thread.start()
    update_postions_thread = Thread(target=update_market_positions)
    update_postions_thread.start()


@app.get('/')
def index():
    return "Data Dict with updates"


@app.get('/data-dict')
def data_dict():
    global crypto_data
    with data_lock:
        resp_data = crypto_data.copy()
    response = JSONResponse(resp_data)
    # HTTP 1.1.
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"  # HTTP 1.0.
    response.headers["Expires"] = "0"  # Proxies.
    return response


@app.get('/latest-data')
def latest_info():
    global latest_data
    with data_lock:
        resp_data = latest_data.copy()
    response = JSONResponse(resp_data)
    # HTTP 1.1.
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"  # HTTP 1.0.
    response.headers["Expires"] = "0"  # Proxies.
    return response


@app.get('/market-candidates')
def calculate():
    global market_candidates
    with data_lock:
        resp_data = market_candidates.copy()
    response = JSONResponse(resp_data)
    # HTTP 1.1.
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"  # HTTP 1.0.
    response.headers["Expires"] = "0"  # Proxies.
    return response


@app.get('/market-positions')
def calculate_position():
    global market_positions
    with data_lock:
        resp_data = market_positions.copy()
    response = JSONResponse(resp_data)
    # HTTP 1.1.
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"  # HTTP 1.0.
    response.headers["Expires"] = "0"  # Proxies.
    return response




# Other logic and functions from websocket-app.py would go here...


def history_candles(product_id):
    num_data_points_needed = 800  # total number of data points needed
    num_data_points_fetched = 0  # number of data points fetched so far
    all_data = []  # list to store all fetched data

    while num_data_points_fetched < num_data_points_needed:
        # calculate start and end timestamps for the next API call
        end_timestamp = int((datetime.datetime.now(
        ) - datetime.timedelta(minutes=60 * num_data_points_fetched)).timestamp() * 1000)
        start_timestamp = int((datetime.datetime.now() - datetime.timedelta(
            minutes=60 * (num_data_points_fetched + 200))).timestamp() * 1000)

        while True:
            try:
                data = session.get_kline(
                    category="linear",
                    symbol=product_id,
                    interval=60,
                    start=start_timestamp,
                    end=end_timestamp,
                )
                if 'list' in data['result']:
                    break  # break the loop if request was successful and no exception was raised
                else:
                    continue
            except Exception as e:
                print(f"An error occurred: {e}. Retrying in 5 seconds.")
                time.sleep(5)
                continue  # continue to the next loop iteration, retrying the request

        close_values = [[item[0], float(item[4])]
                        for item in data['result']['list']]
        all_data.extend(close_values)  # add the fetched data to the main list

        # update the number of fetched data points
        num_data_points_fetched += len(close_values)

    # reverse the entire list so the most recent data is at the end
    all_data = list(reversed(all_data))

    return all_data


def analyze_crypto(series1_close, series2_close):

    threshold = 0

    model = sm.OLS(series1_close, series2_close)
    result = model.fit()
    beta = result.params[0]
    series1_np = np.array(series1_close)
    series2_np = np.array(series2_close)
    series2_np = beta*series2_np

    spread = series1_np - series2_np
    spread_zscore = (spread - spread.mean()) / spread.std()
    latest_spread = spread_zscore[-1]
    mean = spread.mean()
    std = spread.std()
    high = max(spread_zscore)
    low = min(spread_zscore)

    crossings = 0
    # loop over the array
    for i in range(1, len(spread_zscore)):
        # if the sign of the difference between consecutive elements
        # crosses the threshold, increment the counter
        if (spread_zscore[i] > threshold > spread_zscore[i-1]) or (spread_zscore[i] < threshold < spread_zscore[i-1]):
            crossings += 1
        elif (spread_zscore[i] > -threshold > spread_zscore[i-1]) or (spread_zscore[i] < -threshold < spread_zscore[i-1]):
            crossings += 1

    latest_crossings = 0
    for i in range(len(spread_zscore) - 50, len(spread_zscore)):
        # if the sign of the difference between consecutive elements
        # crosses the threshold, increment the counter
        if (spread_zscore[i] > threshold > spread_zscore[i-1]) or (spread_zscore[i] < threshold < spread_zscore[i-1]):
            latest_crossings += 1
        elif (spread_zscore[i] > -threshold > spread_zscore[i-1]) or (spread_zscore[i] < -threshold < spread_zscore[i-1]):
            latest_crossings += 1

    _, p_value, _ = coint(series1_close, series2_close)

    # may delete later
    # Convert lists to pandas Series
    close_x = pd.Series(series1_close)
    close_y = pd.Series(series2_close)

    # Initialize the scaler
    scaler = StandardScaler()

    # Fit and transform the data
    close_x_scaled = scaler.fit_transform(close_x.values.reshape(-1, 1))
    close_y_scaled = scaler.fit_transform(close_y.values.reshape(-1, 1))

    # Convert to 1D arrays and then to series
    close_x_scaled = pd.Series(close_x_scaled.flatten())
    close_y_scaled = pd.Series(close_y_scaled.flatten())

    # Compute the standardized spread and its z-score
    spread_scaled = close_x_scaled - close_y_scaled
    spread_zscore_scaled = (
        spread_scaled - spread_scaled.mean()) / spread_scaled.std()
    latest_scaled = spread_zscore_scaled.iloc[-1]

    if (latest_spread > 0 and latest_scaled > 0) or (latest_spread < 0 and latest_scaled < 0):
        same_sign = 1  # 1==true
    else:
        same_sign = 0  # 0==false

    return p_value, latest_spread, latest_scaled, crossings, latest_crossings, beta, mean, std, high, low, same_sign, spread_zscore


def calc_half_life(spread_zscore):
    # Calculate the spread by fitting a linear regression to the series and getting the residuals
    z_lag = np.roll(spread_zscore, 1)
    z_lag[0] = 0
    z_ret = spread_zscore - z_lag
    z_ret[0] = 0
    z_lag2 = sm.add_constant(z_lag)

    model = sm.OLS(z_ret, z_lag2)
    res = model.fit()

    hl = -np.log(2) / res.params[1]
    return hl


# threshold has to be a negative number
def conditional_negative(z_scores, series1, series2, stoploss, takeprofit, threshold):
    profit = 0
    in_position = False
    trades = 0
    wins = 0
    allow_trade = True

    for i in range(len(z_scores)):
        # If not in a position, check if z-score crosses -1.5
        if not in_position and allow_trade and z_scores[i] <= threshold:
            # Open position
            in_position = True
            series1entryprice = series1[i]
            series2entryprice = series2[i]
            trades += 1

        # If in a position, close it if stop loss or take profit is hit, or at the end of the data
        if in_position and (z_scores[i] <= stoploss or z_scores[i] >= takeprofit or i == len(z_scores) - 1):
            # Close position
            in_position = False
            series1exitprice = series1[i]
            series2exitprice = series2[i]
            pnl1 = (series1exitprice - series1entryprice) / series1entryprice
            pnl2 = (series2entryprice - series2exitprice) / series2entryprice
            pnl = ((pnl1 + pnl2) * 100)*10-1.2  # total PnL in percentage
            pnl = round(pnl/2, 3)
            profit += pnl

            # Check if the trade was profitable
            if pnl > 0:
                wins += 1

            # If the position was closed due to stop loss, don't allow new trades until z-score comes back within the threshold
            if z_scores[i] <= stoploss:
                allow_trade = False

         # If z-score is within the threshold, allow new trades
        if not in_position and z_scores[i] > threshold:
            allow_trade = True

    winrate = wins / trades if trades > 0 else 0
    net_profit = profit
    return winrate, trades, net_profit


def conditional_positive(z_scores, series1, series2, stoploss, takeprofit, threshold):
    profit = 0
    in_position = False
    trades = 0
    wins = 0
    allow_trade = True

    for i in range(len(z_scores)):
        # If not in a position, and trades are allowed, check if z-score crosses 1.5
        if not in_position and allow_trade and z_scores[i] >= threshold:
            # Open position (short)
            in_position = True
            series1entryprice = series1[i]
            series2entryprice = series2[i]
            trades += 1

        # If in a position, close it (cover the short) if stop loss or take profit is hit, or at the end of the data
        if in_position and (z_scores[i] >= stoploss or z_scores[i] <= takeprofit or i == len(z_scores) - 1):
            # Close position (cover the short)
            in_position = False
            series1exitprice = series1[i]
            series2exitprice = series2[i]
            pnl1 = (series1entryprice - series1exitprice) / series1entryprice
            pnl2 = (series2exitprice - series2entryprice) / series2entryprice
            pnl = ((pnl1 + pnl2) * 100)*10-1.2  # total PnL in percentage
            pnl = round(pnl/2, 3)
            profit += pnl

            # Check if the trade was profitable
            if pnl > 0:
                wins += 1

            # If the position was closed due to stop loss, don't allow new trades until z-score comes back within the threshold
            if z_scores[i] >= stoploss:
                allow_trade = False

        # If z-score is within the threshold, allow new trades
        if not in_position and z_scores[i] < threshold:
            allow_trade = True

    winrate = wins / trades if trades > 0 else 0
    net_profit = profit
    return winrate, trades, net_profit


def find_latest_zerocrossings_index(spread):

    latest_index_crosses_zero = None

    for i in range(len(spread) - 1, 0, -1):
        if (spread[i] > 0 and spread[i - 1] < 0) or (spread[i] < 0 and spread[i - 1] > 0):
            latest_index_crosses_zero = i
            break

    return latest_index_crosses_zero



def compute_combinations():
    """
    Retrieve data from the 'data-dict' endpoint, and apply calculation to find the candidates.

    response type : {'symbol_name' : [[timestamp: string, close_price: float], [...], [...]]}

    candidates type : {'candidates': [{'current_z': float,
                                        'series1': str, 
                                        'series2': str, 
                                        'p_val': float, 
                                        'zero_crossings': int,
                                        'adf': float, 
                                        'half_life': int, 
                                        'opt_p_z': float or 1111 (position in), 
                                        'opt_p_z_2nd': float or 1111 (position in), 
                                        'opt_n_z': float or 1111 (position in),
                                        'opt_n_z_2nd': float or 1111 (position in), 
                                        'beta': float,
                                        'mean': float, 
                                        'std': float, 
                                        'zero_crossings_time': int,
                                        'zero_crossings_len': int, 
                                        'series1_close_time': list in list [[str, float]...],
                                        'series2_close_time': list in list [[str, float]...],
                                        'z_chart': list}]
                                        }
    """
    while True:
        crossing_opt = 60
        global crypto_data
        with data_lock:
            copied_data = crypto_data.copy()
        # For combinations of 2 keys
        for combo in combinations(copied_data.keys(), 2):
            # Check the first elements of the last inner lists
            if copied_data[combo[0]][-1][0] != copied_data[combo[1]][-1][0]:
                continue  # Skip if they are different

            # Extract the second elements from the inner lists
            series1_close = [float(item[1]) for item in copied_data[combo[0]]]
            series2_close = [float(item[1]) for item in copied_data[combo[1]]]

            # Call analyze_crypto function and other calculation functions
            p_value, latest_spread, latest_scaled, crossings, latest_crossings, beta, mean, std, high, low, same_sign, spread_zscore = analyze_crypto(
                series1_close, series2_close)
            res = adfuller(spread_zscore)
            adf = res[1]
            half_life = calc_half_life(spread_zscore)

            if same_sign == 1 and p_value < 0.05 and crossings > crossing_opt and latest_crossings > 1 and adf < 0.05:

                len_of_z = len(spread_zscore)
                zero_crossings_len = find_latest_zerocrossings_index(
                    spread_zscore)
                zero_crossings_time = len_of_z - zero_crossings_len

                k = 1
                profit = 0
                profit_2nd = 0
                winrate = 0
                winrate_2nd = 0
                trades = 0
                trades_2nd = 0
                opt_p_z = 0
                opt_p_z_2nd = 0
                while k < high:
                    winrate_p, trades_p, profit_p = conditional_positive(
                        spread_zscore, series1_close, series2_close, k+1, 0, k)
                    if winrate_p >= 0.75 and trades_p >= 3:
                        if profit_p > profit:
                            # Update the second best values before updating the best ones
                            profit_2nd, winrate_2nd, trades_2nd, opt_p_z_2nd = profit, winrate, trades, opt_p_z
                            # Update the best values
                            profit, winrate, trades, opt_p_z = profit_p, winrate_p, trades_p, k
                        elif profit_p > profit_2nd and profit_p != profit:
                            # Update the second best values if the profit is greater than the current second best profit and it's not equal to the best profit
                            profit_2nd, winrate_2nd, trades_2nd, opt_p_z_2nd = profit_p, winrate_p, trades_p, k
                    k += 0.1
                print(
                    f"Best threshold: {opt_p_z}, w/r: {winrate}, t/o: {trades}")
                print(
                    f"Second best threshold: {opt_p_z_2nd}, w/r: {winrate_2nd}, t/o: {trades_2nd}")

                l = -1
                profit_j = 0
                profit_j_2nd = 0
                winrate_j = 0
                winrate_j_2nd = 0
                trades_j = 0
                trades_j_2nd = 0
                opt_n_z = 0
                opt_n_z_2nd = 0
                while l > low:
                    winrate_n, trades_n, profit_n = conditional_negative(
                        spread_zscore, series1_close, series2_close, l-1, 0, l)
                    if winrate_n >= 0.75 and trades_n >= 3:
                        if profit_n > profit_j:
                            # Update the second best values before updating the best ones
                            profit_j_2nd, winrate_j_2nd, trades_j_2nd, opt_n_z_2nd = profit_j, winrate_j, trades_j, opt_n_z
                            # Update the best values
                            profit_j, winrate_j, trades_j, opt_n_z = profit_n, winrate_n, trades_n, l
                        elif profit_n > profit_j_2nd and profit_n != profit_j:
                            # Update the second best values if the profit is greater than the current second best profit and it's not equal to the best profit
                            profit_j_2nd, winrate_j_2nd, trades_j_2nd, opt_n_z_2nd = profit_n, winrate_n, trades_n, l
                    l -= 0.1
                print(
                    f"Best threshold: {opt_n_z}, w/r: {winrate_j}, t/o: {trades_j}")
                print(
                    f"Second best threshold: {opt_n_z_2nd}, w/r: {winrate_j_2nd}, t/o: {trades_j_2nd}")

                if (opt_p_z != 0 or opt_p_z_2nd != 0 or opt_n_z != 0 or opt_n_z_2nd != 0):
                    global market_candidates
                    with data_lock:
                        exists = any(candidate['series1'] == combo[0] and candidate['series2']
                                        == combo[1] for candidate in market_candidates["candidates"])

                        if not exists:
                            market_candidates["candidates"].append({
                                "current_z": latest_spread,
                                "series1": combo[0],
                                "series2": combo[1],
                                "p_val": round(p_value, 5),
                                "zero_crossings": crossings,
                                "adf": round(adf, 5),
                                "half_life": round(half_life),
                                "opt_p_z": round(opt_p_z, 1),
                                "opt_p_z_2nd": round(opt_p_z_2nd, 1),
                                "opt_n_z": round(opt_n_z, 1),
                                "opt_n_z_2nd": round(opt_n_z_2nd, 1),
                                "beta": beta,
                                "mean": mean,
                                "std": std,
                                "zero_crossings_time": zero_crossings_time,
                                "zero_crossings_len": zero_crossings_len,
                                "series1_close_time": copied_data[combo[0]],
                                "series2_close_time": copied_data[combo[1]],
                                "z_chart": spread_zscore
                            })
        time.sleep(5)


def update_market_data():
    """
    Retrieve data from 'latest-dict' and calculate the current z-score of the candidates accordingly. If current z-score meets the optimal 
    trading z-score, delete from candidates and send it to positions

    reponse type : {"symbol name":[timestamp: str, close_price: float]}

    positions type : {"positions": [{"current_z": float,
                                    "series1": str,
                                    "series2": str,
                                    "series1_position": str "sell" or "buy",
                                    "series2_position": str "sell" or "buy", 
                                    "position_in_zscore": float,
                                    "beta": float, 
                                    "mean": float, 
                                    "std": std, 
                                    "series1_close_time": list in list [[str, float]...], 
                                    "series2_close_time": list in list [[str, float]...], 
                                    "z_chart": list}]}


    """
    while True:
        global market_candidates
        global market_positions
        global latest_data
        with data_lock:
            to_remove = []
            for candidate in market_candidates["candidates"]:
                series1 = candidate["series1"]
                series2 = candidate["series2"]
                series1_close_time = candidate["series1_close_time"]
                series2_close_time = candidate["series2_close_time"]
                beta = candidate["beta"]
                mean = candidate["mean"]
                std = candidate["std"]
                half_life = candidate["half_life"]

                # 마켓 캔디데이트 안에있는 close_time 업데이트
                if latest_data[series1][0] != series1_close_time[-1][0]:
                    candidate["series1_close_time"].append(
                        latest_data[series1])
                else:
                    candidate["series1_close_time"][-1] = latest_data[series1]

                if latest_data[series2][0] != series2_close_time[-1][0]:
                    candidate["series2_close_time"].append(
                        latest_data[series2])
                else:
                    candidate["series2_close_time"][-1] = latest_data[series2]

                # Error handling: close_time 길이가 다를시 continue
                if len(candidate["series1_close_time"]) != len(candidate["series2_close_time"]):
                    continue

                # 새로운 close_time 벨류로 p_val, z_score 업데이트
                series1_close = [float(item[1])
                                    for item in candidate["series1_close_time"]]
                series2_close = [float(item[1])
                                    for item in candidate["series2_close_time"]]
                _, p_val, _ = coint(series1_close, series2_close)

                series1_np = np.array(series1_close)
                series2_np = np.array(series2_close)
                series2_np = beta*series2_np

                spread = series1_np - series2_np
                spread_zscore_nd = (spread - mean) / std

                # Convert the numpy array to a Python list
                spread_zscore = spread_zscore_nd.tolist()
                current_z = spread_zscore[-1]

                print(
                    f"updating z_score: {candidate['current_z']} to {current_z}")

                candidate["z_chart"] = spread_zscore
                candidate["current_z"] = current_z

                # zero crossing time 이랑 zero crossing len 업데이트
                len_close_time = len(candidate["series1_close_time"])
                zero_crossings_time = len_close_time - \
                    candidate["zero_crossings_len"]

                if current_z < 0.1 and current_z > -0.1:
                    candidate["zero_crossings_len"] = len_close_time
                    candidate["zero_crossings_time"] = 0
                    zero_crossings_time = 0

                # Position 진입
                if candidate["opt_p_z"] != 0 and current_z > candidate["opt_p_z"]:
                    market_positions["positions"].append({"current_z": current_z, "series1": series1, "series2": series2, "series1_position": "sell", "series2_position": "buy", "position_in_zscore": candidate["opt_p_z"],
                                                            "beta": beta, "mean": mean, "std": std, "series1_close_time": candidate["series1_close_time"], "series2_close_time": candidate["series2_close_time"], "z_chart": spread_zscore})
                    candidate["opt_p_z"] = 1111

                if candidate["opt_p_z_2nd"] != 0 and current_z > candidate["opt_p_z_2nd"]:
                    market_positions["positions"].append({"current_z": current_z, "series1": series1, "series2": series2, "series1_position": "sell", "series2_position": "buy", "position_in_zscore": candidate["opt_p_z_2nd"],
                                                            "beta": beta, "mean": mean, "std": std, "series1_close_time": candidate["series1_close_time"], "series2_close_time": candidate["series2_close_time"], "z_chart": spread_zscore})
                    candidate["opt_p_z_2nd"] = 1111

                if candidate["opt_n_z"] != 0 and current_z < candidate["opt_n_z"]:
                    market_positions["positions"].append({"current_z": current_z, "series1": series1, "series2": series2, "series1_position": "buy", "series2_position": "sell", "position_in_zscore": candidate["opt_n_z"],
                                                            "beta": beta, "mean": mean, "std": std, "series1_close_time": candidate["series1_close_time"], "series2_close_time": candidate["series2_close_time"], "z_chart": spread_zscore})
                    candidate["opt_n_z"] = 1111

                if candidate["opt_n_z_2nd"] != 0 and current_z < candidate["opt_n_z_2nd"]:
                    market_positions["positions"].append({"current_z": current_z, "series1": series1, "series2": series2, "series1_position": "buy", "series2_position": "sell", "position_in_zscore": candidate["opt_n_z_2nd"],
                                                            "beta": beta, "mean": mean, "std": std, "series1_close_time": candidate["series1_close_time"], "series2_close_time": candidate["series2_close_time"], "z_chart": spread_zscore})
                    candidate["opt_n_z_2nd"] = 1111

                # position 진입 완료하거나 candidates에서 멀어져 market_candidates에서 삭제
                if (candidate["opt_p_z"] == 0 or candidate["opt_p_z"] == 1111) and (candidate["opt_p_z_2nd"] == 0 or candidate["opt_p_z_2nd"] == 1111) and (candidate["opt_n_z"] == 0 or candidate["opt_n_z"] == 1111) and (candidate["opt_n_z_2nd"] == 0 or candidate["opt_n_z_2nd"] == 1111):
                    to_remove.append(candidate)
                elif p_val > 0.05:
                    to_remove.append(candidate)
                elif zero_crossings_time > 2 * half_life:
                    to_remove.append(candidate)

            for item in to_remove:
                market_candidates["candidates"].remove(item)

        time.sleep(5)



def update_market_positions():
    """
    Retrieve data from 'latest-dict' and calculate the current z-score of the positions accordingly. If take-proift or stop-loss is met, delete from
    positions.

    reponse type : {"symbol name":[timestamp: str, close_price: float]}

    """
    while True:
        global latest_data
        global market_positions
        with data_lock:
            to_remove = []
            for position in market_positions["positions"]:
                series1 = position["series1"]
                series2 = position["series2"]
                series1_close_time = position["series1_close_time"]
                series2_close_time = position["series2_close_time"]
                beta = position["beta"]
                mean = position["mean"]
                std = position["std"]
                position_in_zscore = position["position_in_zscore"]

                #  positions 안에있는 close_time 업데이트
                if latest_data[series1][0] != series1_close_time[-1][0]:
                    position["series1_close_time"].append(
                        latest_data[series1])
                else:
                    position["series1_close_time"][-1] = latest_data[series1]

                if latest_data[series2][0] != series2_close_time[-1][0]:
                    position["series2_close_time"].append(
                        latest_data[series2])
                else:
                    position["series2_close_time"][-1] = latest_data[series2]

                # Error handling: close_time 길이가 다를시 continue
                if len(position["series1_close_time"]) != len(position["series2_close_time"]):
                    continue

                # 새로운 close_time 벨류로 z_score 업데이트
                series1_close = [float(item[1])
                                    for item in position["series1_close_time"]]
                series2_close = [float(item[1])
                                    for item in position["series2_close_time"]]

                series1_np = np.array(series1_close)
                series2_np = np.array(series2_close)
                series2_np = beta*series2_np

                spread = series1_np - series2_np
                spread_zscore_nd = (spread - mean) / std

                # Convert the numpy array to a Python list
                spread_zscore = spread_zscore_nd.tolist()
                current_z = spread_zscore[-1]

                position["current_z"] = current_z
                position["z_chart"] = spread_zscore

                # positive 익절 condition
                if position_in_zscore > 0 and current_z < 0:
                    to_remove.append(position)
                # positive 손절 condition
                elif position_in_zscore > 0 and current_z > position_in_zscore + 1:
                    to_remove.append(position)

                # negative 익절 condition
                if position_in_zscore < 0 and current_z > 0:
                    to_remove.append(position)
                # negative 손절 condition
                elif position_in_zscore < 0 and current_z < position_in_zscore - 1:
                    to_remove.append(position)

            for item in to_remove:
                market_positions["positions"].remove(item)

        time.sleep(5)






def init():
    print("init!")
    global crypto_data
    global latest_data
    if crypto_data == {}:
        for product in product_ids:
            print(product)
            product_data_list = history_candles(product)
            crypto_data[product] = product_data_list
            latest_data[product] = []


def on_message(message):
    process_message(message)


def process_message(message):
    global crypto_data
    global latest_data
    full_topic = message.get('topic', '')
    # Extracting "BTCUSDT" from "kline.5.BTCUSDT"
    topic_key = full_topic.split('.')[-1]

    # Extract the first data element, if exists
    data = message.get('data', [{}])[0]
    start = str(data.get('start'))
    close = float(data.get('close'))

    with data_lock:
        # If the topic_key exists in the crypto_data and has at least one entry
        print(f"process_message: {topic_key}")
        if topic_key in crypto_data and crypto_data[topic_key]:
            last_entry = crypto_data[topic_key][-1]
            latest_data[topic_key] = [start, close]
            if start == last_entry[0]:
                # If the start is the same, update the latest value
                crypto_data[topic_key][-1] = [start, close]
            else:
                # If start is different, append the new data
                crypto_data[topic_key].append([start, close])
                del crypto_data[topic_key][0]

        else:
            # If the topic_key is new to the crypto_data, initialize it with the new data
            crypto_data[topic_key] = [[start, close]]
            latest_data[topic_key] = [[start, close]]


def start_websocket():
    ws.kline_stream(
        interval=60,
        symbol=["BTCUSDT", "ETHUSDT", "SOLUSDT", "BCHUSDT", "1000PEPEUSDT", "OGNUSDT", "XLMUSDT", "SUIUSDT", "UNFIUSDT", "CRVUSDT", "RDNTUSDT", "SHIB1000USDT", "CFXUSDT", "YGGUSDT", "1INCHUSDT", "UNIUSDT", "SUSHIUSDT", "IDUSDT", "WAVESUSDT", "COMPUSDT", "LTCUSDT", "MATICUSDT", "STMXUSDT", "XEMUSDT", "XRPUSDT", "AVAXUSDT", "TUSDT", "ARBUSDT", "TOMOUSDT", "EOSUSDT", "INJUSDT", "APEUSDT", "DOGEUSDT", "FTMUSDT", "ANKRUSDT", "ADAUSDT", "OPUSDT", "MKRUSDT", "APTUSDT", "ETCUSDT", "BNBUSDT", "ATOMUSDT", "AAVEUSDT",
                "LINKUSDT", "MTLUSDT", "TRBUSDT", "BELUSDT", "GALAUSDT", "NEARUSDT", "OCEANUSDT", "1000XECUSDT", "ASTRUSDT", "LINAUSDT", "GRTUSDT", "FILUSDT", "FLOWUSDT", "AGLDUSDT", "RNDRUSDT", "AXSUSDT", "LDOUSDT", "GMTUSDT", "MASKUSDT", "SANDUSDT", "STXUSDT", "DOTUSDT", "ARPAUSDT", "DYDXUSDT", "KAVAUSDT", "SNXUSDT", "TRXUSDT", "ALGOUSDT", "ZENUSDT", "WOOUSDT", "MAGICUSDT", "FXSUSDT", "ONTUSDT", "SFPUSDT", "THETAUSDT", "MANAUSDT", "CHZUSDT", "HBARUSDT", "KNCUSDT", "CTSIUSDT", "ZILUSDT", "ICPUSDT", "GMXUSDT"],
        callback=on_message,
    )


"""
print("Script is running!")
if __name__ == '__main__':
    print("start")
    init()
    # Start WebSocket client in a new thread
    ws_thread = Thread(target=start_websocket)
    ws_thread.start()
    # app.run(port=8000) this is flask way!
    ws_thread.join()
"""