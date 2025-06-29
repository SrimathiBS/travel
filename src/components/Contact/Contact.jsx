import React from 'react'
import './Contact.css'
import Userform from './Userform'
import Booking from './BookingSearch'
import BookingSearch from './BookingSearch'
import UniversitySearch from './UniversitySearch'
import PostExample from './PostExample'
const Contact = () => {
  return (
    <section id='Contact' className='section'>
      <h1>Contact</h1>
      <Userform />
      <br />
      <BookingSearch />
      <br/>
      <br/>
      <UniversitySearch />
      <br/>
      <PostExample />
      <br/>
    </section>
  )
}

export default Contact