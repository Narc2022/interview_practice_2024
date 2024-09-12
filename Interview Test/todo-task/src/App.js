import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  useEffect(() => {
    console.log("task", task);
    console.log("tasks", tasks);
  }, [task, tasks]);

  const addTask = () => {
    if (task.taskName) {
      console.log("task", task);
      const taskId = tasks.length + 1;
      setTasks([...tasks, { id: taskId, taskName: task.taskName }]);
      setTask({ taskName: "" });
    } else {
      alert("please add the task");
    }
  };

  const deleteTask = (id) => {
    let arr = [];
    const newTasks = tasks.map((task) => {
      if (task.id !== id) {
        arr.push(task);
      }
    });
  };
  return (
    <div>
      <h2>tasks</h2>
      <div>
        <input
          type="text"
          onChange={(e) => setTask({ taskName: e.target.value })}
          value={task.taskName}
        />
        <button onClick={addTask}>add Task</button>
      </div>
      <div>
        {tasks && tasks.length
          ? tasks.map((task, key) => (
              <div style={{ display: "flex" }}>
                <p>{task.taskName} </p>
                <button onClick={() => deleteTask(task.id)}>delete</button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
