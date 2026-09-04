import { useState } from "react";
import Headers from "./components/headers";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Google",
      position: "Frontend Developer",
      status: "Applied",
      favorite: false,
    },
    {
      id: 2,
      company: "Microsoft",
      position: "React Developer",
      status: "Interview",
      favorite: true,
    },
  ]);

  const addJob = (company, position, status) => {
    const newJob = {
      id: Date.now(),
      company,
      position,
      status,
      favorite: false,
    };

    setJobs((previousJobs) => [...previousJobs, newJob]);
  };

  const deleteJob=(jobId)=>{
    setJobs((previousJobs)=>{
      return previousJobs.filter((job)=>job.id !==jobId)
    })
  }

  const totalApplied = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const totalInterview = jobs.filter(
    (job) => job.status === "Interview"
  ).length;
  const changeStatus = (jobId, newStatus) => {
  setJobs((previousJobs) =>
    previousJobs.map((job) =>
      job.id === jobId
        ? { ...job, status: newStatus }
        : job
    )
  );
};
  return (
    <div className="container">
      <Headers
        total={jobs.length}
        totalApplied={totalApplied}
        totalInterview={totalInterview}
      />

      <JobForm addJob={addJob} />

      <JobList jobs={jobs} changeStatus={changeStatus} 
      deleteJob={deleteJob}
      />
    </div>
  );
};

export default App;