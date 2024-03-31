import React from 'react'

import about from '../../assets/home3.jpg'

const About = () => {
  return (
    <div>
        <div className="WhyUs" >
      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
        style={{ padding: "4%" }}
      >
        <p
          className="paraText text-white text-lg mb-2 md:mb-4"
          style={{ width: "100%", color:'white' }}
        >
          At Play Paw, we believe in creating a world of fun and excitement for
          kids! Our playzone area is designed to be a haven of joy, where
          children can unleash their imagination and energy in a safe and
          vibrant environment.
          <br />
          <br />
          With colorful play structures, interactive games, and engaging
          activities, Play Paw is the ultimate destination for kids to laugh,
          play, and make new friends. Our dedicated staff ensures that every
          visit is filled with unforgettable moments and endless smiles.
          <br />
          <br />
          Whether it's a birthday party, a family outing, or just a day of fun,
          Play Paw is the perfect place for kids to explore, learn, and grow.
          Join us today and let the adventure begin!
        </p>
        <img
          src={about}
          alt="placeholder"
          className="eventImg md:w-full"
          style={{
            height: "400px",
            borderRadius: "5%",
            marginLeft: "4%",
            width: "100%",
          }}
        />
      </div>
    </div>      
    </div>
  )
}

export default About
