import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import './App.css'
import FilterBar from "./components/FilterBar";
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState(()=>{
    const savedTasks=localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])
  const [task, setTask] = useState("");
  const addTask=(event)=>{
    event.preventDefault();
    if(!task.trim()) return;
    setTasks((previousTask)=>[...previousTask,{
      id:Date.now(),
      task:task.trim(),
      priority:event.target.priority.value
    }])
    setTask("")
    setIsModalOpen(false)
  }
  const totalTaskCompleted = tasks.filter(
    (item) => item.priority === "completed"
  ).length;

  const totalTaskPending = tasks.filter(
    (item) => item.priority === "pending"
  ).length;

  const totalTaskNotCompleted = tasks.filter(
    (item) => item.priority === "Not completed"
  ).length;
  return (
    <div>
      <Navbar />
      <main className="dashboard">
        <div className="dashboard-header">
          <div>
            <h2>Good morning, Alex</h2>
            <p>Stay focused and make progress today.</p>
          </div>

          <button
            className="new-task-button"
            onClick={() => setIsModalOpen(true)}
          >
            + New task
          </button>
        </div>
      </main>
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="task-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              x
            </button>
            <form onSubmit={addTask}>
              <h2>Add the task</h2>
              <input
                type="text"
                placeholder="What needs to be done?"
                value={task}
                onChange={(event) => setTask(event.target.value)}
              />
              <select defaultValue="pending">
                <option>Not completed</option>
                <option>pending</option>
                <option>completed</option>
              </select>
              <button className="add-btn">Add task</button>
            </form>
          </div>
        </div>
      )}
      <div className="status">
        <div className="total-tasksCompleted">
          <h2>Total tasks completed</h2>
          <p>{totalTaskCompleted}</p>
        </div>
        <div className="total-tasksNotCompleted">
          <h2>Total tasks completed</h2>
          <p>{totalTaskNotCompleted}</p>
        </div>
        <div className="total-tasksPending">
          <h2>Total tasks completed</h2>
          <p>{totalTaskPending}</p>
        </div>
      </div>
      <FilterBar />
    </div>
  );
};
export default App;
