from flask import Flask, jsonify
from pybit.unified_trading import WebSocket
import json
from threading import Thread
import datetime
import time
from pybit.unified_trading import HTTP
from threading import Lock
from flask import make_response
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

product_ids = ["BTCUSDT", "ETHUSDT", "SOLUSDT", "BCHUSDT", "1000PEPEUSDT", "OGNUSDT", "XLMUSDT", "SUIUSDT", "UNFIUSDT", "CRVUSDT", "RDNTUSDT", "SHIB1000USDT", "CFXUSDT", "YGGUSDT", "1INCHUSDT", "UNIUSDT", "SUSHIUSDT", "IDUSDT", "WAVESUSDT", "COMPUSDT", "LTCUSDT", "MATICUSDT", "STMXUSDT", "XEMUSDT", "XRPUSDT", "AVAXUSDT", "TUSDT", "ARBUSDT", "TOMOUSDT", "EOSUSDT", "INJUSDT", "APEUSDT", "DOGEUSDT", "FTMUSDT", "ANKRUSDT", "ADAUSDT", "OPUSDT", "MKRUSDT", "APTUSDT", "ETCUSDT", "BNBUSDT", "ATOMUSDT", "AAVEUSDT",
               "LINKUSDT", "MTLUSDT", "TRBUSDT", "BELUSDT", "GALAUSDT", "NEARUSDT", "OCEANUSDT", "1000XECUSDT", "ASTRUSDT", "LINAUSDT", "GRTUSDT", "FILUSDT", "FLOWUSDT", "AGLDUSDT", "RNDRUSDT", "AXSUSDT", "LDOUSDT", "GMTUSDT", "MASKUSDT", "SANDUSDT", "STXUSDT", "DOTUSDT", "ARPAUSDT", "DYDXUSDT", "KAVAUSDT", "SNXUSDT", "TRXUSDT", "ALGOUSDT", "ZENUSDT", "WOOUSDT", "MAGICUSDT", "FXSUSDT", "ONTUSDT", "SFPUSDT", "THETAUSDT", "MANAUSDT", "CHZUSDT", "HBARUSDT", "KNCUSDT", "CTSIUSDT", "ZILUSDT", "ICPUSDT", "GMXUSDT"]
session = HTTP(testnet=False)
ws = WebSocket(
    testnet=False,
    channel_type="linear",
)
data_lock = Lock()
crypto_data = {}
latest_data = {}


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


def init():
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


@app.route('/')
def index():
    return "Data Dict"


@app.route('/data-dict')
def data_dict():
    global crypto_data
    with data_lock:
        resp_data = jsonify(crypto_data.copy())
    response = make_response(resp_data)
    # HTTP 1.1.
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"  # HTTP 1.0.
    response.headers["Expires"] = "0"  # Proxies.
    return response


@app.route('/latest-data')
def latest_info():
    global latest_data
    with data_lock:
        resp_data = jsonify(latest_data.copy())
    response = make_response(resp_data)
    # HTTP 1.1.
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"  # HTTP 1.0.
    response.headers["Expires"] = "0"  # Proxies.
    return response


if __name__ == '__main__':
    init()
    # Start WebSocket client in a new thread
    ws_thread = Thread(target=start_websocket)
    ws_thread.start()
    app.run(port=5000)
    ws_thread.join()
