import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import './Services.css'
import ServiceCard from './ServiceCard'
import SocialIcons from '../Social Icons/SocialIcons'
const Services = () => {
  return (
    <>
    <div className='services'>
      <Nav/>
      <SocialIcons/>


        <div className="serviceCards">
          <ServiceCard/>
        </div>



          </div>
          <Footer/>
          </>

  )
}

export default Services
