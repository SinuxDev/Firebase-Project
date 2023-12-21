import React from 'react'

const Nav = ({totalNotes}) => {
  return (
    <section className='nav'>
        <h1 className="logo">WeNoted</h1>
        <p>
          Total Notes - <span> {totalNotes} </span> 
        </p>
    </section>
  )
}

export default Nav