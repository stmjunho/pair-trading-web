import type { NextPage } from "next";
import YouTubeContainer from "./YouTubeContainer";
import styles from "./StatisticalArbitrageContainer.module.css";
const StatisticalArbitrageContainer: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <b className={styles.subtitle}>statistical Arbitrage</b>
      <div className={styles.frame}>
        <b className={styles.heading}>Get Ready to Learn!</b>
        <div className={styles.frame1}>
          <div className={styles.paragraph}>
            페어 트레이딩이란? 용어와 사용법을 간단히 알려 드립니다
          </div>
          <div className={styles.frame2}>
            <YouTubeContainer
              videoTitle="YOUTUBE 1"
              tutorialTitle="페어트레이딩이란"
            />
            <YouTubeContainer
              videoTitle="YOUTUBE 2"
              tutorialTitle="기본용어/사용법 익히기"
              propHeight="unset"
              propFlexShrink="unset"
            />
            <YouTubeContainer
              videoTitle="YOUTUBE 3"
              tutorialTitle="심화 사용법"
              propHeight="76px"
              propFlexShrink="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticalArbitrageContainer;
