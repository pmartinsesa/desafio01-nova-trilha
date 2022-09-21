import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

import styles from "./Todo.module.css";

export type TodoFormProps = {
  todoInput?: string;
  onChange?: (e: any) => void;
  onSubmit?: (e: any) => void;
};

export const TodoForm = ({todoInput, onChange, onSubmit}: TodoFormProps): JSX.Element => {
  return (
    <div className={styles["todo-form"]}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={todoInput}
        onChange={onChange}
      />
      <Button label="Criar" type="submit" onSubmit={onSubmit} />
    </div>
  );
};
