import React, { useState } from 'react'

const AddNote = ({getNotes}) => {

    // define state
    const [note,setNote] = useState("");
    
    // add new note
    const addNote = async (e) =>{
        e.preventDefault();

        if(note.trim().length == 0){
            alert("Please enter an valid note")
            return;
        }
        
        try{
            await fetch('https://wenoted-192e7-default-rtdb.firebaseio.com/notes.json',
            {
                method : "POST",
                body : JSON.stringify(note),
                headers : {
                    "Content-Type" : "application/json",
                }
            });

        setNote("");
        getNotes();
        }catch(err)
        {
            alert("Something went wrong!!!");
        }
        
    };

  return (
    <section>
        <form className='card' onSubmit={addNote} >
            <input type="text" name="" id="" placeholder='add note' value={note} onChange=
            {
                (e) => setNote(e.target.value)
            } />
            <button className='submitBtn'>Add Note</button>
        </form>
    </section>
  );
};

export default AddNote