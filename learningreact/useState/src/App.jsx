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
      <div className="result">
  <h2>Result</h2>

  <div className="notes-grid">
    {notes.map((note, index) => (
      <article className="note-card" key={note.id}>
        <h3>Note {index + 1}</h3>

        <div className="note-row">
          <strong>Title</strong>
          <span>{note.title}</span>
        </div>

        <div className="note-row">
          <strong>Description</strong>
          <span>{note.description}</span>
        </div>
      </article>
    ))}
  </div>
</div>
    </div>
  )
}

export default App