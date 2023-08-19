import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./ConfirmPasswordForm.module.css";

type ConfirmPasswordFormType = {
  passwordInputConfirmPassw?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const ConfirmPasswordForm: NextPage<ConfirmPasswordFormType> = ({
  passwordInputConfirmPassw,
  propTop,
}) => {
  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.groupWrapper} style={groupDiv2Style}>
      <div className={styles.groupParent}>
        <div className={styles.groupParent}>
          <div className={styles.groupChild} />
          <div className={styles.confrimPassword}>
            {passwordInputConfirmPassw}
          </div>
        </div>
        <img className={styles.invisible1Icon} alt="" src="/invisible-1.svg" />
      </div>
    </div>
  );
};

export default ConfirmPasswordForm;
