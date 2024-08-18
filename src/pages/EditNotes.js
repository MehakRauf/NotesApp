import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import useCreateDate from '../components/useCreateDate'

const EditNotes = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { ...note, title, details, date };
      const newNotes = notes.map(item => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      })
      setNotes(newNotes);
    }
    navigate('/');
  }
  const handleDelete = () => {
    const newNotes = notes.filter(item => item.id !== id);
    setNotes(newNotes);
    navigate('/');

  }
  return (
    <>
      <header className="create-note__header">
        <Link to="/"><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={handleChange} >Save</button>
        <button className="btn lg danger" onClick={handleDelete}><RiDeleteBin6Line /></button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder='Title' autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Note details..." rows="30" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </>
  )
}

export default EditNotes
