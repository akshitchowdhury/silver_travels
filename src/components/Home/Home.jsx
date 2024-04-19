import React from "react";

import "./Home.css";
import mainLogo from "../../assets/logo.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomeAbout from "./HomeAbout";
import HomeWhyUs from "./HomeWhyUs";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Nav from "../Navbar/Nav";
import SocialIcons from "../Social Icons/SocialIcons";
import ServiceCard from "../Services/ServiceCard";
import Scard from "../Services/Scard";
import BookNow from "./BookNow";
import TestimonialCarousel from "../Testimonials/TestimonialCarousel";
import TestimonialCard from "../Testimonials/TestimonialCard";

import i1 from '../../assets/testimonials/1.jpg'
import i2 from '../../assets/testimonials/2.jpg'
import i3 from '../../assets/testimonials/3.jpg'
import i4 from '../../assets/testimonials/4 (2).jpg'
import i5 from '../../assets/testimonials/5 (2).jpg'
import i6 from '../../assets/testimonials/6.jpg'
import i7 from '../../assets/testimonials/7.jpg'


const testimonials = [
  {
    text: `"Silverline Tours & Travels organised our trip to the North East (Guwahati, Shillong, Cherrapunji & Kaziranga ) in Feb'2022. Planning and arrangements of hotels and car were very good. We enjoyed the trip thoroughly.
    "`,
    author: "-Siba Maitra",
    Place: "Mumbai",
    image: {}
  },
  {
    text: `"My wife and I took a trip to Andaman with Silverline Tours & Travels in October 2019. Every moment was fascinating. The arrangements, the hotels & hospitality was exclusively customized.
    Even the evenings were made entertaining with in house fun and games. Still cherish the experience."`,
    author: "-Pratik Chowdhury",
    Place: "Dibrugarh, Assam",
  },
  
  {
    text: `"I have been on group trips with Silverline Tours & Travels since 2016 to places like Kerala, Rajasthan, Northeast. Always well planned and well organised, they pay special attention to senior citizens. Highly recommended."`,
    author: "-Kiran Prakash",
    Place: "Mumbai",
  },
  {
    text: `"I have been on group trips with Silverline Tours & Travels since 2016 to places like Kerala, Rajasthan, Northeast. Always well planned and well organised, they pay special attention to senior citizens. Highly recommended."`,
    author: "-Kiran Prakash",
    Place: "Mumbai",
  },
  {
    text: `"We have travelled with Silverline Tours & Travels since 2018 and covered multiple locations with them. Our first trip was to Kaziranga - Shillong. Second trip was to Kasauli - Chail and latest one was to Kashmir.
    We had excellent experience in all three trips. The itinerary was customised to our needs. The cabs provided were in very good condition with cordial drivers. The hotels , rooms had nice views.Most important, Mrs Bose and her team was in touch throughout the trip and provided any help needed.
    All in all, Silverline Tours & Travels has made all our holidays truly memorable and is highly recommended.
    ."`,
    author: "-Rohee Qureshi",
    Place: "Mumbai",
  },
  {
    text: `"My wife and I along with 2 of our friends visited Kerala in Feb' 2024. Silverline Tours & Travels organised our trip. Everything was good. Nice rooms, excellent food, interesting visits. The Innova crysta car was comfortable and equipped with hand sanitizers, tissues and mineral water. Driver was excellent. Houseboat stay was relaxing with good food although the boat was surprisingly old and basic. Overall a good experience though there's scope for further improvements.
    Cheers!
    ."`,
    author: "-Arno Bingemann",
    Place: "Germany",
  },
  {
    text: `"Thanks to Silverline Tours & Travels, me and my friends could go on a Ladies Only trip to the North East. It was the most enjoyable trip we all ever had.
    ."`,
    author: "-Shanta Debbarma",
    Place: "Agartala, Tripura",
  },
  {
    text: `"I have gone on group tours with Silverline Tours & Travels to both domestic and international destinations like Bangkok, Pattaya, Kuala Lumpur and Singapore. I have enjoyed on all the trips. After the days sightseeing, there's the evening get-togethers which is a lot of fun.
    "`,
    author: "-Krishna Dutta.",
    Place: "Chandannagar, West Bengal",
  },
  // Add more testimonials as needed
];

const Home = () => {
  return (
    <>
      <div className="navBlock w-full">
        <nav className="bg-cover">
          <Nav />
          <SocialIcons />
          <h1
            className=" text-center font-semibold 
         text-4xl md:text-4xl lg:text-6xl mt-10 md:mt-20 lg:mt-40"
          >
            Silver Line Tours and travels
          </h1>
          <h1 className="titleText text-center font-semibold text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-8 lg:mt-16">
            Connecting people and places
          </h1>
        </nav>
      </div>
      <HomeAbout />

      <HomeWhyUs />
      <BookNow />
      <TestimonialCarousel testimonials={testimonials} />
      <Footer />
    </>
  );
};

export default Home;
