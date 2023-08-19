import type { NextPage } from "next";
import CardContainer from "./CardContainer";
import MasterPrimaryButtonContainer from "./MasterPrimaryButtonContainer";
import styles from "./PricingCardContainer.module.css";
const PricingCardContainer: NextPage = () => {
  return (
    <div className={styles.pricingCard}>
      <div className={styles.cardParent}>
        <div className={styles.card} />
        <div className={styles.bg} />
      </div>
      <CardContainer
        promotionDescription="Everything on Growth plan"
        trackedVisitsDescription="Up to 5,000,000 tracked visits"
        supportType="Dedicated support"
        teamMembersDescription="Up to 50 team members"
        propWidth="309px"
        propWidth1="213px"
        propFlexShrink="0"
      />
      <b className={styles.subtitle}>Yearly</b>
      <b className={styles.price}>$400</b>
      <div className={styles.billing}>/ 1년</div>
      <MasterPrimaryButtonContainer />
    </div>
  );
};

export default PricingCardContainer;
