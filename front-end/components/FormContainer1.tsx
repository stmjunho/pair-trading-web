import type { NextPage } from "next";
import styles from "./FormContainer1.module.css";

type FormContainer1Type = {
  dimensionCode?: string;
};

const FormContainer1: NextPage<FormContainer1Type> = ({ dimensionCode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.designerTeam}>
        <img className={styles.gearIcon} alt="" src={dimensionCode} />
        <div className={styles.settings}>Settings</div>
      </div>
      <div className={styles.designerTeam}>
        <img className={styles.gearIcon} alt="" src="/signout1.svg" />
        <div className={styles.settings}>Log Out</div>
      </div>
    </div>
  );
};

export default FormContainer1;
