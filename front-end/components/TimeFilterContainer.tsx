import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Property1TableNormalRow from "./Property1TableNormalRow";
import styles from "./TimeFilterContainer.module.css";

type TimeFilterContainerType = {
  dimensions?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
};

const TimeFilterContainer: NextPage<TimeFilterContainerType> = ({
  dimensions,
  propTop,
  propLeft,
  propLeft1,
  propLeft2,
}) => {
  const marketCandidateStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const lineRoundedChevronRightStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const property1TableNormalRowStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const property1TableNormalRowStyle1: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div className={styles.marketCandidate} style={marketCandidateStyle}>
      <div className={styles.container} />
      <img
        className={styles.lineRoundedchevronRight}
        alt=""
        src={dimensions}
        style={lineRoundedChevronRightStyle}
      />
      <Property1TableNormalRow
        tableCell="Time"
        tableCell1="Z score"
        tableCell2="Symbol 1"
        tableCell3="Symbol 2"
        tableCell4="P value"
        tableCell5="Optimal z +/-"
        property1TableNormalRowPosition="absolute"
        property1TableNormalRowWidth="957.03px"
        property1TableNormalRowTop="12.93px"
        property1TableNormalRowLeft="16.51px"
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
        property1TableNormalRowTop="63.53px"
        property1TableNormalRowLeft="15.89px"
        property1TableNormalRowHeight="49.76px"
      />
    </div>
  );
};

export default TimeFilterContainer;
