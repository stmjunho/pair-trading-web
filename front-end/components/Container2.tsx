import type { NextPage } from "next";
import styles from "./Container2.module.css";
const Container2: NextPage = () => {
  return (
    <div className={styles.mainPageWhatispt}>
      <div className={styles.frame}>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.frame1}>
          <b className={styles.testimonalName}>회사소개</b>
          <div className={styles.testimonialRole}>Head of Marketing</div>
        </div>
      </div>
      <b className={styles.testimonialParagraph}>
        <span className={styles.testimonialParagraphTxtContainer}>
          <p className={styles.stm}>
            {" "}
            STM은 투자자들이 시장 중립적(market neutral)인 투자 전략을 암호화폐
            투자에도 적용할 수 있도록, 강력하고 신뢰할 수 있는 페어 트레이딩
            플랫폼을 제공합니다. 시장 중립 전략은, 상향 또는 하향하는 시장
            조건에 관계없이 수익을 창출하는 방법입니다. 이는 두 암호화폐 간의
            가격 변동 상관관계를 분석하고, 상대적으로 고평가 또는 저평가된
            암호화폐를 식별하는 것을 목표로 합니다 .
          </p>
          <p className={styles.stm}>
            {" "}
            이는 시장의 변동성을 최소화하고, 동시에 안정적인 수익 창출을
            가능하게 해주기 때문입니다.STM에서는 이러한 전략을 지원하고,
            투자자들이 복잡한 암호화폐 시장에서도 안정적인 결정을 할 수 있도록
            돕습니다. 투자는 복잡한 결정을 요구하는 과정입니다. 그러나 STM의
            목표는 투자를 간단하게 만드는 것입니다. 우리의 플랫폼을 통해
            투자자들은 복잡한 데이터를 명확하고 이해하기 쉬운 정보로 변환할 수
            있습니다.
          </p>
        </span>
      </b>
    </div>
  );
};

export default Container2;
