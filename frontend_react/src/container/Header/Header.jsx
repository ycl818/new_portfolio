import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import cat from '../../assets/animated-cat.gif'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 2,
      delayChildren:0.5,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  return (
    <div className=' app__header app__flex'>
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0,1] }}
        transition={{ duration: 0.8}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
              <span><img className='cat' src={cat} alt="loading..."/></span>
              <div style={{ marginLeft: 20}}>
                <p className="p-text ">Hello I'm</p>
                <h2 data-text="Yi-Chien Lee" >Yi-Chien Lee</h2>
              </div>
            </div>  

            <div className="tag-cmp ">
              <motion.div
                whileInView={{ x: [-100, 0], opacity: [0,1] }}
                transition={{ duration: 1.5}}
                className="app__header-info app__flex"
              >
                <p className="p-text">Welcome to my</p>
                <p className="p-text">imagination</p>
               </motion.div>
            </div>
        </div>
      
      </motion.div>

      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
      >

        <motion.div
          whileInView={{ scale: [0, 1.05] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="app__header-profile"
        >
          
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            stopOnHover
            swipeable
            useKeyboardArrows
            swipeScrollTolerance={6}
            className="app__header-carousel"
           
          >
            <img src={images.profile6} />
            <img src={images.profile2} />
            <img src={images.profile3} />
            <img src={images.profile4} />
            <img src={images.profile} />
          </Carousel>
             
            
         
        </motion.div>
      
      {/* <motion.img
        whileInView={{ scale: [0, 1.1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        transition={{ duration: 0.5}}
        className="app__header-circles"
      >
        {[images.cpp, images.javascript, images.python].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')