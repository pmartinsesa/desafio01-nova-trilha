import { DotNotChecked } from "../../assets/icons/DotNotChecked";
import { DotChecked } from "../../assets/icons/DotChecked";
import { Trash } from "../../assets/icons/Trash";
import { TaskType } from "../../types";

import styles from "./Task.module.css";

export type TaskProps = {
  taskObject: TaskType;
  onComplete?: (e: any) => void;
  onDelete?: (e: any) => void;
};

export const Task = ({ taskObject, onComplete, onDelete }: TaskProps): JSX.Element => {
  return (
    <div
      className={taskObject.isChecked ? styles["task-done"] : styles["task"]}
    >
      <button className={styles["icon-button"]} onClick={onComplete}>
        {taskObject.isChecked ? <DotChecked /> : <DotNotChecked />}
      </button>
      {taskObject.isChecked ? (
        <del>{taskObject.description}</del>
      ) : (
        <span>{taskObject.description}</span>
      )}
      <button className={`${styles["icon-button"]} ${styles["delete-button"]}`} onClick={onDelete}>
        <Trash />
      </button>
    </div>
  );
};
