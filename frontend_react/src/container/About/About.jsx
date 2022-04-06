import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './About.scss'

const abouts = [
  {title:'Web Development',description: "I'm a good developer.", imgURL: images.about01},
  {title:'Web Development',description: "I'm a good developer.", imgURL: images.about02},
  {title:'Web Development',description: "I'm a good developer.", imgURL: images.about03},
  {title:'Web Development',description: "I'm a good developer.", imgURL: images.about04},
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>
         I know that
         <span>Good Design</span>
         <br />
         <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{ scale: 1.1}}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
            >
              <img src={about.imgURL} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
        ))}
      </div>
    </>
  )
}

export default About