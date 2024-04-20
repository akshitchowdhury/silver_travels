import React from "react";
import Nav from "../../../Navbar/Nav";

import kashmir from "../../../../assets/galleryMemories/kl1.jpg";

import a1 from "../../../../assets/galleryMemories/kl1.jpg";
import a2 from "../../../../assets/galleryMemories/kl4.jpg";
import a3 from "../../../../assets/galleryMemories/kl2.jpg";
import a4 from "../../../../assets/galleryMemories/kl3.jpg";
import kerelaBg from "../../../../assets/galleryMemories/galleryKerela.jpg";
import ImageGrid from "./ImageGrid";
import Footer from "../../../Footer/Footer";

import SocialIcons from "../../../Social Icons/SocialIcons";


const images = [{ image: a1 }, { image: a2 }, { image: a3 }, { image: a4 }];
const Kerela = () => {
  return (
    <>
      <div
        className="kashmir"
        style={{
          height: '600px',
          padding: "2%",
          backgroundImage: `url(${kerelaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Content goes here */}

        <Nav />
        <SocialIcons/>
        <div
          className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start"
          style={{ padding: "6%", marginTop: "2%", borderRadius: "2%" }}
        >
          {/* backgroundImage: 'linear-gradient(to bottom right, #ffffff, #86c2b4)' */}
          <p
            className="paraText text-white text-xl my-52 mb-2 md:mb-4"
            style={{ width: "100%", color: "white" }}
          >
            Embark on a captivating journey through Kerala with Silverline Tours
            & Travels. Our recent expedition was a blend of serenity and
            adventure, from the tranquil backwaters of Alleppey to the misty
            heights of Munnar's tea estates. Explore Kochi's vibrant culture and
            savor traditional Kathakali performances. Join us in creating
            cherished memories and lifelong friendships. 
            <br />
          </p>
          {/* <img
          src={kashmir}
          alt="placeholder"
          className="eventImg md:w-full"
          style={{
            height: "400px",
            borderRadius: "5%",
            marginLeft: "4%",
            width: "100%",
          }}
        /> */}
        </div>
      </div>
        <h1 className=" py-4 my-7 tracking-widest border-fuchsia-900 text-slate-800 text-center">Below, we share
            glimpses of our unforgettable journey.</h1>
      <ImageGrid source={images} />
      <Footer />
    </>
  );
};

export default Kerela;
