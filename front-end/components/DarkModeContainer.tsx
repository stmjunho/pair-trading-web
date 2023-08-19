import type { NextPage } from "next";
import styles from "./DarkModeContainer.module.css";

type DarkModeContainerType = {
  dimensionCode?: string;
  dimensionCodeText?: string;
  dimensionText?: string;
  performanceData?: string;
  dimensionCodeImageUrl?: string;
  componentImageUrl?: string;
  searchTerm?: string;
  dimensionCodeImageUrl2?: string;
  ticketName?: string;
  dimensionCodeText2?: string;
  agentListVolumeSelection?: string;
  dimensionCodeText3?: string;
  customerList?: string;
  dimensionCodeText4?: string;
  dimensionCodeImageUrl3?: string;
  dimensionCodeText5?: string;
  dimensionCodeText6?: string;
  dimensionCodeImageText?: string;
  showLogoIcon?: boolean;
};

const DarkModeContainer: NextPage<DarkModeContainerType> = ({
  dimensionCode,
  dimensionCodeText,
  dimensionText,
  performanceData,
  dimensionCodeImageUrl,
  componentImageUrl,
  searchTerm,
  dimensionCodeImageUrl2,
  ticketName,
  dimensionCodeText2,
  agentListVolumeSelection,
  dimensionCodeText3,
  customerList,
  dimensionCodeText4,
  dimensionCodeImageUrl3,
  dimensionCodeText5,
  dimensionCodeText6,
  dimensionCodeImageText,
  showLogoIcon,
}) => {
  return (
    <div className={styles.container}>
      {showLogoIcon && (
        <img className={styles.logoIcon} alt="" src={dimensionCode} />
      )}
      <div className={styles.line} />
      <div className={styles.container1}>
        <div className={styles.overview}>
          <div className={styles.container2}>
            <img
              className={styles.squaresfourIcon}
              alt=""
              src={dimensionCodeText}
            />
            <b className={styles.dashboard}>Dashboard</b>
          </div>
        </div>
      </div>
      <div className={styles.sharedFiles}>
        <div className={styles.analytics}>Analytics</div>
        <div className={styles.sharedFolder}>
          <img className={styles.squaresfourIcon} alt="" src={dimensionText} />
          <div className={styles.performance}>{performanceData}</div>
        </div>
        <div className={styles.sharedFolder}>
          <img
            className={styles.squaresfourIcon}
            alt=""
            src={dimensionCodeImageUrl}
          />
          <div className={styles.performance}>{componentImageUrl}</div>
        </div>
      </div>
      <div className={styles.line1} />
      <div className={styles.sharedFiles}>
        <div className={styles.analytics}>{searchTerm}</div>
        <div className={styles.sharedFolder}>
          <img
            className={styles.squaresfourIcon}
            alt=""
            src={dimensionCodeImageUrl2}
          />
          <div className={styles.performance}>{ticketName}</div>
        </div>
        <div className={styles.sharedFolder}>
          <img
            className={styles.squaresfourIcon}
            alt=""
            src={dimensionCodeText2}
          />
          <div className={styles.performance}>{agentListVolumeSelection}</div>
        </div>
        <div className={styles.sharedFolder}>
          <img
            className={styles.squaresfourIcon}
            alt=""
            src={dimensionCodeText3}
          />
          <div className={styles.performance}>{customerList}</div>
        </div>
      </div>
      <div className={styles.line1} />
      <div className={styles.sharedFiles}>
        <div className={styles.analytics}>Shop</div>
        <div className={styles.sharedFolder}>
          <img
            className={styles.squaresfourIcon}
            alt=""
            src={dimensionCodeText4}
          />
          <div className={styles.performance}>Products</div>
        </div>
        <div className={styles.sharedFolder}>
          <img
            className={styles.squaresfourIcon}
            alt=""
            src={dimensionCodeImageUrl3}
          />
          <div className={styles.performance}>Orders</div>
        </div>
        <div className={styles.sharedFolder}>
          <img
            className={styles.squaresfourIcon}
            alt=""
            src={dimensionCodeText5}
          />
          <div className={styles.performance}>Reports</div>
        </div>
      </div>
      <div className={styles.line1} />
      <div className={styles.darkMode}>
        <div className={styles.darkMode1}>
          <img
            className={styles.squaresfourIcon}
            alt=""
            src={dimensionCodeText6}
          />
          <div className={styles.performance}>Dark Mode</div>
        </div>
        <img
          className={styles.buttonIcon}
          alt=""
          src={dimensionCodeImageText}
        />
      </div>
    </div>
  );
};

export default DarkModeContainer;
