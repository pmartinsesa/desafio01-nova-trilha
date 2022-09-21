import { DotNotChecked } from "../../assets/icons/DotNotChecked";
import { Trash } from "../../assets/icons/Trash";
import styles from "./Task.module.css";

export const Task = (): JSX.Element => {

  return (
    <div className={styles['task']}>
      <button><DotNotChecked /></button>
      <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      <button><Trash/></button>
    </div>
  )
}