import type { NextPage } from "next";
import styles from "./LoginFormContainer.module.css";
const LoginFormContainer: NextPage = () => {
  return (
    <div className={styles.groupWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.login}>Login</div>
      </div>
    </div>
  );
};

export default LoginFormContainer;
