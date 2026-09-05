import {useState} from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);
  const addNotes=(title,description)=>{
    const newNote={
      id:Date.now(),
      title,
      description
    }
    setNotes((previousNote)=>[...previousNote,newNote]);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(title === "" || description === ""){
      alert("fill the form");
      return;
    }
    addNotes(title,description);
    setTitle("");
    setDescription("");

  }
  return (
    <div className='conatiner'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Form</h2>
        <input placeholder='Enter the title ....' value={title} onChange={(event)=>setTitle(event.target.value)}/>
        <textarea placeholder='Enter the description ....' value={description} onChange={(event)=>setDescription(event.target.value)} />
          <button type='submit'>Submit</button>
      </form>
      <div className='result'>
        <h2>Result</h2>
        {
          notes.map((note)=>(
             <article key={note.id}>
            <h2>Title :- <span>{note.title}</span> </h2>
            <p>description :-  <span>{note.description}</span> </p>
        </article>
          ))
        }
      </div>
    </div>
  )
}

export default App