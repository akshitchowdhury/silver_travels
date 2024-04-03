import React from "react";

import about from '../../assets/home3.jpg'
import './HomeWhyUs.css'

const HomeWhyUs = () => {
  return (
    <div className="WhyUs" >
      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
        style={{ padding: "4%" }}
      >
        <p
          className="paraText text-white text-lg mb-2 md:mb-4"
          style={{ width: "100%", color:'white' }}
        >Welcome to Silver Line Travels! At Silver Line Travels, we're
          passionate about crafting unforgettable travel experiences for our
          valued customers. With a commitment to excellence and a dedication to
          customer satisfaction, we strive to make every journey a memorable
          adventure.
          <br />
          <br />
          Our journey began with a simple belief: travel should be more than
          just reaching a destination; it should be about creating lasting
          memories and enriching experiences. That's why we go above and beyond
          to ensure that every aspect of your travel with us is meticulously
          planned and seamlessly executed.
          <br />
          <br />
          We understand that your time and resources are valuable, which is why
          we strive to offer excellent value for your money. With competitive
          prices and uncompromising quality, we make luxury travel accessible to
          all.
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
  );
};

export default HomeWhyUs;
