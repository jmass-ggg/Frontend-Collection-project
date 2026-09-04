import JobCard from "./JobCard";

const JobList = ({ jobs, changeStatus, deleteJob }) => {
  if (jobs.length === 0) {
    return <p>There are no applications.</p>;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          deleteJob={deleteJob}
          changeStatus={changeStatus}
        />
      ))}
    </div>
  );
};

export default JobList;