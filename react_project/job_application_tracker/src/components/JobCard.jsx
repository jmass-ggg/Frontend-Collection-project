import "./JobCard.css";

const JobCard = ({ job, changeStatus, deleteJob }) => {
  return (
    <article className="job-card">
      <h2>{job.company}</h2>
      <p>{job.position}</p>
        
      <span className="status">{job.status}</span>

      <select
        value={job.status}
        onChange={(event) =>
          changeStatus(job.id, event.target.value)
        }
      >
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button
        className="delete-button"
        onClick={() => deleteJob(job.id)}
      >
        Delete
      </button>
    </article>
  );
};

export default JobCard;