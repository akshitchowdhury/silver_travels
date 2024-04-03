import React from "react";
import Accordion from "./Accordion";

import attractionBg from "../../assets/g8.webp";
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
      className="bg-pink-300 min-h-screen flex items-center justify-center"
      style={{
        padding: "5%",
        backgroundImage: `url(${attractionBg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto">
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default AboutWhyUs;
