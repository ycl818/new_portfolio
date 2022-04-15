import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import './Notes.scss'
import { urlFor, client } from '../../client'



const Notes = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    const query = '*[_type == "notes"]';

    client.fetch(query)
      .then((data) => setNotes(data))
  }, [])

  return (
    <div className='app__note'>
      <h2 className='head-text'>The more I<span> Live</span><br />the more I <span>Learn</span></h2>
      
      <div className='app__profiles'>
        {notes.map((note, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1}}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={note.title + index}
            >
               <a href={note.noteLink} target="_blank" rel="noreferrer">
                <img src={urlFor(note.imgUrl)} alt={note.title} />
                <h2 className='bold-text' style={{ marginTop: 20 }}>{note.title}</h2>
                <p className='p-text' style={{ marginTop: 10 }}>{note.description}</p>
               </a>
             
             
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Notes, 'app__note'), 'notes')