import React, { useState, useEffect } from "react";

function Miniprojekat() {
  const storage = () => {
    const allTasks = localStorage.getItem("tasks");
    return allTasks ? JSON.parse(allTasks) : [];
  };

  const [state, setState] = useState({
    tasks: storage(),
    input: "",
    filter: "all",
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);
  

  const addTask = () => {
    if (state.input.trim() === "") return;
    setState({
      ...state,
      tasks: [...state.tasks, { text: state.input, status: "active" }],
      input: "",
    });
  };

  const change = (e) => {
    setState({ ...state, input: e.target.value });
  };
  const Completed = (index) => {
    const newTasks = state.tasks.map((task, i) =>
      i === index ? { ...task, status: "completed" } : task
    );
    const Deleted = (index) => {
      const newTasks = state.tasks.filter((_, i) => i === index);
      setState({ ...task, tasks: newTasks });
    };

    setState({ ...state, tasks: newTasks });
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "active") return task.status === "active";
    if (state.filter === "complete") return task.status === "complete";
    if (state.filter === "completed") return task.status === "completed";
    return true;
  });

  return (
    <div>
      <h2>My To-Do List</h2>
      <div>
        <input
          type="text"
          value={state.input}
          onChange={change}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div>
        <button
          className={state.filter === "all" ? "active-filter" : ""}
          onClick={() => setState({ ...state, filter: "all" })}
        >
          All
        </button>
        <button
          className={state.filter === "active" ? "active-filter" : ""}
          onClick={() => setState({ ...state, filter: "active" })}
        >
          Active
        </button>
        <button
          className={state.filter === "completed" ? "active-filter" : ""}
          onClick={() => setState({ ...state, filter: "completed" })}
        >
          Completed
        </button>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span>{task.text}</span>

            {task.status === "active" && (
              <div>
                <button onClick={() => Deleted(index)}>❌</button>
                <button onClick={() => Completed(index)}>✔️</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Miniprojekat;
