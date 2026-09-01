import React from 'react'
import Headers from './components/headers'
import JobForm from './components/JobForm'

 const App = () => {
  return (
    <div className='container'>
      <Headers total={5} 
        totalApplied={1}
        totalInterview={6}
      />
      {/* <JobForm /> */}
    </div>
  )
}

export default App