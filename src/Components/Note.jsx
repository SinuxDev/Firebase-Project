import React from 'react'
import Deleteicon from '../svgs/Deleteicon'

const Note = ({Note, getNotes}) => {
  //destructor note object
  const {id,data : text} = Note

  // delete notesss
  const deleteNote = async (e) => {
    try{
      const response = await fetch(`https://wenoted-192e7-default-rtdb.firebaseio.com/notes/${id}.json`,
        {
          method : "DELETE",
        });

      if(!response.ok){
        throw new Error("Failed to Delete")
      }

      getNotes();
    }catch(err){
      alert(err.message);
    }
  }

  return (
    <div className='card-ctr' >
        <h3> + {text} </h3>
        <div onClick={deleteNote} className='del-btn' >
          <Deleteicon />
        </div>        
    </div>
  )
}

export default Note