import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../Navbar/Nav'
import SocialIcons from '../Social Icons/SocialIcons'
import './Gallery.css'
import ImageCards from './ImageCards'
import ITransition from './Transition/ITransition'

import TripMemories from './Memories/Kashmir/TripMemories'
const Gallery = () => {
  return (
    <>
    <div className='gallery'>
      <Nav/>

    </div>  
    {/* <ImageCards/>
     */}
     <TripMemories/>
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
