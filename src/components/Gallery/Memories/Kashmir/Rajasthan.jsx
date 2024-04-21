import React from "react";
import Nav from "../../../Navbar/Nav";

import kashmir from "../../../../assets/galleryMemories/rj1.jpg";
import a4 from "../../../../assets/galleryMemories/rj4.jpg";
import a3 from "../../../../assets/galleryMemories/rj3.jpg";
import a1 from "../../../../assets/galleryMemories/rj2.jpg";
import a2 from "../../../../assets/galleryMemories/rj1.jpg";
import rajasthanBg from "../../../../assets/galleryMemories/rajsthanBg.jpg";
import ImageGrid from "./ImageGrid";
import Footer from "../../../Footer/Footer";
import './memoryStyles.css'

import SocialIcons from "../../../Social Icons/SocialIcons";


const images = [{ image: a1 }, { image: a2 }, { image: a3 }, { image: a4 }];
const Rajasthan = () => {
  return (
    <>
      <div
        className="kashmir
        h-auto md:h-full sm:h-auto"
        style={{
          backgroundImage: `url(${rajasthanBg})`,
          
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
            style={{ color: "white" }}
          >
            Embark on a regal journey through the timeless beauty of Rajasthan
            with Silverline Tours & Travels. Our recent expedition was a
            tapestry of vibrant colors, majestic forts, and timeless traditions.
            Explore the opulent palaces of Jaipur, the golden sands of
            Jaisalmer, and the romantic lakes of Udaipur.  Join us for an unforgettable
            adventure steeped in history, royalty, and unparalleled charm.
            Below, we share glimpses of our magnificent Rajasthan trip.
            <br />
          </p>
        </div>
      </div>
      <h1 className=" py-4 my-7 tracking-widest border-fuchsia-900 text-slate-800 text-center">
        Below, we share glimpses of our unforgettable journey.
      </h1>
      <div style={{ marginTop: "2%", padding: "6%" }}>
        <ImageGrid source={images} />
      </div>
      <Footer />
    </>
  );
};

export default Rajasthan;
