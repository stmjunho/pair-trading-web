import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import SizesmIconTrailing from "./SizesmIconTrailing";
import styles from "./SizesmHierarchySecondaryG.module.css";

type SizesmHierarchySecondaryGType = {
  text?: string;
  circle?: string;

  /** Style props */
  sizesmHierarchySecondaryGPosition?: CSSProperties["position"];
  buttonBaseBorder?: CSSProperties["border"];
  textLineHeight?: CSSProperties["lineHeight"];
  textColor?: CSSProperties["color"];
};

const SizesmHierarchySecondaryG: NextPage<SizesmHierarchySecondaryGType> = ({
  text,
  circle,
  sizesmHierarchySecondaryGPosition,
  buttonBaseBorder,
  textLineHeight,
  textColor,
}) => {
  const sizesmHierarchySecondaryGStyle: CSSProperties = useMemo(() => {
    return {
      position: sizesmHierarchySecondaryGPosition,
    };
  }, [sizesmHierarchySecondaryGPosition]);

  const sizesmIconTrailingStyle: CSSProperties = useMemo(() => {
    return {
      border: buttonBaseBorder,
    };
  }, [buttonBaseBorder]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: textLineHeight,
      color: textColor,
    };
  }, [textLineHeight, textColor]);

  return (
    <div
      className={styles.sizesmHierarchysecondaryG}
      style={sizesmHierarchySecondaryGStyle}
    >
      <SizesmIconTrailing
        text="Button CTA"
        circle="/circle1.svg"
        sizesmIconTrailingPosition="unset"
        sizesmIconTrailingBackgroundColor="#fff"
        sizesmIconTrailingBorder="1px solid #d0d5dd"
        textColor="#344054"
        textLineHeight="20px"
      />
    </div>
  );
};

export default SizesmHierarchySecondaryG;
