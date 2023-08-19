import type { NextPage } from "next";
import SizeLargeTypePrimary from "./SizeLargeTypePrimary";
import styles from "./Container1.module.css";
const Container1: NextPage = () => {
  return (
    <div className={styles.callToActionV11}>
      <div className={styles.wrapper}>
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <b className={styles.heading}>
              Create your account today and get started for free!
            </b>
            <div className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              semper at ac tempus enim laoreet massa non.
            </div>
          </div>
          <SizeLargeTypePrimary
            lineRoundedSearch="/line-roundedsearch5.svg"
            buttonText="Get started"
            lineRoundedArrowRight="/line-roundedarrow-right5.svg"
            iconLeft={false}
            iconRight={false}
            sizeLargeTypePrimaryPosition="unset"
            sizeLargeTypePrimaryAlignItems="center"
            sizeLargeTypePrimaryBackgroundColor="#fff"
            sizeLargeTypePrimaryBorderRadius="47.27px"
            sizeLargeTypePrimaryPadding="28px 56px"
            sizeLargeTypePrimaryJustifyContent="flex-start"
            buttonTextColor="#5d5a88"
            buttonTextFontWeight="unset"
            buttonTextFontSize="20px"
            buttonTextTextAlign="center"
          />
        </div>
        <div className={styles.frame2}>
          <div className={styles.frame3}>
            <b className={styles.heading1}>
              Talk to our sales team to get a free demo today!
            </b>
            <div className={styles.paragraph1}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              semper at ac tempus enim.
            </div>
          </div>
          <SizeLargeTypePrimary
            lineRoundedSearch="/line-roundedsearch6.svg"
            buttonText="Talk to sales"
            lineRoundedArrowRight="/line-roundedarrow-right6.svg"
            iconLeft={false}
            iconRight={false}
            sizeLargeTypePrimaryPosition="unset"
            sizeLargeTypePrimaryAlignItems="center"
            sizeLargeTypePrimaryBackgroundColor="#5d5a88"
            sizeLargeTypePrimaryBorderRadius="47.27px"
            sizeLargeTypePrimaryPadding="28px 56px"
            sizeLargeTypePrimaryJustifyContent="flex-start"
            buttonTextColor="#fff"
            buttonTextFontWeight="unset"
            buttonTextFontSize="20px"
            buttonTextTextAlign="center"
          />
        </div>
      </div>
    </div>
  );
};

export default Container1;
