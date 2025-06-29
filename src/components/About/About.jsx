import React from 'react'
import './About.css'
import image from '../../assets/about.jpeg'
const About = () => {
  return (
    <section id='About' className='section'>
      <div className='about'>
        <div className='about-image'>
      <img src={image} alt='image' />
      </div>
        <div className='about-texts'>
      <h1>About Us</h1>
      <h2>Lorem, ipsum .</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illum suscipit similique debitis, ex sit cumque nemo nobis asperiores possimus dolore id provident quidem voluptas praesentium perferendis? Eius, labore in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consectetur voluptas impedit voluptatum illum hic vel tempore magni nulla, sapiente, debitis cumque, et beatae ipsa sit non quibusdam itaque pariatur.</p>
      </div>
      
      </div>
    </section>
  )
}

export default About