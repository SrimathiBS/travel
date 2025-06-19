/*import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Home/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Travel from './components/Travel/Travel'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    
    <Router>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Travel' element={<Travel/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
    </Router>
    
  )
}

export default App */


import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Travel from './components/Travel/Travel'
import Contact from './components/contact/Contact'
import Navbar from './components/Home/Navbar'

const App = () => {
  return (<>
  <Navbar/>
  <Home />
  <About />
  <Travel />
  <Contact />
  </>
  )
}

export default App