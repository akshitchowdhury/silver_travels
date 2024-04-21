import React from "react";
import Nav from "../../../Navbar/Nav";

import kashmir from "../../../../assets/galleryMemories/gtBg2.jpg";

import a4 from "../../../../assets/galleryMemories/gt6.jpg";
import a2 from "../../../../assets/galleryMemories/gt3.jpg";
import a3 from "../../../../assets/galleryMemories/gt2.jpg";
import a1 from "../../../../assets/galleryMemories/gt4.jpg";
import ImageGrid from "./ImageGrid";
import Footer from "../../../Footer/Footer";
import SocialIcons from "../../../Social Icons/SocialIcons";
import './memoryStyles.css'


const images = [{ image: a1 }, { image: a2 }, { image: a3 }, { image: a4 }];
const GoldenTriangle = () => {
  return (
    <>
      <div
        className="kashmir
        h-auto md:h-full sm:h-auto"
        style={{
          backgroundImage: `url(${kashmir})`,

        }}
      >

        <Nav />
        <SocialIcons/>  
        <div
          className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
          style={{ padding: "4%", marginTop: "2%", borderRadius: "2%" }}
        >
          <p
            className="paraText text-white my-56 tex-sm md:text-xl sm:text-sm mb-2 md:mb-4 "
            style={{ color: "white" }}
          >
            Embark on a captivating journey through India's Golden Triangle with
            Silverline Tours & Travels. Our recent expedition was a kaleidoscope
            of history, culture, and architectural marvels, showcasing the
            essence of Delhi, Agra, and Jaipur. Join us for an unforgettable
            journey through the Golden Triangle, where every moment is a
            treasure waiting to be discovered. Below, we share glimpses of our
            mesmerizing trip, a testament to the beauty and heritage of India's
            iconic destinations.
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

export default GoldenTriangle;
