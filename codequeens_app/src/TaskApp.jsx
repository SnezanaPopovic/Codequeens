import React, { useState, useCallback } from "react";
import TaskList from "./TaskList";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = useCallback(() => {
    if (newTask.trim() === "") return;
    setTasks((prev) => [...prev, newTask]);
    setNewTask("");
  }, [newTask]);

  return (
    <div>
      <h2>Task lista</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Unesi zadatak"
        />
        <button onClick={addTask}>Dodaj</button>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskApp;
