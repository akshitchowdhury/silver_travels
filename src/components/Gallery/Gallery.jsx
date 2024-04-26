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
      <SocialIcons/>
    </div>  
    {/* <ImageCards/>
     */}
     
     <h1 className=" py-4 my-7 tracking-widest border-fuchsia-900 text-fuchsia-900 text-center">
     Take a look at some of the best memories created amongst our most sought after destinations!
            </h1>
     <TripMemories/>
     <div className="transition" style={{padding: '5%'}}>
     <h1 className=" tracking-widest border-fuchsia-900 text-fuchsia-900 text-center">
              Create unforgettable memories and cherished moments with Silverline Tours &
              Travels!
            </h1>
            
      
            <br/>


     <ITransition/>

     
     </div>
      
      
      
    <Footer/>
  </>
  )
}

export default Gallery
