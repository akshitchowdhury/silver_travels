import React from "react";

import about from "../../assets/home3.jpg";
import "./HomeWhyUs.css";

const HomeWhyUs = () => {
  return (
    <div className="WhyUs ">
      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
        style={{ padding: "4%" }}
      >
        <p
          className="paraText text-white text-lg mb-2 md:mb-4"
          style={{ width: "100%", color: "white" }}
        >
          So, why SILVERLINE TOURS & TRAVELS? Ours is a small, low-cost
          enterprise committed to providing value-for-money without compromising
          on comfort. As ardent travelers ourselves, we believe in not only
          sharing the joys of exploring new places and cultures but also pass on
          the benefits of group discounts, concessions, incentives, etc. to our
          customers so that the tour does not burn a hole in your pocket. There
          is a reason behind this. 
          <br />
          <br />
          When we started out in 2015, our customers
          were mainly groups of senior citizens – retirees, pensioners and
          elders and housewives with limited funds, but plenty of time on hand.
          We also discovered that in all their lives, their physical exposure to
          the ‘world beyond’ was limited. These were people eager to set out, if
          only to make up for lost time – just that again, their options were
          limited. Children and grandchildren had no time for them, even as they
          would live under one roof. 
          <br/>
          That’s when we stepped in and made it our
          mission to celebrate the silver strands marking those in the autumn of
          their lives. Hence SILVERLINE TOURS & TRAVELS. Here’s a glimpse of how
          we have moved on since then
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
