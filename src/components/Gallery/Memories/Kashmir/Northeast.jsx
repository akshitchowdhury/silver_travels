import React from "react";
import Nav from "../../../Navbar/Nav";

import kashmir from "../../../../assets/galleryMemories/btBg2.jpg";

import a3 from "../../../../assets/galleryMemories/bt5.jpg";
import a4 from "../../../../assets/galleryMemories/bt2.jpg";
import a1 from "../../../../assets/galleryMemories/ne5.jpg";
import a2 from "../../../../assets/galleryMemories/bt4.jpg";
import neBg from "../../../../assets/galleryMemories/northEastBg.jpg";
import ImageGrid from "./ImageGrid";
import Footer from "../../../Footer/Footer";

import SocialIcons from "../../../Social Icons/SocialIcons";

import './memoryStyles.css'

const images = [{ image: a1 }, { image: a2 }, { image: a3 }, { image: a4 }];
const Northeast = () => {
  return (
    <>
      <div
        className="kashmir
        h-auto md:h-full sm:h-auto" 
        style={{
          backgroundImage: `url(${neBg})`
        }}
      >
        <Nav />
        <SocialIcons/>
        <div
          className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
          style={{ padding: "6%", marginTop: "2%", borderRadius: "2%" }}
        >
          <p
            className="paraText text-white tex-sm md:text-xl sm:text-sm mb-2 md:mb-4 "
            style={{  color: "white" }}
          >
            Embark on a mesmerizing journey through the enchanting landscapes of
            North East India and Bhutan with Silverline Tours & Travels. Our recent
            expedition uncovered the hidden gems of this region, from the
            majestic Himalayan peaks to the lush valleys and cascading
            waterfalls. Join us for an unforgettable adventure filled with
            awe-inspiring natural wonders and cultural discoveries. Below, we
            share glimpses of our remarkable North East India and Bhutan trip.
            <br />
          </p>
          
        </div>
      </div>
      <h1 className=" py-4 my-7 tracking-widest border-fuchsia-900 text-slate-800 text-center">Below, we share
            glimpses of our unforgettable journey.</h1>
      <div style={{ marginTop: "2%", padding: "6%" }}>
          <ImageGrid source={images} />
        </div>
      <Footer />
    </>
  );
};

export default Northeast;
