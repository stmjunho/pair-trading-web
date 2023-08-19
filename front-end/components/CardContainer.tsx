import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./CardContainer.module.css";

type CardContainerType = {
  promotionDescription?: string;
  trackedVisitsDescription?: string;
  supportType?: string;
  teamMembersDescription?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propFlexShrink?: CSSProperties["flexShrink"];
};

const CardContainer: NextPage<CardContainerType> = ({
  promotionDescription,
  trackedVisitsDescription,
  supportType,
  teamMembersDescription,
  propWidth,
  propWidth1,
  propFlexShrink,
}) => {
  const listStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      flexShrink: propFlexShrink,
    };
  }, [propWidth1, propFlexShrink]);

  return (
    <div className={styles.list} style={listStyle}>
      <div className={styles.iconsListItem}>
        <div className={styles.listItem200}>
          <img
            className={styles.filledIconscheckCircle}
            alt=""
            src="/filled-iconscheck-circle.svg"
          />
          <b className={styles.text}>{promotionDescription}</b>
        </div>
      </div>
      <div className={styles.iconsListItem1}>
        <div className={styles.listItem200}>
          <img
            className={styles.filledIconscheckCircle}
            alt=""
            src="/filled-iconscheck-circle.svg"
          />
          <b className={styles.text}>{trackedVisitsDescription}</b>
        </div>
      </div>
      <div className={styles.iconsListItem2}>
        <div className={styles.listItem200}>
          <img
            className={styles.filledIconscheckCircle}
            alt=""
            src="/filled-iconscheck-circle.svg"
          />
          <b className={styles.text}>{supportType}</b>
        </div>
      </div>
      <div className={styles.iconsListItem3}>
        <div className={styles.listItem200}>
          <img
            className={styles.filledIconscheckCircle}
            alt=""
            src="/filled-iconscheck-circle.svg"
          />
          <b className={styles.text}>Mobile app</b>
        </div>
      </div>
      <div className={styles.iconsListItem4}>
        <div className={styles.listItem200}>
          <img
            className={styles.filledIconscheckCircle}
            alt=""
            src="/filled-iconscheck-circle.svg"
          />
          <b className={styles.text} style={text2Style}>
            {teamMembersDescription}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
