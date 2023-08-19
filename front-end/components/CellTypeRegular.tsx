import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./CellTypeRegular.module.css";

type CellTypeRegularType = {
  tableCell?: string;

  /** Style props */
  cellTypeRegularPosition?: CSSProperties["position"];
  cellTypeRegularFlex?: CSSProperties["flex"];
  tableCellFlex?: CSSProperties["flex"];
};

const CellTypeRegular: NextPage<CellTypeRegularType> = ({
  tableCell,
  cellTypeRegularPosition,
  cellTypeRegularFlex,
  tableCellFlex,
}) => {
  const cellTypeRegularStyle: CSSProperties = useMemo(() => {
    return {
      position: cellTypeRegularPosition,
      flex: cellTypeRegularFlex,
    };
  }, [cellTypeRegularPosition, cellTypeRegularFlex]);

  const tableCellStyle: CSSProperties = useMemo(() => {
    return {
      flex: tableCellFlex,
    };
  }, [tableCellFlex]);

  return (
    <div className={styles.cellTyperegular} style={cellTypeRegularStyle}>
      <div className={styles.tableCell} style={tableCellStyle}>
        {tableCell}
      </div>
    </div>
  );
};

export default CellTypeRegular;
