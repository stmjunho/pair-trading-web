import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

type GroupComponentType = {
  login?: string;

  /** Style props */
  groupDivPosition?: CSSProperties["position"];
  groupDivTop?: CSSProperties["top"];
  groupDivLeft?: CSSProperties["left"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  login,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
    <div className={styles.groupParent} style={groupDivStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.login}>{login}</div>
      </div>
    </div>
  );
};

export default GroupComponent;
