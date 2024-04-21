import React from "react";
import Nav from "../../../Navbar/Nav";

import kashmir from "../../../../assets/galleryMemories/sg3.jpg";
import malayBg from "../../../../assets/galleryMemories/malayBg.jpg";

import a4 from "../../../../assets/galleryMemories/ml1.jpg";
import a2 from "../../../../assets/galleryMemories/ml2.jpg";
import a3 from "../../../../assets/galleryMemories/ml3.jpg";
import a1 from "../../../../assets/galleryMemories/ml4.jpg";
import ImageGrid from "./ImageGrid";
import Footer from "../../../Footer/Footer";
import './memoryStyles.css'

import SocialIcons from "../../../Social Icons/SocialIcons";


const images = [{ image: a1 }, { image: a2 }, { image: a3 }, { image: a4 }];
const Singapore = () => {
  return (
    <>
      <div
        className="kashmir
        h-auto md:h-full sm:h-auto" 
        style={{
          backgroundImage: `url(${malayBg})`,
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
            Embark on an exciting adventure through Singapore with Silverline
            Tours & Travels. Our recent expedition captured the essence of this
            vibrant city-state, from its dazzling skyline to its rich cultural
            tapestry. Explore the iconic Gardens by the Bay, indulge in a
            shopping spree at Orchard Road, and savor the flavors of local
            cuisine in bustling hawker centers. Join us for an unforgettable
            journey filled with exploration and discovery. Below, we share
            glimpses of our memorable Singapore trip.
            <br />
          </p>
          
        </div>
        
      </div>
        
      <h1 className=" py-4 my-7 tracking-widest border-fuchsia-900 text-slate-800 text-center">Below, we share
            glimpses of our unforgettable journey.</h1>
      <div style={{  padding: "6%",
      marginTop: '-5%' }}>
          <ImageGrid source={images} />
        </div>
      <Footer />
    </>
  );
};

export default Singapore;
