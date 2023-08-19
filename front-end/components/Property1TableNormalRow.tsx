import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import CellTypeRegular from "./CellTypeRegular";
import styles from "./Property1TableNormalRow.module.css";

type Property1TableNormalRowType = {
  tableCell?: string;
  tableCell1?: string;
  tableCell2?: string;
  tableCell3?: string;
  tableCell4?: string;
  tableCell5?: string;

  /** Style props */
  property1TableNormalRowPosition?: CSSProperties["position"];
  property1TableNormalRowWidth?: CSSProperties["width"];
  property1TableNormalRowTop?: CSSProperties["top"];
  property1TableNormalRowLeft?: CSSProperties["left"];
  property1TableNormalRowHeight?: CSSProperties["height"];
};

const Property1TableNormalRow: NextPage<Property1TableNormalRowType> = ({
  tableCell,
  tableCell1,
  tableCell2,
  tableCell3,
  tableCell4,
  tableCell5,
  property1TableNormalRowPosition,
  property1TableNormalRowWidth,
  property1TableNormalRowTop,
  property1TableNormalRowLeft,
  property1TableNormalRowHeight,
}) => {
  const property1TableNormalRowStyle: CSSProperties = useMemo(() => {
    return {
      position: property1TableNormalRowPosition,
      width: property1TableNormalRowWidth,
      top: property1TableNormalRowTop,
      left: property1TableNormalRowLeft,
      height: property1TableNormalRowHeight,
    };
  }, [
    property1TableNormalRowPosition,
    property1TableNormalRowWidth,
    property1TableNormalRowTop,
    property1TableNormalRowLeft,
    property1TableNormalRowHeight,
  ]);

  return (
    <div
      className={styles.property1tableNormalRow}
      style={property1TableNormalRowStyle}
    >
      <CellTypeRegular
        tableCell="Table Cell"
        cellTypeRegularPosition="unset"
        cellTypeRegularFlex="1"
        tableCellFlex="1"
      />
      <CellTypeRegular
        tableCell="Table Cell"
        cellTypeRegularPosition="unset"
        cellTypeRegularFlex="1"
        tableCellFlex="1"
      />
      <CellTypeRegular
        tableCell="Table Cell"
        cellTypeRegularPosition="unset"
        cellTypeRegularFlex="1"
        tableCellFlex="1"
      />
      <CellTypeRegular
        tableCell="Table Cell"
        cellTypeRegularPosition="unset"
        cellTypeRegularFlex="1"
        tableCellFlex="1"
      />
      <CellTypeRegular
        tableCell="Table Cell"
        cellTypeRegularPosition="unset"
        cellTypeRegularFlex="1"
        tableCellFlex="1"
      />
      <CellTypeRegular
        tableCell="Table Cell"
        cellTypeRegularPosition="unset"
        cellTypeRegularFlex="1"
        tableCellFlex="1"
      />
    </div>
  );
};

export default Property1TableNormalRow;
