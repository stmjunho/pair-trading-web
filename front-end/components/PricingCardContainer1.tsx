import type { NextPage } from "next";
import CardContainer from "./CardContainer";
import MasterPrimaryButtonContainer from "./MasterPrimaryButtonContainer";
import styles from "./PricingCardContainer1.module.css";
const PricingCardContainer1: NextPage = () => {
  return (
    <div className={styles.pricingCard}>
      <div className={styles.pricingCardChild} />
      <div className={styles.bg} />
      <b className={styles.subtitle}>Use For Free!</b>
      <b className={styles.price}>$0</b>
      <div className={styles.billing}>2달 무료</div>
      <CardContainer
        promotionDescription="바이비트 제휴시 2 달무료"
        trackedVisitsDescription="Up to 250,000 tracked visits"
        supportType="Normal support"
        teamMembersDescription="Up to 3 team members"
      />
      <MasterPrimaryButtonContainer />
    </div>
  );
};

export default PricingCardContainer1;
