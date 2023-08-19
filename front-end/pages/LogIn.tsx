import type { NextPage } from "next";
import FormContainer from "../components/FormContainer";
import LoginContainer from "../components/LoginContainer";
import styles from "./LogIn.module.css";
const LogIn: NextPage = () => {
  return (
    <div className={styles.logIn}>
      <FormContainer
        dimension="/vector1.svg"
        dimensionText="/logo-style-guide-top2.svg"
        imageDimensions="/sizesmall-typesecondary-colorfilled.svg"
      />
      <LoginContainer />
      <div className={styles.groupParent}>
        <div className={styles.signInToParent}>
          <div className={styles.signInTo}>{`Sign in to `}</div>
          <div className={styles.pairTradingSystem}>Pair Trading System</div>
        </div>
        <div className={styles.ifYouDontHaveAnAccountRParent}>
          <div className={styles.ifYouDont}>
            If you don’t have an account register
          </div>
          <div className={styles.youCanRegisterContainer}>
            <span>{`You can   `}</span>
            <span className={styles.registerHere}>Register here !</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
