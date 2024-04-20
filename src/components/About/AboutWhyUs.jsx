import React from "react";
import Accordion from "./Accordion";

import attractionBg from "../../assets/doodle.jpg";
import i1 from "../../assets/g2.jpg";
import i2 from "../../assets/g3.jpg";
import i3 from "../../assets/g4.webp";
import i4 from "../../assets/g6.jpg";
import i5 from "../../assets/g5.jpg";
import PicFlow from "../Gallery/PicFlow/PicFlow";

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
      className="abtWhyUs bg-pink-300 min-h-screen flex flex-col md:flex-row items-center justify-center"
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
          So, why SILVERLINE TOURS & TRAVELS? Ours is a small, low-cost
          enterprise committed to providing value-for-money without compromising
          on comfort. As ardent travelers ourselves, we believe in not only
          sharing the joys of exploring new places and cultures but also pass on
          the benefits of group discounts, concessions, incentives, etc. to our
          customers so that the tour does not burn a hole in your pocket. There
          is a reason behind this.
          <br/>
          <br/>
           When we started out in 2015, our customers
          were mainly groups of senior citizens – retirees, pensioners and
          elders and housewives with limited funds, but plenty of time on hand.
          We also discovered that in all their lives, their physical exposure to
          the ‘world beyond’ was limited. These were people eager to set out, if
          only to make up for lost time – just that again, their options were
          limited. Children and grandchildren had no time for them, even as they
          would live under one roof. 
          <br />
          <br />
          That’s when we stepped in and made it our
          mission to celebrate the silver strands marking those in the autumn of
          their lives. Hence SILVERLINE TOURS & TRAVELS. Here’s a glimpse of how
          we have moved on since then.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-0">
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default AboutWhyUs;
