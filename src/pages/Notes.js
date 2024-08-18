import React from 'react'
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import NoteItem from '../components/NoteItem';

const Notes = ({ notes }) => {
  return (
    <section>
      <header className="notes__header" >
        <h2 style={{marginLeft: "80px"}}>Notes</h2>
      </header>
      <div className="notes__container">
        {notes.map(data => <NoteItem key={data.id} data={data} />)}
      </div>
      <Link to="/create-note" className='btn add__btn'><BsPlusLg /></Link>
    </section>
  )
}

export default Notes
