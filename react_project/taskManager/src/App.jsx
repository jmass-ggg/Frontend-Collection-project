import React, { useState } from "react";
import Navbar from "./components/Navbar";
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState("");
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
            <form>
              <h2>Add the task</h2>
              <input
                type="text"
                placeholder="What needs to be done?"
                value={task}
                onChange={(event) => setTask(event.target.value)}
              />
              <select defaultValue="Medium">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <button>Add task</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
