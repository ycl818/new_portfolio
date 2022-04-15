import React from 'react'

import { Notes, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <Notes />
      <Footer />
    </div>
  )
}

export default App