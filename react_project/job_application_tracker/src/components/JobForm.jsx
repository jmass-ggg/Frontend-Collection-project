import { useState } from "react";


const JobForm = () => {
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <h2>Add a new job</h2>
        <label>Company :</label>
        <input type="text" placeholder="Company name" value={company} />

       </form>

    </div>
  )
}

export default JobForm