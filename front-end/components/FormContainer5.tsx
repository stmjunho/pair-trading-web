import type { NextPage } from "next";
import SizesmIconLeading from "./SizesmIconLeading";
import styles from "./FormContainer5.module.css";

type FormContainer5Type = {
  dimensionCode?: string;
};

const FormContainer5: NextPage<FormContainer5Type> = ({ dimensionCode }) => {
  return (
    <div className={styles.button}>
      <SizesmIconLeading
        circle="/arrowleft1.svg"
        text="Previous"
        sizesmIconLeadingPosition="unset"
        sizesmIconLeadingBackgroundColor="#fff"
        sizesmIconLeadingBorder="1px solid #c5c5d3"
        textColor="#16161d"
        textLineHeight="140%"
      />
    </div>
  );
};

export default FormContainer5;
