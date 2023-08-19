import type { NextPage } from "next";
import styles from "./FormContainer.module.css";

type FormContainerType = {
  dimension?: string;
  dimensionText?: string;
  imageDimensions?: string;
};

const FormContainer: NextPage<FormContainerType> = ({
  dimension,
  dimensionText,
  imageDimensions,
}) => {
  return (
    <div className={styles.headersV12}>
      <div className={styles.container} />
      <div className={styles.sections}>
        <div className={styles.home}>Home</div>
        <div className={styles.home}>About</div>
        <div className={styles.linkList}>
          <div className={styles.home}>Resources</div>
          <img className={styles.vectorIcon} alt="" src={dimension} />
        </div>
        <div className={styles.home}>Contact</div>
      </div>
      <img className={styles.logoStyleGuideTop} alt="" src={dimensionText} />
      <img
        className={styles.secondaryCricleButton}
        alt=""
        src={imageDimensions}
      />
    </div>
  );
};

export default FormContainer;
