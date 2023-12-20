import { useEffect, useState } from "react";
import AddNote from "./Components/AddNote";
import Nav from "./Components/Nav";
import Note from "./Components/Note";

function App() {
  // define state
  const [noted,setNoted] = useState([]);

  //get notes when we start
  useEffect(()=>{
    getNotes();
  },[]);

  //get notes
  const getNotes = async () => {
    const response = await fetch('https://wenoted-192e7-default-rtdb.firebaseio.com/notes.json');
    const notes = await response.json();
    
    const modifiedNote = [];

    for(const key in notes){
      modifiedNote.push(notes[key])
    }
    
    setNoted(modifiedNote);

  };

  return (
    <>
      <Nav getNotes = {getNotes} />
      <AddNote />
      {
         noted.map((note,index) => (
            <Note key = {index} Note = {note} />
         ))
      }
    </>
  );
}

export default App;
