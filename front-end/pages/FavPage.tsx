import type { NextPage } from "next";
import SizeLargeTypePrimary from "../components/SizeLargeTypePrimary";
import TimeFilterContainer from "../components/TimeFilterContainer";
import Property1TableNormalRow from "../components/Property1TableNormalRow";
import Footer from "../components/Footer";
import styles from "./FavPage.module.css";
const FavPage: NextPage = () => {
  return (
    <div className={styles.favPage}>
      <div className={styles.container} />
      <img
        className={styles.logoStyleGuideTop}
        alt=""
        src="/logo-style-guide-top3.svg"
      />
      <div className={styles.sections}>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword8.svg"
            />
            <div className={styles.home}>Home</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down7.svg"
            />
          </div>
        </div>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword8.svg"
            />
            <div className={styles.home}>About</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down7.svg"
            />
          </div>
        </div>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword8.svg"
            />
            <div className={styles.home}>Blog</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down7.svg"
            />
          </div>
        </div>
        <div className={styles.masterLink}>
          <div className={styles.home}>Resources</div>
          <img
            className={styles.lineRoundedchevronDown3}
            alt=""
            src="/line-roundedchevron-down8.svg"
          />
        </div>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword8.svg"
            />
            <div className={styles.home}>Pricing</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down7.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonsSet}>
        <div className={styles.navList}>
          <div className={styles.login}>
            <img
              className={styles.lineRoundedchevronDown3}
              alt=""
              src="/line-roundedpassword9.svg"
            />
            <div className={styles.home}>Login</div>
          </div>
          <SizeLargeTypePrimary
            lineRoundedSearch="/line-roundedsearch7.svg"
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
      <TimeFilterContainer dimensions="/line-roundedchevron-right.svg" />
      <div className={styles.marketCandidate}>
        <div className={styles.container1} />
        <Property1TableNormalRow
          tableCell="Time"
          tableCell1="Z score"
          tableCell2="Symbol 1"
          tableCell3="Symbol 2"
          tableCell4="P value"
          tableCell5="Optimal z +/-"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="957.03px"
          property1TableNormalRowTop="12.23px"
          property1TableNormalRowLeft="20.51px"
          property1TableNormalRowHeight="49.76px"
        />
        <Property1TableNormalRow
          tableCell="2023/05/06 11:35"
          tableCell1="0.75"
          tableCell2="ETHUSDT"
          tableCell3="ATOMUSDT"
          tableCell4="0.05"
          tableCell5="1.0     /    -1.2"
          property1TableNormalRowPosition="absolute"
          property1TableNormalRowWidth="957.03px"
          property1TableNormalRowTop="62.82px"
          property1TableNormalRowLeft="19.89px"
          property1TableNormalRowHeight="49.76px"
        />
        <img
          className={styles.lineRoundedchevronRight}
          alt=""
          src="/line-roundedchevron-right1.svg"
        />
      </div>
      <TimeFilterContainer
        dimensions="/line-roundedchevron-right2.svg"
        propTop="423.03px"
        propLeft="992.39px"
        propLeft1="15.05px"
        propLeft2="14.44px"
      />
      <TimeFilterContainer
        dimensions="/line-roundedchevron-right3.svg"
        propTop="713.56px"
        propLeft="993.07px"
        propLeft1="10.73px"
        propLeft2="10.12px"
      />
      <Footer
        dimensionCode="/line-roundedpassword10.svg"
        dimensionCodeText="/line-roundedchevron-down9.svg"
        dimensionCodeImageUrl="/line-roundedpassword10.svg"
        dimensionCodeText2="/line-roundedchevron-down9.svg"
        dimensionCodeImage="/line-roundedpassword10.svg"
        dimensionCodeText3="/line-roundedchevron-down9.svg"
        dimensionCodeTextImageUrl="/line-roundedpassword10.svg"
        dimensionCodeText4="/line-roundedchevron-down9.svg"
      />
      <img className={styles.offIcon} alt="" src="/off.svg" />
      <img className={styles.offIcon1} alt="" src="/off.svg" />
      <img className={styles.offIcon2} alt="" src="/off.svg" />
      <img className={styles.offIcon3} alt="" src="/off.svg" />
    </div>
  );
};

export default FavPage;
