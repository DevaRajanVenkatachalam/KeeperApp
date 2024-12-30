import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import CreateNotes from "./components/CreateNotes"
import Note from "./components/Note"

function App() {

const [notes,setNotes]=useState([]);

function addNote(newNote){
  setNotes(prevNote =>{
    return [...prevNote, newNote]
  })
}
function deleteNote(id){
  setNotes(prevNote =>{
    return prevNote.filter((noteItem,index)=>{
      return index !== id;
    })
  })
}

const newNotes=notes.map((noteItem,index) =>{
  return <Note
  key={index}
  id={index}
  title={noteItem.title}
  content={noteItem.content}
  noteDelete={deleteNote}
  />
} )
  return (
    <div>

    <Header />

   <CreateNotes onAdd={addNote} />

<main>
{newNotes}
</main>

    <Footer />

    </div>
  )
}

export default App
