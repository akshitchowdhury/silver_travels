import React from 'react'
import Nav from '../Navbar/Nav'
import Footer from '../Footer/Footer'
import './Services.css'
import ServiceCard from './ServiceCard'
import SocialIcons from '../Social Icons/SocialIcons'
import PopularDetinationCarousel from './PopularDestinations/PopularDetinationCarousel';
import i1 from "../../assets/services/andaman.jpg";
import i2 from "../../assets/services/kerela.jpg";
import i3 from "../../assets/services/bhutab.jpg";
import i4 from "../../assets/services/goldenTriangle.jpg";
import i5 from "../../assets/services/karnataka.jpg";
import i6 from "../../assets/services/kashmir.jpg";
import i7 from "../../assets/services/northeast.jpg";
import i8 from "../../assets/services/rajasthan.jpg";
import i9 from "../../assets/services/sikkim.jpg";
import i10 from "../../assets/services/singapore.jpg";
import i11 from "../../assets/services/thailand.jpg";

const testimonials = [
  {
    text: `"Silverline Tours & Travels organised our trip to the North East (Guwahati, Shillong, Cherrapunji & Kaziranga ) in Feb'2022. Planning and arrangements of hotels and car were very good. We enjoyed the trip thoroughly.
    "`,
    author: "Andaman and Nicobar",
    Place: "Mumbai",
    image: i1,
  },
  {
    text: `"My wife and I took a trip to Andaman with Silverline Tours & Travels in October 2019. Every moment was fascinating. The arrangements, the hotels & hospitality was exclusively customized.
    Even the evenings were made entertaining with in house fun and games. Still cherish the experience."`,
    author: "Kerela",
    Place: "Dibrugarh, Assam",
    image: i2,
  },

  {
    text: `"I have been on group trips with Silverline Tours & Travels since 2016 to places like Kerala, Rajasthan, Northeast. Always well planned and well organised, they pay special attention to senior citizens. Highly recommended."`,
    author: "Bhutan",
    Place: "Mumbai",
    image: i3,
  },

  {
    text: `"Silverline Tours & Travels has been our trusted choice since 2018, guiding us through unforgettable journeys. From Kaziranga to Shillong, Kasauli to Chail, and the scenic beauty of Kashmir, each trip was meticulously tailored to our preferences. With well-maintained cabs, accommodating drivers, and picturesque accommodations, every aspect exceeded our expectations. Mrs. Bose and her team ensured seamless communication and assistance, making every holiday a cherished memory. Highly recommended for unparalleled travel experiences..
    ."`,
    author: "Golden Triangle",
    Place: "Mumbai",
    image: i4,
  },
  {
    text: `"My wife and I along with 2 of our friends visited Kerala in Feb' 2024. Silverline Tours & Travels organised our trip. Everything was good. Nice rooms, excellent food, interesting visits. The Innova crysta car was comfortable and equipped with hand sanitizers, tissues and mineral water. Driver was excellent. Houseboat stay was relaxing with good food although the boat was surprisingly old and basic. Overall a good experience though there's scope for further improvements.
    Cheers!
    ."`,
    author: "Karnataka",
    Place: "Germany",
    image: i5,
  },
  {
    text: `"Thanks to Silverline Tours & Travels, me and my friends could go on a Ladies Only trip to the North East. It was the most enjoyable trip we all ever had.
    ."`,
    author: "Kashmir",
    Place: "Agartala, Tripura",
    image: i6,
  },
  {
    text: `"I have gone on group tours with Silverline Tours & Travels to both domestic and international destinations like Bangkok, Pattaya, Kuala Lumpur and Singapore. I have enjoyed on all the trips. After the days sightseeing, there's the evening get-togethers which is a lot of fun.
    "`,
    author: "North East India",
    Place: "Chandannagar, West Bengal",
    image: i7,
  },
  {
    text: `"Silverline Tours and travels  made my North Bengal trip a breeze! From start to finish, everything was well-organized and stress-free. The entire itinerary was packed with amazing experiences, and I couldn't have asked for a better time. Attention to details was great for all the experiences we had especially the tea ceremony which we experienced at the plantation. Definitely will be booking my future trip from Silverline Tours and Travels !!
    "`,
    author: "Rajasthan",
    Place: "Delhi",
    image: i8,
  },
  {
    text: `"Silverline Tours and travels  made my North Bengal trip a breeze! From start to finish, everything was well-organized and stress-free. The entire itinerary was packed with amazing experiences, and I couldn't have asked for a better time. Attention to details was great for all the experiences we had especially the tea ceremony which we experienced at the plantation. Definitely will be booking my future trip from Silverline Tours and Travels !!
    "`,
    author: "Sikkim",
    Place: "Delhi",
    image: i9,
  },
  {
    text: `"Silverline Tours and travels  made my North Bengal trip a breeze! From start to finish, everything was well-organized and stress-free. The entire itinerary was packed with amazing experiences, and I couldn't have asked for a better time. Attention to details was great for all the experiences we had especially the tea ceremony which we experienced at the plantation. Definitely will be booking my future trip from Silverline Tours and Travels !!
    "`,
    author: "Singapore",
    Place: "Delhi",
    image: i10,
  },
  {
    text: `"Silverline Tours and travels  made my North Bengal trip a breeze! From start to finish, everything was well-organized and stress-free. The entire itinerary was packed with amazing experiences, and I couldn't have asked for a better time. Attention to details was great for all the experiences we had especially the tea ceremony which we experienced at the plantation. Definitely will be booking my future trip from Silverline Tours and Travels !!
    "`,
    author: "Thailand",
    Place: "Delhi",
    image: i11,
  },
  // Add more testimonials as needed
];


const Services = () => {
  return (
    <>
    <div className='services'>
      <Nav/>
      <SocialIcons/>

    
      <PopularDetinationCarousel testimonials={testimonials}/>
      <div class="self-center  text-5xl md:text-3xl  font-bold 
      tracking-wider text-center text-white max-w-[90%] mx-auto" style={{
        
      }}>
   View our Services we cater for our dear customers
</div>

        <div className="serviceCards my-32">
          <ServiceCard/>
        </div>

      <div>

      </div>



          </div>
          <Footer/>
          </>

  )
}

export default Services
