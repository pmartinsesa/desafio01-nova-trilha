import { Plus } from "../../assets/icons/Plus";

import styles from "./Button.module.css";

export type ButtonProps = {
  label: string;
  type?: any;
  onSubmit?: (e: any) => void;
};

export const Button = ({ label, type, onSubmit }: ButtonProps): JSX.Element => {
  return (
    <div className={styles["button"]}>
      <button type={type} onClick={onSubmit}>
        {label} <Plus />
      </button>
    </div>
  );
};
