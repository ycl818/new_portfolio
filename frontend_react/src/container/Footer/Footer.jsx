import React, { useState } from 'react'


import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {

  const [formData, setFormData] = useState({ name:'', email:'', message:'' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(()=> {
        setLoading(false)
        setIsFormSubmitted(true)
      })
  }

  return (
    <div className='app__footer app__flex'>
      
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      
      <h2 className='head-text'>Take a coffee & Chat with me</h2>

      <div className="app__footer-cards ">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto: kevinyichienlee@gmail.com" className='p-text'>kevinyichienlee@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tal: +886 903 133-236" className='p-text'>+886 903-133-236</a>
        </div>
      </div>

      {!isFormSubmitted ?
      <div className='app__footer-form'>
        <div className="app__flex">
          <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
        </div>

        <div className="app__flex">
          <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
        </div>

        <div >
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text ' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message' }</button>
      </div>
      : 
      <div>
        <h3 className='head-text'>Thank you for getting touch</h3>
      </div> }

      
    </div>
    
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'),'contact', 'app__gradientColor')