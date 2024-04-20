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
        className="flex flex-col
        
         md:flex-row items-center md:items-start justify-center md:justify-start"
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
          We are a one-stop shop for travel solutions. Well, everybody claims
          so. Every travel agent, tour operator or consultant will promise you
          the moon, a hassle-free trip up and back. In practice, you are herded
          into a plane, train, bus, tram (or whatever), taken on a whirlwind
          tour, made to travel by night and shown some sights by day and at the
          end of it all, dumped back -- much to your relief. 
          <br />
          <br />At best, you’d have
          had a whistlestop ‘sighting’ trip (rather than sight-seeing) and
          maybe, a few selfies taken. And of course, you are charged a bomb. We
          do none of that. We make no tall promises, no grand plans and do not
          race against time. We keep things simple, on a realistic level. We
          prefer to pace your travel comfortably such that you are able to soak
          in the atmosphere of every place you visit, meet new people, make
          friends, enjoy the local cuisine, sights and sounds… and return with
          lasting memories. You don’t have a job to finish. You are on vacation,
          after all.
          <br />
          {/* <br />
          Traveling with Silver Line Travels isn't just about reaching your
          destination; it's about the journey itself. It's about discovering new
          cultures, making lifelong memories, and forging connections with
          fellow travelers. So whether you're embarking on a solo adventure, a
          romantic getaway, or a family vacation, trust Silver Line Travels to
          make your travel dreams come true. */}
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
