import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./SizeSmall.module.css";

type SizeSmallType = {
  sizeSmallSizeSmall?: string;

  /** Style props */
  sizeSmallIconPosition?: CSSProperties["position"];
  sizeSmallIconWidth?: CSSProperties["width"];
  sizeSmallIconHeight?: CSSProperties["height"];
  sizeSmallIconTop?: CSSProperties["top"];
  sizeSmallIconRight?: CSSProperties["right"];
  sizeSmallIconBottom?: CSSProperties["bottom"];
  sizeSmallIconLeft?: CSSProperties["left"];
  sizeSmallIconMaxWidth?: CSSProperties["maxWidth"];
  sizeSmallIconOverflow?: CSSProperties["overflow"];
  sizeSmallIconMaxHeight?: CSSProperties["maxHeight"];
};

const SizeSmall: NextPage<SizeSmallType> = ({
  sizeSmallSizeSmall,
  sizeSmallIconPosition,
  sizeSmallIconWidth,
  sizeSmallIconHeight,
  sizeSmallIconTop,
  sizeSmallIconRight,
  sizeSmallIconBottom,
  sizeSmallIconLeft,
  sizeSmallIconMaxWidth,
  sizeSmallIconOverflow,
  sizeSmallIconMaxHeight,
}) => {
  const sizeSmallIconStyle: CSSProperties = useMemo(() => {
    return {
      position: sizeSmallIconPosition,
      width: sizeSmallIconWidth,
      height: sizeSmallIconHeight,
      top: sizeSmallIconTop,
      right: sizeSmallIconRight,
      bottom: sizeSmallIconBottom,
      left: sizeSmallIconLeft,
      maxWidth: sizeSmallIconMaxWidth,
      overflow: sizeSmallIconOverflow,
      maxHeight: sizeSmallIconMaxHeight,
    };
  }, [
    sizeSmallIconPosition,
    sizeSmallIconWidth,
    sizeSmallIconHeight,
    sizeSmallIconTop,
    sizeSmallIconRight,
    sizeSmallIconBottom,
    sizeSmallIconLeft,
    sizeSmallIconMaxWidth,
    sizeSmallIconOverflow,
    sizeSmallIconMaxHeight,
  ]);

  return (
    <img
      className={styles.sizesmallIcon}
      alt=""
      src={sizeSmallSizeSmall}
      style={sizeSmallIconStyle}
    />
  );
};

export default SizeSmall;
