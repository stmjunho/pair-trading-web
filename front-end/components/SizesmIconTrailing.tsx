import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./SizesmIconTrailing.module.css";

type SizesmIconTrailingType = {
  text?: string;
  circle?: string;

  /** Style props */
  sizesmIconTrailingPosition?: CSSProperties["position"];
  sizesmIconTrailingBackgroundColor?: CSSProperties["backgroundColor"];
  sizesmIconTrailingBorder?: CSSProperties["border"];
  textColor?: CSSProperties["color"];
  textLineHeight?: CSSProperties["lineHeight"];
};

const SizesmIconTrailing: NextPage<SizesmIconTrailingType> = ({
  text,
  circle,
  sizesmIconTrailingPosition,
  sizesmIconTrailingBackgroundColor,
  sizesmIconTrailingBorder,
  textColor,
  textLineHeight,
}) => {
  const sizesmIconTrailingStyle: CSSProperties = useMemo(() => {
    return {
      position: sizesmIconTrailingPosition,
      backgroundColor: sizesmIconTrailingBackgroundColor,
      border: sizesmIconTrailingBorder,
    };
  }, [
    sizesmIconTrailingPosition,
    sizesmIconTrailingBackgroundColor,
    sizesmIconTrailingBorder,
  ]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: textColor,
      lineHeight: textLineHeight,
    };
  }, [textColor, textLineHeight]);

  return (
    <div className={styles.sizesmIcontrailing} style={sizesmIconTrailingStyle}>
      <div className={styles.text} style={textStyle}>
        {text}
      </div>
      <img className={styles.circleIcon} alt="" src={circle} />
    </div>
  );
};

export default SizesmIconTrailing;
