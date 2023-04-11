import React from 'react'
import book from "./images/library.jpg";
import "./styles/hero-section.css"

const Hero = () => {
  return (
      <section className='hero-section'>
          <div className='hero-image-section'>
              <img src={book} alt='book'/>
          </div>
          <div className='hero-intro'>
            <h3>Book club</h3>
            <p>One stop for all the books you need</p>
          </div>
    </section>
  )
}

export default Hero
