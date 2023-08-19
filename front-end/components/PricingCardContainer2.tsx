import type { NextPage } from "next";
import CardContainer from "./CardContainer";
import MasterPrimaryButtonContainer from "./MasterPrimaryButtonContainer";
import styles from "./PricingCardContainer2.module.css";
const PricingCardContainer2: NextPage = () => {
  return (
    <div className={styles.pricingCard}>
      <div className={styles.card} />
      <div className={styles.bg} />
      <CardContainer
        promotionDescription="Everything on Basic plan"
        trackedVisitsDescription="Up to 1,000,000 tracked visits"
        supportType="Premium support"
        teamMembersDescription="Up to 10 team members"
        propWidth="305px"
        propWidth1="unset"
        propFlexShrink="unset"
      />
      <b className={styles.subtitle}>Monthly</b>
      <b className={styles.price}>$40</b>
      <div className={styles.billing}>/ 1달</div>
      <MasterPrimaryButtonContainer />
    </div>
  );
};

export default PricingCardContainer2;
