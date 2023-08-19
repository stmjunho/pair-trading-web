import type { NextPage } from "next";
import FormContainer3 from "./FormContainer3";
import LoginFormContainer from "./LoginFormContainer";
import styles from "./LoginContainer.module.css";
const LoginContainer: NextPage = () => {
  return (
    <div className={styles.componentParent}>
      <FormContainer3 />
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.groupContainer}>
            <div className={styles.groupChild} />
            <div className={styles.password}>Password</div>
          </div>
          <img
            className={styles.invisible1Icon}
            alt=""
            src="/invisible-11.svg"
          />
        </div>
        <div className={styles.forgorPassword}>Forgor password ?</div>
      </div>
      <LoginFormContainer />
      <div className={styles.orContinueWith}>or continue with</div>
      <img className={styles.groupItem} alt="" src="/group-131.svg" />
      <div className={styles.signIn}>Sign in</div>
    </div>
  );
};

export default LoginContainer;
