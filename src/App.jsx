import { useEffect, useState } from "react";
import AddNote from "./Components/AddNote";
import Nav from "./Components/Nav";
import Note from "./Components/Note";
import Intro from "./Components/Intro";

function App() {
  // define state
  const [noted,setNoted] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError]  = useState(false);

  //get notes when we start
  useEffect(()=>{
    getNotes();
  },[]);

  //get notes
  const getNotes = async () => {
    setLoading(true);
    
    try{
      const response = await fetch('https://wenoted-192e7-default-rtdb.firebaseio.com/notes.json');
      
      if(!response.ok){
        throw new Error("Can't connect to the database");
      }

      const notes = await response.json();
      const modifiedNote = [];

      for(const key in notes){
        modifiedNote.push({
          id : key,
          data : notes[key],
        });
      }
      
      setNoted(modifiedNote);
    }catch(err){
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Nav totalNotes = {noted.length} />
      {
        loading && !error && <p className="message" >Getting Notes......</p>
      }
      {
        error && !loading && <p className="error message" > {error} </p>
      }
      {
        !loading && !error && (
        <>
          <AddNote getNotes = {getNotes} />
         {noted.map((note,index) => (
            <Note key = {index} Note = {note} getNotes = {getNotes} />
         ))}         
        </>) 
      }
      {
        noted.length ==0 && <Intro /> 
      }
    </>
  );
}

export default App;
