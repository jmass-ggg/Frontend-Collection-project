import React, { useState } from 'react'
import './Navbar.css'
const FilterBar = () => {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");
  return (
    <div className='filters'> 
        <div className="search">
            <span>⌕</span>
            <input type="search" placeholder="Search tasks"  value={search} onChange={(event)=>setSearch(event.target.value)}/>
        </div>
        <div className='search-status'>
            <button className={activeFilter === "All" ? "active" :""} onClick={()=>setActiveFilter("All")}>
                All 
            </button>
            <button className={activeFilter === "Pending" ? "active" :""} onClick={()=>setActiveFilter("Pending")}>
                Pending 
            </button>
            <button className={activeFilter === "Completed" ? "active" :""}onClick={()=>setActiveFilter("Completed")}>
                Completed 
            </button>
        </div>
    </div>
  )
}
export default FilterBar