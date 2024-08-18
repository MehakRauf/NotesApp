import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ data }) => {
    return (
        <div>
            <Link to={`/edit-note/${data.id}`} className='note'>
                <p>{data.title}</p>
                <p>{data.date}</p>
            </Link>
        </div>
    )
}

export default NoteItem
