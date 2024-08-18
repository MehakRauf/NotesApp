import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { v4 as uuid } from 'uuid'
import useCreateDate from '../components/useCreateDate'

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const note = { id: uuid(), title, details, date }
      setNotes(prevnotes => [note, ...prevnotes])
      navigate('/')
    }
  }
  return (
    <>
      <header className="create-note__header">
        <Link to="/"><IoIosArrowBack /></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder='Title' autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Note details..." rows="30" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </>
  )
}

export default CreateNote
