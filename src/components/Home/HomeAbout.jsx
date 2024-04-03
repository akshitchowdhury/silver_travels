import React from "react";

import "./HomeAbout.css";

import home1 from "../../assets/landingBg.jpg";
import home2 from "../../assets/home1.jpg";
import home3 from "../../assets/home2.jpg";
import home4 from "../../assets/home3.jpg";

const HomeAbout = () => {
  return (
    <div className="home2half">
      <div
        className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
        style={{ padding: "4%" }}
      >
        <div
          class="cardFrame grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-8"
          style={{ padding: "2%" }}
        >
          <div class="cardItem">
            <img
              src={home1}
              alt="placeholder"
              class="eventImg w-full h-full rounded-lg"
            />
          </div>

          <div class="cardItem">
            <img
              src={home2}
              alt="placeholder"
              class="eventImg w-full h-full rounded-lg"
            />
          </div>

          <div class="cardItem">
            <img
              src={home3}
              alt="placeholder"
              class="eventImg w-full h-full rounded-lg"
            />
          </div>

          <div class="cardItem">
            <img
              src={home4}
              alt="placeholder"
              class="eventImg w-full h-full rounded-lg"
            />
          </div>
        </div>

        <p className="paraText text-lg mb-2 md:mb-4">
          At Silver Line Travels, we're passionate about crafting unforgettable
          travel experiences for our valued customers. With a commitment to
          excellence and a dedication to customer satisfaction, we strive to
          make every journey a memorable adventure
          <br />
          <br />
          Our journey began with a simple belief: travel should be more than
          just reaching a destination; it should be about creating lasting
          memories and enriching experiences. That's why we go above and beyond
          to ensure that every aspect of your travel with us is meticulously
          planned and seamlessly executed.
          <br />
          <br />
          Traveling with Silver Line Travels isn't just about reaching your
          destination; it's about the journey itself. It's about discovering new
          cultures, making lifelong memories, and forging connections with
          fellow travelers. So whether you're embarking on a solo adventure, a
          romantic getaway, or a family vacation, trust Silver Line Travels to
          make your travel dreams come true.
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
