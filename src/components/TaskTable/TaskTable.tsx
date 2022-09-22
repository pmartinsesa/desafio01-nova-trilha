import { TaskType } from "../../types";
import { Task } from "../Task/Task";
import { ClipboardText } from "phosphor-react"

import styles from "./TaskTable.module.css";

export type TaskTableProps = {
  tasks: TaskType[];
  onComplete: (task: TaskType) => void;
  onDelete: (task: TaskType) => void;
};

export const TaskTable = ({
  tasks,
  onComplete,
  onDelete,
}: TaskTableProps): JSX.Element => {
  const tasksCompleted = (): number => {
    return tasks.filter((task) => task.isChecked).length;
  };

  const getTaskList = (): JSX.Element[] => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          taskObject={task}
          onComplete={() => onComplete(task)}
          onDelete={() => onDelete(task)}
        />
      );
    });
  };

  return (
    <div className={styles["TaskTable"]}>
      <div className={styles["TaskInfo"]}>
        <div className={styles["TaskDetails"]}>
          <span className={styles["Created"]}>Tarefas Criadas</span>
          <div className={styles["CreatedCounter"]}>
            <span className={styles["CounterNumber"]}>{tasks.length}</span>
          </div>
        </div>

        <div className={styles["TaskDetails"]}>
          <span className={styles["Done"]}>Concluídas</span>
          <div className={styles["DoneCounter"]}>
            <span className={styles["DoneNumber"]}>{`${tasksCompleted()} de ${
              tasks.length
            }`}</span>
          </div>
        </div>
      </div>
      {
        tasks.length > 0 ? 
          <div className={styles["TaskList"]}>{getTaskList()}</div> :
          <div className={styles["EmptyList"]}>
            <ClipboardText size={56} weight="thin" />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
      }
    </div>
  );
};
