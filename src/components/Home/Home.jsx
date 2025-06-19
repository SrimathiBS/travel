import React from 'react'
import './Home.css'
import climbImage from '../../assets/climb.png'
import Navbar from './Navbar'
import About from '../About/About'
import Travel from '../Travel/Travel'
import Contact from '../contact/Contact'
const Home = () => {
  return (
    <>
    
    <div className='main-home'>
      <div className='home-paras'>
           <h1>Travel Guide</h1>
           <h2>Have a safe and happy voyage!!</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim, nemo dolorum provident officia velit nobis at voluptatum consequuntur expedita fuga excepturi nulla similique repellendus officiis sit, alias aliquid veritatis.</p>
      </div>
      <div className='home-image'>
          <img src={climbImage} alt='image' />
      </div>
    </div>

    
    </>
  )
}

export default Home