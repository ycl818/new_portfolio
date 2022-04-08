import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
    
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      {process.env.REACT_APP_SANITY_PROJECT_ID}
    </div>
  )
}

export default App