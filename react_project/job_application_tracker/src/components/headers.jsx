
import "./style.css";

const Headers = ({total,totalApplied,totalInterview}) => {
  return (
    <div className="headers">
      <h2>Job Application Tracker</h2>
      <p>Track all your job application</p>
      <div className="status">
        <div className="status-text">
          <span className="status-label">Total</span>
          <span className="status-value">{total}</span>
      </div>
        <div className="status-text">
          <span className="status-label">Applied</span>
          <span className="status-value">{totalApplied}</span>
      </div>
        
        <div className="status-text">

          <span className="status-label">Interview</span>
          <span className="status-value">{totalInterview}</span>
      </div>
      </div>
    </div>
  )
}
export default Headers