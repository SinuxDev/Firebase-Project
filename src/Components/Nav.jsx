import React from 'react'

const Nav = ({getNotes}) => {
  return (
    <section className='nav'>
        <h1 className="logo">WeNoted</h1>
        <button onClick={getNotes} > Refresh Notes</button>
    </section>
  )
}

export default Nav