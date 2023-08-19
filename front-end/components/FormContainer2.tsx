import type { NextPage } from "next";
import styles from "./FormContainer2.module.css";
const FormContainer2: NextPage = () => {
  return (
    <div className={styles.logoStripV1}>
      <div className={styles.wrapper}>
        <div className={styles.logosContainer}>
          <img className={styles.logogoogleIcon} alt="" src="/logogoogle.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img
            className={styles.logoyoutubeIcon}
            alt=""
            src="/logoyoutube.svg"
          />
          <img
            className={styles.logopinterestIcon}
            alt=""
            src="/logopinterest.svg"
          />
          <img className={styles.logotwitchIcon} alt="" src="/logotwitch.svg" />
          <img
            className={styles.logowebflowIcon}
            alt=""
            src="/logowebflow.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FormContainer2;
