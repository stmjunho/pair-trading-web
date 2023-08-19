import type { NextPage } from "next";
import styles from "./FormContainer3.module.css";
const FormContainer3: NextPage = () => {
  return (
    <div className={styles.groupWrapper}>
      <div className={styles.groupContainer}>
        <div className={styles.groupContainer}>
          <div className={styles.groupChild} />
          <div className={styles.enterEmailOr}>Enter email or user name</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer3;
