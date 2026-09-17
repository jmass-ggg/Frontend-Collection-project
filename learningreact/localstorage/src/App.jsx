// import {useEffect, useState} from 'react'

// const App = () => {
//   const [name, setName] = useState('');
//   const [tasks, setTasks] = useState(()=>{
//     const saveTasks=localStorage.getItem("tasks");
//     return saveTasks ? JSON.parse(saveTasks) : []
//   }) 
//   useEffect(()=>{
//     localStorage.setItem("tasks",JSON.stringify(tasks));

//   },[tasks]);
//   const addItem=(event)=>{
//     event.preventDefault();

//     if (name.trim() === "") {
//       return;
//     }
//     const newItem={
//       id:Date.now(),
//       name,
//       purchase:false
//     }
//     setTasks((previousTasks)=>[...previousTasks,newItem]);
//     setName("");
//   }
//   const deleteItem=(itemId)=>{
//     setTasks((previousTasks)=>previousTasks.filter((task)=>task.id !== itemId))
//   }
//   const togglePurchased = (id) => {
//     setTasks((previousTasks) =>
//       previousTasks.map((task) =>
//         task.id === id
//           ? { ...task, purchase: !task.purchase }
//           : task
//       )
//     );
//   };
//   return(
//     <div>
//       <form onSubmit={addItem}>
//         <input value={name} onChange={(event)=>setName(event.target.value)} />
//         <button type='submit'>Submit</button>
//       </form>
//       <div className='result'>
//         {
//           tasks.map((note)=>(
//           <article key={note.id}>
//             <input
//               type="checkbox"
//               checked={note.purchased} onChange={()=>togglePurchased(note.id)}
              
//             />
//               <div>{note.name}</div>
             
//               <button onClick={()=>deleteItem(note.id)}>Delete</button>
//             </article>
//             )
            
//           )
//         }

//       </div>
//     </div>
//   ) 
// }

// export default App


import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [tasks, setTask] = useState(()=>
  {
    const saveTasks=localStorage.getItem("tasks");
    return saveTasks ? JSON.parse(saveTasks) : [];
  }
  )
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));

  },[tasks]);
  const submitHandler=(event)=>{
    event.preventDefault();
    if(title.trim() === ""){
      alert("enter properly");
      return;
    }
    const newTask={
      id:Date.now(),
      title,
      purchased:false
    }
    setTask((previousTask)=>[...previousTask,newTask]);
    setTitle("");

  }
  const deleteTask=(id)=>{
    setTask((previousTask)=>previousTask.filter((task)=>task.id !=id))
  }
  const togglePurchased = (id) => {
    setTask((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, purchased: !task.purchased }
          : task
      )
    );
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='enter the title .. ' value={title} onChange={(event)=>setTitle(event.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
      <div className='result'>
        {
          tasks.map((task)=>(
            <article key={task.id}>
              <input type='checkbox' checked={task.purchased} onChange={()=>togglePurchased(task.id)}/>
              <div>{task.title}</div>
              <button onClick={()=>deleteTask(task.id)}>x</button>
            </article>
          ))
        }
      </div>
    </div>
  )
}

export default App