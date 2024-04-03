import React from "react";
import Accordion from "./Accordion";

import attractionBg from "../../assets/g19.jpg";
import i1 from "../../assets/g2.jpg";
import i2 from "../../assets/g3.jpg";
import i3 from "../../assets/g4.webp";
import i4 from "../../assets/g6.jpg";
import i5 from "../../assets/g5.jpg";

const items = [
  {
    title: "Exceptional Customer Service",
    desc: "At Silver Line Travels, customer satisfaction is our top priority. Our dedicated team goes above and beyond to provide personalized assistance, ensuring that every traveler's needs and preferences are met with utmost care and attention.",
    image: i1,
  },
  {
    title: "Wide Range of Destinations: ",
    desc: "Whether you're dreaming of exploring exotic locales, relaxing on sun-kissed beaches, or immersing yourself in rich cultural experiences, Silver Line Travels offers a diverse range of destinations to suit every traveler's taste and interests.",
    image: i2,
  },
  {
    title: "Tailored Travel Experiences:",
    desc: "We understand that every traveler is unique, which is why we tailor our travel experiences to cater to individual preferences. Whether you're seeking adventure, relaxation, or cultural immersion, we design customized itineraries to ensure an unforgettable journey.",
    image: i3,
  },
  {
    title: "Value for Money",
    desc: "With Silver Line Travels, you can rest assured that you're getting excellent value for your money. We offer competitive prices without compromising on quality, ensuring that you enjoy a rewarding travel experience without breaking the bank.",
    image: i4,
  },
  {
    title: "Peace of Mind",
    desc: "Traveling with Silver Line Travels gives you peace of mind knowing that your journey is in capable hands. From seamless bookings to reliable assistance throughout your trip, we strive to make your travel experience hassle-free and enjoyable from start to finish.",
    image: i5,
  },
];

const AboutWhyUs = () => {
  return (
    <div
      className="bg-pink-300 min-h-screen flex flex-col md:flex-row items-center justify-center"
      style={{
        padding: "5%",
        backgroundImage: `url(${attractionBg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "bottom",
      }}
    >
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:w-1/2 md:p-8">
        <p
          className="paraText text-white text-lg mb-4"
          style={{ color: "white" }}
        >
          Welcome to Silver Line Travels! At Silver Line Travels, we're
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
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-0">
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default AboutWhyUs;
