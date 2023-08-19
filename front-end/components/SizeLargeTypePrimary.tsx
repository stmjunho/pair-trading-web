import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./SizeLargeTypePrimary.module.css";

type SizeLargeTypePrimaryType = {
  lineRoundedSearch?: string;
  buttonText?: string;
  lineRoundedArrowRight?: string;
  iconLeft?: boolean;
  iconRight?: boolean;

  /** Style props */
  sizeLargeTypePrimaryPosition?: CSSProperties["position"];
  sizeLargeTypePrimaryAlignItems?: CSSProperties["alignItems"];
  sizeLargeTypePrimaryBackgroundColor?: CSSProperties["backgroundColor"];
  sizeLargeTypePrimaryBorderRadius?: CSSProperties["borderRadius"];
  sizeLargeTypePrimaryPadding?: CSSProperties["padding"];
  sizeLargeTypePrimaryJustifyContent?: CSSProperties["justifyContent"];
  buttonTextColor?: CSSProperties["color"];
  buttonTextFontWeight?: CSSProperties["fontWeight"];
  buttonTextFontSize?: CSSProperties["fontSize"];
  buttonTextTextAlign?: CSSProperties["textAlign"];
};

const SizeLargeTypePrimary: NextPage<SizeLargeTypePrimaryType> = ({
  lineRoundedSearch,
  buttonText,
  lineRoundedArrowRight,
  iconLeft = true,
  iconRight = true,
  sizeLargeTypePrimaryPosition,
  sizeLargeTypePrimaryAlignItems,
  sizeLargeTypePrimaryBackgroundColor,
  sizeLargeTypePrimaryBorderRadius,
  sizeLargeTypePrimaryPadding,
  sizeLargeTypePrimaryJustifyContent,
  buttonTextColor,
  buttonTextFontWeight,
  buttonTextFontSize,
  buttonTextTextAlign,
}) => {
  const sizeLargeTypePrimaryStyle: CSSProperties = useMemo(() => {
    return {
      position: sizeLargeTypePrimaryPosition,
      alignItems: sizeLargeTypePrimaryAlignItems,
      backgroundColor: sizeLargeTypePrimaryBackgroundColor,
      borderRadius: sizeLargeTypePrimaryBorderRadius,
      padding: sizeLargeTypePrimaryPadding,
      justifyContent: sizeLargeTypePrimaryJustifyContent,
    };
  }, [
    sizeLargeTypePrimaryPosition,
    sizeLargeTypePrimaryAlignItems,
    sizeLargeTypePrimaryBackgroundColor,
    sizeLargeTypePrimaryBorderRadius,
    sizeLargeTypePrimaryPadding,
    sizeLargeTypePrimaryJustifyContent,
  ]);

  const buttonTextStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonTextColor,
      fontWeight: buttonTextFontWeight,
      fontSize: buttonTextFontSize,
      textAlign: buttonTextTextAlign,
    };
  }, [
    buttonTextColor,
    buttonTextFontWeight,
    buttonTextFontSize,
    buttonTextTextAlign,
  ]);

  return (
    <div
      className={styles.sizelargeTypeprimary}
      style={sizeLargeTypePrimaryStyle}
    >
      {iconLeft && (
        <img
          className={styles.lineRoundedsearchIcon}
          alt=""
          src={lineRoundedSearch}
        />
      )}
      <b className={styles.buttonText} style={buttonTextStyle}>
        {buttonText}
      </b>
      {iconRight && (
        <img
          className={styles.lineRoundedsearchIcon}
          alt=""
          src={lineRoundedArrowRight}
        />
      )}
    </div>
  );
};

export default SizeLargeTypePrimary;
