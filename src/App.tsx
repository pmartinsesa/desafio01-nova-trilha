import { useState } from "react";

import { Task } from "./components/Task/Task";
import { Header } from "./components/Header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";

import { TaskType } from "./types";
import { TaskTable } from "./components/TaskTable/TaskTable";

export function App(): JSX.Element {
  const [todoInput, setTodoInput] = useState("");
  const [task, setNewTask] = useState<TaskType[]>([]);

  const [newTask, setTaskk] = useState<TaskType>({
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isChecked: false,
  });

  const [newTask2, setTaskkk] = useState<TaskType>({
    description: 'teste2',
    isChecked: true,
  });
  const createNewTask = () => {
    if(!todoInput) return;

    const newTask: TaskType = {
      description: todoInput,
      isChecked: false,
    };

    setNewTask([...task, newTask]);

    console.log(task);
  };

  const updateTask = (task: TaskType, index: number) => {
    console.log(task)
    console.log(index)

    task.isChecked = !task.isChecked

    if (index === 2) {
      setTaskk({...task})
    }
    else {
      setTaskkk({...task})
    }
  }

  return (
    <>
      <Header />
      <TodoForm
        todoInput={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onSubmit={(e) => createNewTask()}
      />
      <TaskTable />

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
      <Task taskObject={newTask} onComplete={(e) => updateTask(newTask, 2)}/>
      <Task taskObject={newTask2} onComplete={(e) => updateTask(newTask2, 3)}/>
    </>
  );
}
