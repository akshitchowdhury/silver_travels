import React from "react";

import about from "../../assets/home3.jpg";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import "./About.css";
import SocialIcons from "../Social Icons/SocialIcons";
import AboutWhyUs from "./AboutWhyUs";
const About = () => {
  return (
    <>
      <div>
        <div className="about">
          <Nav />
          <SocialIcons />
          <div
            className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
            style={{ padding: "4%" }}
          >
            <p
              className="paraText text-white text-lg mb-2 md:mb-4"
              style={{ width: "100%", color: "white" }}
            >
              Welcome to Silver Line Travels! At Silver Line Travels, we're
              passionate about crafting unforgettable travel experiences for our
              valued customers. With a commitment to excellence and a dedication
              to customer satisfaction, we strive to make every journey a
              memorable adventure.
              <br />
              <br />
              Our journey began with a simple belief: travel should be more than
              just reaching a destination; it should be about creating lasting
              memories and enriching experiences. That's why we go above and
              beyond to ensure that every aspect of your travel with us is
              meticulously planned and seamlessly executed.
              <br />
              <br />
              With Silver Line Travels, the world is yours to explore. Whether
              you're seeking adventure in far-flung destinations, relaxation on
              sun-kissed beaches, or cultural immersion in bustling cities, we
              offer a wide range of destinations to suit every traveler's taste
              and interests. And with our customizable travel experiences, we
              tailor each journey to cater to your individual preferences,
              ensuring that your trip is uniquely yours.
            </p>
            <div
              alt="placeholder"
              className="eventImg md:w-full"
              style={{
                borderRadius: "5%",
                marginLeft: "4%",
                width: "80%",
                backgroundColor: "inherit",
              }}
            />
          </div>
        </div>
      </div>
      <AboutWhyUs />
      <Footer />
    </>
  );
};

export default About;
