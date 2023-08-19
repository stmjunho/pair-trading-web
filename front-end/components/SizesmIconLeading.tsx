import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./SizesmIconLeading.module.css";

type SizesmIconLeadingType = {
  circle?: string;
  text?: string;

  /** Style props */
  sizesmIconLeadingPosition?: CSSProperties["position"];
  sizesmIconLeadingBackgroundColor?: CSSProperties["backgroundColor"];
  sizesmIconLeadingBorder?: CSSProperties["border"];
  textColor?: CSSProperties["color"];
  textLineHeight?: CSSProperties["lineHeight"];
};

const SizesmIconLeading: NextPage<SizesmIconLeadingType> = ({
  circle,
  text,
  sizesmIconLeadingPosition,
  sizesmIconLeadingBackgroundColor,
  sizesmIconLeadingBorder,
  textColor,
  textLineHeight,
}) => {
  const sizesmIconLeadingStyle: CSSProperties = useMemo(() => {
    return {
      position: sizesmIconLeadingPosition,
      backgroundColor: sizesmIconLeadingBackgroundColor,
      border: sizesmIconLeadingBorder,
    };
  }, [
    sizesmIconLeadingPosition,
    sizesmIconLeadingBackgroundColor,
    sizesmIconLeadingBorder,
  ]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      color: textColor,
      lineHeight: textLineHeight,
    };
  }, [textColor, textLineHeight]);

  return (
    <div className={styles.sizesmIconleading} style={sizesmIconLeadingStyle}>
      <img className={styles.circleIcon} alt="" src={circle} />
      <div className={styles.text} style={text1Style}>
        {text}
      </div>
    </div>
  );
};

export default SizesmIconLeading;
