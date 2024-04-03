import React from 'react'

import './HomeAbout.css'

import home1 from '../../assets/landingBg.jpg'
import home2 from '../../assets/home1.jpg'
import home3 from '../../assets/home2.jpg'
import home4 from '../../assets/home3.jpg'

const HomeAbout = () => {
  return (
    <div className='home2half'>

<div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start" style={{ padding: '4%' }}>
 
<div class="cardFrame grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-8" style={{padding: '2%'}}>
  <div class="cardItem">
    <img src={home1} alt="placeholder" class="eventImg w-full h-full rounded-lg" />
  </div>
  
  <div class="cardItem">
    <img src={home2} alt="placeholder" class="eventImg w-full h-full rounded-lg" />
  </div>
  
  <div class="cardItem">
    <img src={home3} alt="placeholder" class="eventImg w-full h-full rounded-lg" />
  </div>
  
  <div class="cardItem">
    <img src={home4} alt="placeholder" class="eventImg w-full h-full rounded-lg" />
  </div>
  
  </div>
 
  <p className="paraText text-lg mb-2 md:mb-4">
    At Play Paw, we believe in creating a world of fun and excitement for kids! Our playzone area is designed to be a haven of joy, where children can unleash their imagination and energy in a safe and vibrant environment.
    <br/><br/>
    With colorful play structures, interactive games, and engaging activities, Play Paw is the ultimate destination for kids to laugh, play, and make new friends. Our dedicated staff ensures that every visit is filled with unforgettable moments and endless smiles.
    <br/><br/>
    Whether it's a birthday party, a family outing, or just a day of fun, Play Paw is the perfect place for kids to explore, learn, and grow. Join us today and let the adventure begin!
  </p>
</div>


    </div>
  )
}

export default HomeAbout
