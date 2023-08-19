import type { NextPage } from "next";
import GroupComponent1 from "./GroupComponent1";
import ConfirmPasswordForm from "./ConfirmPasswordForm";
import GroupComponent from "./GroupComponent";
import styles from "./RegistrationContainer.module.css";
const RegistrationContainer: NextPage = () => {
  return (
    <div className={styles.instanceParent}>
      <GroupComponent1
        inputPlaceholder="Enter Email"
        groupDivPosition="absolute"
        groupDivTop="73px"
        groupDivLeft="0px"
      />
      <GroupComponent1
        inputPlaceholder="Create User name"
        groupDivPosition="absolute"
        groupDivTop="153px"
        groupDivLeft="0px"
      />
      <GroupComponent1
        inputPlaceholder="Contact number"
        groupDivPosition="absolute"
        groupDivTop="233px"
        groupDivLeft="0px"
      />
      <ConfirmPasswordForm passwordInputConfirmPassw="Confrim Password" />
      <ConfirmPasswordForm
        passwordInputConfirmPassw="Password"
        propTop="313px"
      />
      <GroupComponent
        login="Register"
        groupDivPosition="absolute"
        groupDivTop="484px"
        groupDivLeft="0px"
      />
      <div className={styles.orContinueWith}>or continue with</div>
      <img className={styles.groupChild} alt="" src="/group-13.svg" />
      <div className={styles.signUp}>Sign Up</div>
    </div>
  );
};

export default RegistrationContainer;
