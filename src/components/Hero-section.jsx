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
            <h3>Brief Intro comes here</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati beatae culpa corporis atque excepturi. Nostrum sunt nobis ipsum distinctio magnam.</p>
          </div>
    </section>
  )
}

export default Hero
