import type { NextPage } from "next";
import styles from "./FormContainer4.module.css";
const FormContainer4: NextPage = () => {
  return (
    <div className={styles.mainPageIntro}>
      <div className={styles.wrapper}>
        <div className={styles.frame}>
          <img className={styles.quotesIcon} alt="" src="/quotes.svg" />
          <div className={styles.frame1}>
            <div className={styles.frame2}>
              <b className={styles.testimonialParagraph}>Pair Trading?</b>
              <b className={styles.testimonialParagraph1}>
                Statistical Arbitrage?
              </b>
            </div>
            <div className={styles.testimonialInfo}>
              "STM을 통해 암호화폐 투자의 복잡성을 넘어, 안정적이고 명확한 투자
              전략을 세울 수 있게 되었습니다. 이제 시장의 변동성을 걱정하지
              않고, 데이터의 혼란에서 벗어나 명확한 결정을 내릴 수 있습니다."
            </div>
          </div>
        </div>
        <div className={styles.paragraph}>
          STM은 암호화폐 투자에서 시장 중립적 전략을 실현하는 강력한 페어
          트레이딩 플랫폼을 제공합니다. 상향 또는 하향하는 시장 조건에도
          안정적인 수익을 창출하며, 투자자들은 복잡한 데이터를 쉽게 이해할 수
          있는 정보로 전환할 수 있습니다. STM의 목표는 투자를 단순하게 만드는
          것입니다.
        </div>
      </div>
    </div>
  );
};

export default FormContainer4;
