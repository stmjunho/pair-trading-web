import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./YouTubeContainer.module.css";

type YouTubeContainerType = {
  videoTitle?: string;
  tutorialTitle?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlexShrink?: CSSProperties["flexShrink"];
};

const YouTubeContainer: NextPage<YouTubeContainerType> = ({
  videoTitle,
  tutorialTitle,
  propHeight,
  propFlexShrink,
}) => {
  const frameStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      flexShrink: propFlexShrink,
    };
  }, [propHeight, propFlexShrink]);

  return (
    <div className={styles.feature}>
      <img
        className={styles.imagePlaceholderIcon}
        alt=""
        src="/image-placeholder.svg"
      />
      <div className={styles.frame} style={frameStyle}>
        <b className={styles.featureHeading}>{videoTitle}</b>
        <div className={styles.paragraph}>{tutorialTitle}</div>
      </div>
    </div>
  );
};

export default YouTubeContainer;
