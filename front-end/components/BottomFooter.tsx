import type { NextPage } from "next";
import styles from "./BottomFooter.module.css";
const BottomFooter: NextPage = () => {
  return (
    <div className={styles.footersV12}>
      <div className={styles.wrapper}>
        <div
          className={styles.copyright}
        >{`Copyright © 2023 BRIX Templates | All Rights Reserved `}</div>
        <div className={styles.socialMediaContainer}>
          <img
            className={styles.socialMediaIconSquarefaceb}
            alt=""
            src="/social-media-icon-squarefacebook.svg"
          />
          <img
            className={styles.socialMediaIconSquarefaceb}
            alt=""
            src="/social-media-icon-squaretwitter.svg"
          />
          <img
            className={styles.socialMediaIconSquarefaceb}
            alt=""
            src="/social-media-icon-squareinstagram.svg"
          />
        </div>
        <div className={styles.navList}>
          <div className={styles.link}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedpassword1.svg"
              />
              <div className={styles.home}>Home</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedchevron-down.svg"
              />
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedpassword2.svg"
              />
              <div className={styles.home}>About</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedchevron-down1.svg"
              />
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedpassword2.svg"
              />
              <div className={styles.home}>Pricing</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedchevron-down2.svg"
              />
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedpassword3.svg"
              />
              <div className={styles.home}>Contact</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedchevron-down2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
