import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./StateDefaultShapeSquare.module.css";

type StateDefaultShapeSquareType = {
  number?: string;

  /** Style props */
  stateDefaultShapeSquareFlexShrink?: CSSProperties["flexShrink"];
  stateDefaultShapeSquareBackgroundColor?: CSSProperties["backgroundColor"];
  numberLineHeight?: CSSProperties["lineHeight"];
  numberColor?: CSSProperties["color"];
};

const StateDefaultShapeSquare: NextPage<StateDefaultShapeSquareType> = ({
  number,
  stateDefaultShapeSquareFlexShrink,
  stateDefaultShapeSquareBackgroundColor,
  numberLineHeight,
  numberColor,
}) => {
  const stateDefaultShapeSquareStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: stateDefaultShapeSquareFlexShrink,
      backgroundColor: stateDefaultShapeSquareBackgroundColor,
    };
  }, [
    stateDefaultShapeSquareFlexShrink,
    stateDefaultShapeSquareBackgroundColor,
  ]);

  const numberStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: numberLineHeight,
      color: numberColor,
    };
  }, [numberLineHeight, numberColor]);

  return (
    <div
      className={styles.statedefaultShapesquare}
      style={stateDefaultShapeSquareStyle}
    >
      <div className={styles.content}>
        <div className={styles.number} style={numberStyle}>
          {number}
        </div>
      </div>
    </div>
  );
};

export default StateDefaultShapeSquare;
