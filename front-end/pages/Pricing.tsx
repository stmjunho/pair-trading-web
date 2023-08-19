import type { NextPage } from "next";
import SizeLargeTypePrimary from "../components/SizeLargeTypePrimary";
import PricingCardContainer1 from "../components/PricingCardContainer1";
import PricingCardContainer2 from "../components/PricingCardContainer2";
import PricingCardContainer from "../components/PricingCardContainer";
import Footer from "../components/Footer";
import styles from "./Pricing.module.css";
const Pricing: NextPage = () => {
  return (
    <div className={styles.pricing}>
      <div className={styles.container} />
      <img
        className={styles.logoStyleGuideTop}
        alt=""
        src="/logo-style-guide-top5.svg"
      />
      <div className={styles.sections}>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword11.svg"
            />
            <div className={styles.home}>Home</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down10.svg"
            />
          </div>
        </div>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword11.svg"
            />
            <div className={styles.home}>About</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down10.svg"
            />
          </div>
        </div>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword11.svg"
            />
            <div className={styles.home}>Blog</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down10.svg"
            />
          </div>
        </div>
        <div className={styles.masterLink}>
          <div className={styles.home}>Resources</div>
          <img
            className={styles.lineRoundedchevronDown3}
            alt=""
            src="/line-roundedchevron-down11.svg"
          />
        </div>
        <div className={styles.link}>
          <div className={styles.masterLink}>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedpassword11.svg"
            />
            <div className={styles.home}>Pricing</div>
            <img
              className={styles.lineRoundedpasswordIcon}
              alt=""
              src="/line-roundedchevron-down10.svg"
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
              src="/line-roundedpassword12.svg"
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
      <div className={styles.pricingV1}>
        <div className={styles.wrapper}>
          <div className={styles.container1} />
          <b className={styles.subtitle}>Pricing</b>
          <b className={styles.heading}>Affordable pricing plans</b>
          <div className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
            egestas morbi sem vulputate etiam facilisis pellentesque ut quis.
          </div>
          <PricingCardContainer1 />
          <PricingCardContainer2 />
          <PricingCardContainer />
        </div>
      </div>
      <Footer
        dimensionCode="/line-roundedpassword13.svg"
        dimensionCodeText="/line-roundedchevron-down12.svg"
        dimensionCodeImageUrl="/line-roundedpassword13.svg"
        dimensionCodeText2="/line-roundedchevron-down12.svg"
        dimensionCodeImage="/line-roundedpassword13.svg"
        dimensionCodeText3="/line-roundedchevron-down12.svg"
        dimensionCodeTextImageUrl="/line-roundedpassword13.svg"
        dimensionCodeText4="/line-roundedchevron-down12.svg"
        propBottom="unset"
        propTop="1531px"
      />
    </div>
  );
};

export default Pricing;
