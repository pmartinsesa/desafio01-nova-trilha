import styles from "./Input.module.css";

export type InputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
};

export const Input = ({
  value,
  placeholder,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <div className={styles["input-border"]}>
      <input
        className={styles["input"]}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
