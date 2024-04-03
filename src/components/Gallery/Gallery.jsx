import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'
import SocialIcons from '../Social Icons/SocialIcons'
import './Gallery.css'
import ImageCards from './ImageCards'
import ITransition from './Transition/ITransition'
const Gallery = () => {
  return (
    <>
    <div className='gallery'>
      <Nav/>
      {/* <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
        style={{ padding: "4%" }}
      >
        <p
          className="paraText text-white text-lg mb-2 md:mb-4"
          style={{ width: "100%", color:'black' }}
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
        <div
          
          alt="placeholder"
          className="eventImg md:w-full"
          style={{
            height: "400px",
            borderRadius: "5%",
            marginLeft: "4%",
            width: "100%",
            backgroundColor: 'inherit',
            
          }}
        />
      </div> */}
    </div>  

    {/* <ImageCards/>
     */}
     <div className="transition" style={{padding: '5%'}}>
     <h1 className=" tracking-widest border-fuchsia-900 text-fuchsia-900 text-center">
              Create unforgettable memories and cherished moments with Silver
              Travels!
            </h1>
            <br/>
     <ITransition/>
     </div>
      <SocialIcons/>
      
      
      
    <Footer/>
  </>
  )
}

export default Gallery
