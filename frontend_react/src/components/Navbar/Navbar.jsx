import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false) 

  return (
    <nav className='app__navbar'>
         <div className="app__navbar-logo">
            <div className="wavy">
              <span className='i-1'>Y</span>
              <span className='i-2'>I</span>
              <span className='i-3'>_</span>
              <span className='i-4'>C</span>
              <span className='i-5'>H</span>
              <span className='i-6'>I</span>
              <span className='i-7'>E</span>
              <span className='i-8'>N</span>
              <span className='i-9'>_</span>
              <span className='i-10'>L</span>
              <span className='i-11'>E</span>
              <span className='i-12'>E</span>
            </div>
         </div>
      <ul className="app__navbar-links">
        {['home', 'skills', 'work', 'notes', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

        <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className='app__navbar-menuList'>
              {['home', 'skills', 'works', 'notes', 'contact'].map((item) => (
                <li key={item} data-text={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar