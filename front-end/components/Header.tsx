import type { NextPage } from "next";
import { useCallback } from "react";
import SizeLargeTypePrimary from "./SizeLargeTypePrimary";
import styles from "./Header.module.css";
const Header: NextPage = () => {
  const onLinkContainer7Click = useCallback(() => {
    window.open("https://pricing");
  }, []);

  const onButtonsSetContainerClick = useCallback(() => {
    window.open("https://login");
  }, []);

  return (
    <header className={styles.frame}>
      <div className={styles.frame1}>
        <img
          className={styles.logoStyleGuideTop}
          alt=""
          src="/logo-style-guide-top.svg"
        />
        <div className={styles.sections}>
          <div className={styles.link}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedpassword4.svg"
              />
              <div className={styles.home}>Home</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedchevron-down3.svg"
              />
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedpassword5.svg"
              />
              <div className={styles.home}>About</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedchevron-down4.svg"
              />
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedpassword5.svg"
              />
              <div className={styles.home}>Blog</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedchevron-down5.svg"
              />
            </div>
          </div>
          <div className={styles.masterLink}>
            <div className={styles.home}>Resources</div>
            <img
              className={styles.lineRoundedchevronDown3}
              alt=""
              src="/line-roundedchevron-down6.svg"
            />
          </div>
          <div className={styles.link3} onClick={onLinkContainer7Click}>
            <div className={styles.masterLink}>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedpassword6.svg"
              />
              <div className={styles.home}>Pricing</div>
              <img
                className={styles.lineRoundedpasswordIcon}
                alt=""
                src="/line-roundedchevron-down4.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonsSet} onClick={onButtonsSetContainerClick}>
        <div className={styles.navList}>
          <div className={styles.login}>
            <img
              className={styles.lineRoundedchevronDown3}
              alt=""
              src="/line-roundedpassword7.svg"
            />
            <div className={styles.home}>Login</div>
          </div>
          <SizeLargeTypePrimary
            lineRoundedSearch="/line-roundedsearch4.svg"
            buttonText="Get started"
            lineRoundedArrowRight="/line-roundedarrow-right4.svg"
            iconLeft={false}
            iconRight={false}
            sizeLargeTypePrimaryPosition="unset"
            sizeLargeTypePrimaryAlignItems="center"
            sizeLargeTypePrimaryBackgroundColor="#5d5a88"
            sizeLargeTypePrimaryBorderRadius="30px"
            sizeLargeTypePrimaryPadding="18px 24px"
            sizeLargeTypePrimaryJustifyContent="flex-end"
            buttonTextColor="#fff"
            buttonTextFontWeight="unset"
            buttonTextFontSize="16px"
            buttonTextTextAlign="right"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
