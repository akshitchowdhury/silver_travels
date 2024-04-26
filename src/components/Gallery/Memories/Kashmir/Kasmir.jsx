import React from "react";
import Nav from "../../../Navbar/Nav";

import kashmir from "../../../../assets/galleryMemories/sg3.jpg";
import malayBg from "../../../../assets/galleryMemories/kashmirBg.jpg";

import a4 from "../../../../assets/galleryMemories/ks1.jpg";
import a2 from "../../../../assets/galleryMemories/ks2.jpg";
import a3 from "../../../../assets/galleryMemories/ks3.jpg";
import a1 from "../../../../assets/galleryMemories/ks4.jpg";
import ImageGrid from "./ImageGrid";
import Footer from "../../../Footer/Footer";
import "./memoryStyles.css";

import SocialIcons from "../../../Social Icons/SocialIcons";

const images = [{ image: a1 }, { image: a2 }, { image: a3 }, { image: a4 }];
const Kasmir = () => {
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
        <SocialIcons />
        <div
          className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
          style={{ padding: "6%", marginTop: "2%", borderRadius: "2%" }}
        >
          <p
            className="paraText text-white tex-sm md:text-xl sm:text-sm mb-2 md:mb-4 "
            style={{ color: "white" }}
          >
            Experience the enchanting beauty of Kashmir with Silverline Tours &
            Travels. Our latest escapade delved deep into the heart of this
            paradise on earth, unveiling its majestic mountains, serene lakes,
            and lush valleys. Immerse yourself in the tranquility of Dal Lake,
            witness the timeless charm of Mughal gardens, and stroll through the
            vibrant bazaars of Srinagar. Indulge in the region's delectable
            cuisine, savoring the flavors of traditional Kashmiri dishes. Join
            us for an unforgettable journey through the breathtaking landscapes
            and rich cultural heritage of Kashmir. Below, we offer glimpses of
            our unforgettable expedition through this picturesque region.
            <br />
          </p>
        </div>
      </div>

      <h1 className=" py-4 my-7 tracking-widest border-fuchsia-900 text-slate-800 text-center">
        Below, we share glimpses of our unforgettable journey.
      </h1>
      <div style={{ padding: "6%", marginTop: "-5%" }}>
        <ImageGrid source={images} />
      </div>
      <Footer />
    </>
  );
};

export default Kasmir;
