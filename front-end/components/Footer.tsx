import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./Footer.module.css";

type FooterType = {
  dimensionCode?: string;
  dimensionCodeText?: string;
  dimensionCodeImageUrl?: string;
  dimensionCodeText2?: string;
  dimensionCodeImage?: string;
  dimensionCodeText3?: string;
  dimensionCodeTextImageUrl?: string;
  dimensionCodeText4?: string;

  /** Style props */
  propBottom?: CSSProperties["bottom"];
  propTop?: CSSProperties["top"];
};

const Footer: NextPage<FooterType> = ({
  dimensionCode,
  dimensionCodeText,
  dimensionCodeImageUrl,
  dimensionCodeText2,
  dimensionCodeImage,
  dimensionCodeText3,
  dimensionCodeTextImageUrl,
  dimensionCodeText4,
  propBottom,
  propTop,
}) => {
  const footersV12Style: CSSProperties = useMemo(() => {
    return {
      bottom: propBottom,
      top: propTop,
    };
  }, [propBottom, propTop]);

  return (
    <div className={styles.footersV12} style={footersV12Style}>
      <div className={styles.wrapper}>
        <div className={styles.container} />
        <div
          className={styles.copyright}
        >{`Copyright © 2023 BRIX Templates | All Rights Reserved `}</div>
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMediaIconSquarefaceb}>
            <div className={styles.socialMediaIcon} />
            <img className={styles.facebookIcon} alt="" src="/facebook1.svg" />
          </div>
          <div className={styles.socialMediaIconSquarefaceb}>
            <div className={styles.socialMediaIcon} />
            <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
          </div>
          <img
            className={styles.socialMediaIconSquarefaceb}
            alt=""
            src="/social-media-icon-squareinstagram1.svg"
          />
        </div>
        <div className={styles.navList}>
          <div className={styles.link}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src={dimensionCode}
              />
              <div className={styles.home}>Home</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src={dimensionCodeText}
              />
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src={dimensionCodeImageUrl}
              />
              <div className={styles.home}>About</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src={dimensionCodeText2}
              />
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src={dimensionCodeImage}
              />
              <div className={styles.home}>Pricing</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src={dimensionCodeText3}
              />
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src={dimensionCodeTextImageUrl}
              />
              <div className={styles.home}>Contact</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src={dimensionCodeText4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
