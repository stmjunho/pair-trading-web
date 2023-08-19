import type { NextPage } from "next";
import styles from "./MasterPrimaryButtonContainer.module.css";
const MasterPrimaryButtonContainer: NextPage = () => {
  return (
    <div className={styles.masterPrimaryButton}>
      <img
        className={styles.lineRoundedsearchIcon}
        alt=""
        src="/line-roundedsearch8.svg"
      />
      <b className={styles.buttonText}>Get started</b>
      <img
        className={styles.lineRoundedsearchIcon}
        alt=""
        src="/line-roundedarrow-right7.svg"
      />
    </div>
  );
};

export default MasterPrimaryButtonContainer;
