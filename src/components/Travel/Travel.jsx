import React from 'react'
import './Travel.css'
import frist from '../../assets/1.jpeg'
import sec from '../../assets/2.jpeg'
import thir from '../../assets/3.jpeg'
import four from '../../assets/4.jpeg'
import fif from '../../assets/5.jpeg'
import six from '../../assets/6.jpeg'

const Travel = () => {
  return (
    <section id='Travel' className='section'>
      <h1>Explore</h1>
      <div className='container'>
        <div className='card'> <img src={frist} alt='image' /> </div>
        <div className='card'> <img src={sec} alt='image' /> </div>
        <div className='card'> <img src={thir} alt='image' /> </div>
        <div className='card'> <img src={four} alt='image' /> </div>
        <div className='card'> <img src={fif} alt='image' /> </div>
        <div className='card'> <img src={six} alt='image' /> </div>
      </div>
    

    </section>
  )
}

export default Travel



/* <div className='container'>
      <div className='card'>
            <img src={first} alt='img' />
      </div>

    </div>

    */