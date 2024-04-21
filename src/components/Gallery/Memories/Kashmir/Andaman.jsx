import React from "react";
import Nav from "../../../Navbar/Nav";

import kashmir from "../../../../assets/galleryMemories/ad1.jpg";

import a4 from "../../../../assets/galleryMemories/ad1.jpg";
import a1 from "../../../../assets/galleryMemories/ad2.jpg";
import a3 from "../../../../assets/galleryMemories/ad3.jpg";
import a2 from "../../../../assets/galleryMemories/ad4.jpg";
import andamanBg from "../../../../assets/galleryMemories/andamanBg.webp";
import ImageGrid from "./ImageGrid";
import SocialIcons from "../../../Social Icons/SocialIcons";
import './memoryStyles.css'

import Footer from "../../../Footer/Footer";

const images = [{ image: a1 }, { image: a2 }, { image: a3 }, { image: a4 }];
const Andaman = () => {
  return (
    <>
      <div
        className="kashmir
        h-auto md:h-full sm:h-auto"
        style={{
          backgroundImage: `url(${andamanBg})`
        }}
      >
        <Nav />
        <SocialIcons/>
        <div
          className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
          style={{ padding: "4%", marginTop: "2%", borderRadius: "2%" }}
        >
          <p
            className="paraText text-white my-28 tex-sm md:text-xl sm:text-sm mb-2 md:mb-4 "
            style={{ color: "white" }}
          >
            Embark on an unforgettable odyssey through the pristine beauty of
            the Andaman and Nicobar Islands with Silverline Tours & Travels. Our
            recent expedition unveiled the untouched splendor of these tropical
            paradises, from the azure waters of Radhanagar Beach to the lush
            jungles of Havelock Island. Indulge in adventurous water sports,
            trek through verdant forests, or simply unwind in luxurious beach
            resorts overlooking the turquoise sea. Join us for an exhilarating
            journey filled with exploration, relaxation, and the magic of island
            life.
            <br />
          </p>
        </div>
      </div>
      <h1 className=" py-4 my-7 tracking-widest border-fuchsia-900 text-slate-800 text-center">
        Below, we share glimpses of our unforgettable journey.
      </h1>
      <div  style={{ marginTop: "2%", padding: "6%" }}>
        <ImageGrid source={images} />
      </div>
      <Footer />
    </>
  );
};

export default Andaman;
