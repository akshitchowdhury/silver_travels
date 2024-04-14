import React from "react";
import c1 from "../../assets/g1.jpg";
import c2 from "../../assets/g7.webp";
import c3 from "../../assets/g3.jpg";
import c4 from "../../assets/g2.jpg";
import c5 from "../../assets/g12.jpg";
import c6 from "../../assets/g5.jpg";
import c7 from "../../assets/g7.webp";
import c8 from "../../assets/g3.jpg";
import c9 from "../../assets/g14.jpg";
import c10 from "../../assets/g16.jpg";
import c11 from "../../assets/g18.jpeg";
import c12 from "../../assets/g15.jpg";
import "./ImageCards.css";
import { Link } from "react-router-dom";
import PicFlow from "./PicFlow/PicFlow";

const ImageCard = ({ linkUrl, imageUrl, text }) => {
  return (
    <Link to={linkUrl}>
      <div className="Icard relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={imageUrl}
          alt="Card"
          className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out"
         />
        
      </div>
    </Link>
  );
};

const ImageCards = () => {
  const cards = [
    {
      imageUrl: c1,
    },
    {
      imageUrl: c2,
    },
    {
      imageUrl: c3,
    },
    {
      imageUrl: c4,
    },
    {
      imageUrl: c5,
    },
    {
      imageUrl: c6,
    },
    {
      imageUrl: c7,
    },
    {
      imageUrl: c8,
    },
    {
      imageUrl: c9,
    },
    {
      imageUrl: c10,
    },
    {
      imageUrl: c11,
    },
    {
      imageUrl: c12,
    },
  ];

  return (
    <>
      <div className="block">
      
        <div className="content">
          <div
            className="flex flex-col items-center justify-center h-screen"
            style={{ marginLeft: "5%" }}
          >
            <h1 className=" tracking-widest border-fuchsia-900 text-fuchsia-900">
              Create unforgettable memories and cherished moments with Silver
              Travels!
            </h1>
            
            {/* <h4 className="text-lg md:text-xl lg:text-2xl text-center"> Bring your kids and let the adventure begin</h4> */}
          </div>
        </div>

        <div className="cardBox flex flex-col lg:flex-row">
  
  <div className="Icontainer lg:w-auto">
    {cards.map((card, index) => (
      <ImageCard key={index} imageUrl={card.imageUrl} />
    ))}
    
  </div>
  
</div>

      </div>
    </>
  );
};

export default ImageCards;
