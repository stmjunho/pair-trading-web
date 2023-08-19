import type { NextPage } from "next";
import RegistrationContainer from "../components/RegistrationContainer";
import FormContainer from "../components/FormContainer";
import styles from "./SignUp.module.css";
const SignUp: NextPage = () => {
  return (
    <div className={styles.signUp}>
      <RegistrationContainer />
      <FormContainer
        dimension="/vector1.svg"
        dimensionText="/logo-style-guide-top1.svg"
        imageDimensions="/sizesmall-typesecondary-colorfilled.svg"
      />
      <div className={styles.groupParent}>
        <div className={styles.signUpToParent}>
          <div className={styles.signUpTo}>{`Sign Up to `}</div>
          <div className={styles.loremIpsumIs}>{`Lorem Ipsum is simply `}</div>
        </div>
        <div className={styles.ifYouAlreadyHaveAnAccountParent}>
          <div
            className={styles.ifYouAlready}
          >{`If you already have an account `}</div>
          <div className={styles.youCanLoginContainer}>
            <span>{`You can   `}</span>
            <span className={styles.loginHere}>Login here !</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
