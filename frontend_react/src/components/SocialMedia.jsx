import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF,  FaLinkedinIn } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>   
        <a className='ins' href='https://www.instagram.com/qq_lyc0818/' target="_blank" ><BsInstagram  /></a>
      </div>

      <div>
        <a className='fb' href='https://www.facebook.com/kevinyichienlee/'  target="_blank"><FaFacebookF /></a>
      </div>

      <div>
        <a className='linkdin' href='https://www.linkedin.com/in/yi-chienlee/'  target="_blank"> < FaLinkedinIn /></a>
      </div>
    </div>
  )
}

export default SocialMedia