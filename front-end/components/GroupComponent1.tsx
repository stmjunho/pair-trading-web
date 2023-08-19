import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent1.module.css";

type GroupComponent1Type = {
  inputPlaceholder?: string;

  /** Style props */
  groupDivPosition?: CSSProperties["position"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  inputPlaceholder,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
    <div className={styles.groupParent} style={groupDiv1Style}>
      <div className={styles.groupWrapper}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupChild} />
          <div className={styles.enterEmailOr}>{inputPlaceholder}</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
