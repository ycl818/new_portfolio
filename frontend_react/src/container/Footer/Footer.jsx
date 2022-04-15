import React, { useState } from 'react'


import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'
import { useForm } from "react-hook-form";

const Footer = () => {

 
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit,  formState: { errors }, clearErrors} = useForm({ reValidateMode:'onSubmit'});
  
  const errorNameMsg = "Please Enter Your Name ^^"
  const errorEmailMsg = "Please Enter Your Email Correctly !"
  const errorText = "Type something to me, thanks!"

  const onSubmit = async data => {
    console.log(data);
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: data.name,
      email: data.email,
      message: data.message,
    }

    client.create(contact)
      .then(()=> {
        setLoading(false)
        setIsFormSubmitted(true)
      })
  }

 

  return (

    
  
    <div className='app__footer app__flex'>
      
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
      <form className='app__footer-form' onSubmit={handleSubmit(onSubmit)}>
        <div className="app__flex">
          <input 
            className='p-text'
            type="text" 
            placeholder='Your Name' 
            name='name' 
            maxLength="10"
            {...register('name',{ required: errorNameMsg , minLength: {value: 2, message: "Ha! Don't Lie me your name"} })}
            onClick={ ()=> {clearErrors("name") }}
          
          />
          {errors.name  &&  <p className='errorText'> {errors.name.message}</p>}
          
        </div>

        <div className="app__flex">
          <input 
            className='p-text' 
            type="email" 
            placeholder='Your Email' 
            name='email' 
            maxLength="35"
            onClick={ ()=> {clearErrors("email") }}
            {...register('email',{ required: errorEmailMsg, pattern: {value:/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/, message: "Invalid Email Address" }})} />
            {errors.email  &&  <p className='errorText'> {errors.email.message}</p>}
        </div>

        <div className='app__flex'>
          <textarea
            className='p-text'
            placeholder='Your Message'
            name="message"
            maxLength="200"
            {...register('message',{ required: errorText, minLength: {value: 2, message: "At least 5 characters!"} })}
          
          />
          {errors.message  &&  <p className='errorText'> {errors.message.message}</p>}
          
        </div>
      
        <button type='submit' className='p-text' >{loading ? 'Sending' : 'Send Message' }</button>
     
      </form>
      : 
      <div>
        <h2 className='head-text'>Thank you for getting touch</h2>
      </div> }

      
    </div>
    
    
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'),'contact', 'app__gradientColor')