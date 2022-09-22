import { useState } from "react";

import { Task } from "./components/Task/Task";
import { Header } from "./components/Header/Header";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { v4 as uuidv4 } from 'uuid';

import { TaskType } from "./types";
import { TaskTable } from "./components/TaskTable/TaskTable";

export function App(): JSX.Element {
  const [todoInput, setTodoInput] = useState('');
  const [tasks, setNewTask] = useState<TaskType[]>([]);

  const createNewTask = () => {
    if(!todoInput) return;

    const newTask: TaskType = {
      id: uuidv4(),
      description: todoInput,
      isChecked: false,
    };

    setNewTask([...tasks, newTask]);

    setTodoInput('');
  };

  const updateTask = (task: TaskType) => {
    task.isChecked = !task.isChecked
    setNewTask([...tasks])
  }

  const deleteTask = (task: TaskType) => {
    const tasksFiltered = tasks.filter(t => t.id !== task.id);
    setNewTask(tasksFiltered);
  }

  return (
    <>
      <Header />
      <TodoForm
        todoInput={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onSubmit={(e) => createNewTask()}
      />

      <TaskTable tasks={tasks} onComplete={updateTask} onDelete={deleteTask}/>
    </>
  );
}
