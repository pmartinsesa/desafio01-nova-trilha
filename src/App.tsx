import { useState } from "react";

import { Task } from "./components/Task/Task";
import { Header } from "./components/Header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";

import { TaskType } from "./types";

export function App(): JSX.Element {
  const [todoInput, setTodoInput] = useState("");
  const [task, setNewTask] = useState<TaskType[]>([]);

  const createNewTask = () => {
    if(!todoInput) return;

    const newTask: TaskType = {
      description: todoInput,
      isChecked: false,
    };

    setNewTask([...task, newTask]);

    console.log(task);
  };

  return (
    <>
      <Header />
      <TodoForm
        todoInput={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onSubmit={(e) => createNewTask()}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Task />
    </>
  );
}
