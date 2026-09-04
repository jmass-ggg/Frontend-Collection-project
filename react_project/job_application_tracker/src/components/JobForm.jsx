import { useState } from "react";
import "./style.css";

const JobForm = ({ addJob }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      company.trim() === "" ||
      position.trim() === "" ) {
      alert("Enter the form");
      return;
    }
    addJob(company, position,status);
    setCompany("");
    setPosition("");
    setStatus("");
  };

  return (
    <div className="jobAdd">
      <h2>Add a new job</h2>
      <form onSubmit={handleSubmit} className="jobForm">
        <div className="formRow">
          <div className="field">
            <label>Company:</label>
            <input
              type="text"
              placeholder="Enter company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Position:</label>
            <input
              type="text"
              placeholder="Enter job position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
        </div>

        <div className="field full">
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <button type="submit" className="submitBtn">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;
