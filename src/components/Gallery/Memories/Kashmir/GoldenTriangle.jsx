import React from 'react'
import Nav from '../../../Navbar/Nav'

import kashmir from '../../../../assets/galleryMemories/gtBg2.jpg'

import a4 from '../../../../assets/galleryMemories/gt6.jpg'
import a2 from '../../../../assets/galleryMemories/gt3.jpg'
import a3 from '../../../../assets/galleryMemories/gt2.jpg'
import a1 from '../../../../assets/galleryMemories/gt4.jpg'
import ImageGrid from './ImageGrid'


const images = [
    {image: a1},
    {image: a2},
    {image: a3},
    {image: a4}
]
const GoldenTriangle = () => {
  return (
    <div className='kashmir' style={{ height: 'auto', padding: '2%', }}>
      <Nav/>
      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
        style={{  padding: "6%", marginTop: '2%',borderRadius: '2%', backgroundImage: 'linear-gradient(to bottom right, #C2BFB5, #BF10D6)'}}
      >
        <p
          className="paraText text-white text-lg mb-2 md:mb-4"
          style={{ width: "auto", color: "black" }}
        >
          So, why SILVERLINE TOURS & TRAVELS? Ours is a small, low-cost
          enterprise committed to providing value-for-money without compromising
          on comfort. As ardent travelers ourselves, we believe in not only
          sharing the joys of exploring new places and cultures but also pass on
          the benefits of group discounts, concessions, incentives, etc. to our
          customers so that the tour does not burn a hole in your pocket. There
          is a reason behind this. 
          <br />
          
        </p>
        <img
          src={kashmir}
          alt="placeholder"
          className="eventImg md:w-full"
          style={{
            height: "400px",
            borderRadius: "5%",
            marginLeft: "4%",
            width: "auto",
            maxWidth: 'auto'
          }}
        />
      </div>
      <div style={{   marginTop: '2%', padding: '6%'}}>
      <ImageGrid source={images}/>
      </div>
    </div>
  )
}

export default GoldenTriangle
 
