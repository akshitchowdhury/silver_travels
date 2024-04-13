import React from "react";

import about from "../../assets/home3.jpg";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import "./About.css";
import SocialIcons from "../Social Icons/SocialIcons";
import AboutWhyUs from "./AboutWhyUs";
import PicFlow from "../Gallery/PicFlow/PicFlow";
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
              Welcome to Silver Line Tours and Travels! We are a one-stop shop
              for travel solutions.Well, everybody claims so. Every travel
              agent, tour operator or consultant will promise you the moon, a
              hassle-free trip up and back. 
              <br></br>
              <br></br>
              In practice, you are herded into a
              plane, train, bus, tram (or whatever), taken on a whirlwind tour,
              made to travel by night and shown some sights by day and at the
              end of it all, dumped back -- much to your relief. At best, you’d
              have had a whistlestop ‘sighting’ trip (rather than sight-seeing)
              and maybe, a few selfies taken.
              <br></br>
              <br></br>
               And of course, you are charged a
              bomb. We do none of that. We make no tall promises, no grand plans
              and do not race against time. We keep things simple, on a
              realistic level. We prefer to pace your travel comfortably such
              that you are able to soak in the atmosphere of every place you
              visit, meet new people, make friends, enjoy the local cuisine,
              sights and sounds… and return with lasting memories. You don’t
              have a job to finish. You are on vacation, after all.
              <br />
              <br />
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
