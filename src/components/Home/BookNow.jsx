import React from "react";
import book from "../../assets/booking.png";
import "./BookNow.css";
import { Link } from "react-router-dom";

const BookNow = () => {
  return (
    <div className="BookNow">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
        <img
          src={book}
          alt="placeholder"
          className="bookImage md:w-full"
          style={{
            height: "auto",
            maxWidth: "100%",
            borderRadius: "5%",
          }}
        />
        <div className="bookContent md:pl-6 md:w-1/2">
          <p className="bookText text-white text-lg mb-2 md:mb-4">
            At Silver Line Tours & Travels, we understand that every traveler
            is unique, and that's why we go above and beyond to tailor our
            services to your specific preferences and needs. Whether you're
            seeking a solo adventure, a romantic getaway, or a group expedition,
            our dedicated team is here to turn your travel aspirations into
            reality.
            <br />
            <br />
            Ready to embark on your next unforgettable journey? Contact Silver
            Line Tours & Travels today to unlock exclusive deals and
            personalized assistance for your dream vacation. Don't miss out on
            the opportunity to experience the world in a whole new way. Let us
            be your guide to adventure and exploration. Reach out now and let
            the excitement begin!
          </p>
          <Link to="/contact">
            <button
              type="button"
              className="contactButton text-gray-900 hover:text-white 
            border border-amber-300 hover:bg-gray-900 focus:ring-4 
            focus:outline-none
             focus:ring-gray-300 font-medium 
             rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
              dark:border-gray-600 dark:text-gray-400 dark:hover:text-white
               dark:hover:bg-gray-600 duration-500 ease-in-out dark:focus:ring-gray-800"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
