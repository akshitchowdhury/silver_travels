import React from 'react';
import ticket from '../../assets/serviceLogo1.png';
import hotel from '../../assets/serviceLogo2.png';
import plane from '../../assets/serviceLogo3.jpg';
import bags from '../../assets/serviceLogo3.png';

import './ServiceCard.css'
import { Link } from 'react-router-dom';
import Scard from './Scard';
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
    author: "Siba Maitra",
    Place: "Mumbai",
    image: i1,
  },
  {
    text: `"My wife and I took a trip to Andaman with Silverline Tours & Travels in October 2019. Every moment was fascinating. The arrangements, the hotels & hospitality was exclusively customized.
    Even the evenings were made entertaining with in house fun and games. Still cherish the experience."`,
    author: "Pratik Chowdhury",
    Place: "Dibrugarh, Assam",
    image: i2,
  },

  {
    text: `"I have been on group trips with Silverline Tours & Travels since 2016 to places like Kerala, Rajasthan, Northeast. Always well planned and well organised, they pay special attention to senior citizens. Highly recommended."`,
    author: "Kiran Prakash",
    Place: "Mumbai",
    image: i3,
  },

  {
    text: `"Silverline Tours & Travels has been our trusted choice since 2018, guiding us through unforgettable journeys. From Kaziranga to Shillong, Kasauli to Chail, and the scenic beauty of Kashmir, each trip was meticulously tailored to our preferences. With well-maintained cabs, accommodating drivers, and picturesque accommodations, every aspect exceeded our expectations. Mrs. Bose and her team ensured seamless communication and assistance, making every holiday a cherished memory. Highly recommended for unparalleled travel experiences..
    ."`,
    author: "Rohee Qureshi",
    Place: "Mumbai",
    image: i4,
  },
  {
    text: `"My wife and I along with 2 of our friends visited Kerala in Feb' 2024. Silverline Tours & Travels organised our trip. Everything was good. Nice rooms, excellent food, interesting visits. The Innova crysta car was comfortable and equipped with hand sanitizers, tissues and mineral water. Driver was excellent. Houseboat stay was relaxing with good food although the boat was surprisingly old and basic. Overall a good experience though there's scope for further improvements.
    Cheers!
    ."`,
    author: "Arno Bingemann",
    Place: "Germany",
    image: i5,
  },
  {
    text: `"Thanks to Silverline Tours & Travels, me and my friends could go on a Ladies Only trip to the North East. It was the most enjoyable trip we all ever had.
    ."`,
    author: "Shanta Debbarma",
    Place: "Agartala, Tripura",
    image: i6,
  },
  {
    text: `"I have gone on group tours with Silverline Tours & Travels to both domestic and international destinations like Bangkok, Pattaya, Kuala Lumpur and Singapore. I have enjoyed on all the trips. After the days sightseeing, there's the evening get-togethers which is a lot of fun.
    "`,
    author: "Krishna Dutta.",
    Place: "Chandannagar, West Bengal",
    image: i7,
  },
  {
    text: `"Silverline Tours and travels  made my North Bengal trip a breeze! From start to finish, everything was well-organized and stress-free. The entire itinerary was packed with amazing experiences, and I couldn't have asked for a better time. Attention to details was great for all the experiences we had especially the tea ceremony which we experienced at the plantation. Definitely will be booking my future trip from Silverline Tours and Travels !!
    "`,
    author: "Suchi Chakravarty.",
    Place: "Delhi",
    image: i8,
  },
  {
    text: `"Silverline Tours and travels  made my North Bengal trip a breeze! From start to finish, everything was well-organized and stress-free. The entire itinerary was packed with amazing experiences, and I couldn't have asked for a better time. Attention to details was great for all the experiences we had especially the tea ceremony which we experienced at the plantation. Definitely will be booking my future trip from Silverline Tours and Travels !!
    "`,
    author: "Suchi Chakravarty.",
    Place: "Delhi",
    image: i9,
  },
  {
    text: `"Silverline Tours and travels  made my North Bengal trip a breeze! From start to finish, everything was well-organized and stress-free. The entire itinerary was packed with amazing experiences, and I couldn't have asked for a better time. Attention to details was great for all the experiences we had especially the tea ceremony which we experienced at the plantation. Definitely will be booking my future trip from Silverline Tours and Travels !!
    "`,
    author: "Suchi Chakravarty.",
    Place: "Delhi",
    image: i10,
  },
  {
    text: `"Silverline Tours and travels  made my North Bengal trip a breeze! From start to finish, everything was well-organized and stress-free. The entire itinerary was packed with amazing experiences, and I couldn't have asked for a better time. Attention to details was great for all the experiences we had especially the tea ceremony which we experienced at the plantation. Definitely will be booking my future trip from Silverline Tours and Travels !!
    "`,
    author: "Suchi Chakravarty.",
    Place: "Delhi",
    image: i11,
  },
  // Add more testimonials as needed
];

const ServiceCard = () => {
  return (
    <>
      <div class="self-center mt-8 text-5xl font-bold tracking-wider text-center text-white max-w-[90%] mx-auto" style={{
        marginTop: '10%'
      }}>
   Create your next memory with us at Silver Line Travels.. 
</div>
  <Scard/>

    <PopularDetinationCarousel testimonials={testimonials}/>
      {/* <div className="self-center px-4 mt-8 w-full max-w-[90%] mx-auto" style={{marginTop: '10%'}}>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Link to="/birthday">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={ticket}
              style={{ borderRadius: '50%' }}
              className="aspect-square w-[65px]"
              alt="Bus Service"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Touring Variety</div>
            <div className="mt-5 text-base tracking-wide">
            Let Play Pawws host your birthday and turn every moment into a joyful celebration!
            </div>
          </div>
          </Link>

          <Link to="/event">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-white bg-orange-400 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={hotel}
              style={{ borderRadius: '50%' }}
              className="aspect-square w-[65px]"
              alt="Sports Training"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Event Parties</div>
            <div className="mt-5 text-base tracking-wide">
            Experience the magic of event parties hosted by Play Pawws, where every moment is infused with joy and excitement!
            </div>
          </div>
          </Link>

          <Link to="/kitty">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={plane}
              style={{ borderRadius: '50%',  }}
              className="aspect-square w-[65px]"
              alt="Music Training"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Flight Deals</div>
            <div className="mt-5 text-base tracking-wide">
            Indulge in purr-fectly delightful kitty parties hosted by Play Pawws, where fun and feline charm collide!
            </div>
          </div>
          </Link>

          <Link to="/cafe">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full text-center text-white bg-orange-400 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={bags}
              style={{ borderRadius: '50%' }}
              className="aspect-square w-[65px]"
              alt="Best Teachers"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Small Groups</div>
            <div className="mt-5 text-base tracking-wide">
            Relax and unwind in the cozy café and lounge area at Play Pawws, where every moment is infused with comfort and charm
            </div>
          </div>
          </Link>

        </div>
      </div> */}
    </>
  );
};

export default ServiceCard;
