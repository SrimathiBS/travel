/* import React from 'react'
import './Navbar.css'
import About from '../About/About'
const Navbar = () => {
  return (
    <header className='head'>
        <a className='title'>Travel</a>
        <nav className='navbar'>
            <a href='/my-app/src/components/About' >About</a>
            <a href='/my-app/src/components/Travel'>Travel</a>
            <a href='/my-app/src/components/contact'>Contact</a>
        </nav>
    </header>
  )
}

export default Navbar
*/


//<------------------->
import React from 'react'
//import{Link} from 'react-router-dom'
import './Navbar.css'
 const Navbar = ()  => {
    return (
        <header className='head'>
            <a href='/' className='title'>Travel</a>
             <nav className='navbar'>
             <a href="#About">About</a>
             <a href="#Travel">Travel</a>
             <a href="#Contact">Contact</a>
             </nav>

        </header>
    )
 }

export default Navbar






/*
<nav className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/travel">Travel</Link>
                <Link to="/contact">Contact</Link>
            </nav> 

            */