import React from "react";
import ticket from "../../assets/serviceLogo1.png";
import plane from "../../assets/serviceLogo2.png";
import bags from "../../assets/serviceLogo3.jpg";
import hotel from "../../assets/serviceLogo4.png";
import sightseeing from "../../assets/serviceLogo5.webp";
import exploration from "../../assets/serviceLogo6.png";
import tourPackage from "../../assets/serviceLogo7.png";
import seniorCitizen from "../../assets/specialLogo1.jpg";
import ladiesOnly from "../../assets/special2.png";

import { Link } from "react-router-dom";

const Scard = () => {
  return (
    <div>
      <div
        className="self-center px-4 mt-8 w-full max-w-[90%] mx-auto"
        style={{}}
      >
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/contact">
            <div
              className="Servecard 
          flex flex-col items-center px-5 py-8 w-full md:w-3/4 sm:w-full 
           text-center text-fuchsia-900
           
            bg-pink-100 rounded-xl border-2 border-solid border-zinc-400 
          hover:bg-sky-300 transition duration-500 ease-in-out"
            >
              <img
                loading="lazy"
                src={plane}
                style={{ borderRadius: "50%" }}
                className="aspect-square w-[65px]"
                alt="Bus Service"
              />
              <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">
                Seamless Arrival
              </div>
              <div className="mt-5 text-base tracking-wide">
                Once you land at your destination, we take over
              </div>
            </div>
          </Link>

          <Link to="/contact">
            <div
              className="Servecard flex flex-col items-center px-5 py-8 
          w-full md:w-3/4 sm:w-full text-center text-white bg-orange-400 rounded-xl border-2 border-solid border-zinc-400 
          hover:bg-rose-400 transition duration-500 ease-in-out"
            >
              <img
                loading="lazy"
                src={hotel}
                style={{ borderRadius: "50%" }}
                className="aspect-square w-[65px]"
                alt="Sports Training"
              />
              <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">
                Comfortable Lodging
              </div>
              <div className="mt-5 text-base tracking-wide">
                Enjoy Comfortable Hotel Stays with Delectable Meals Included
              </div>
            </div>
          </Link>

          <Link to="/contact">
            <div
              className="Servecard flex flex-col items-center px-5 py-8 w-full md:w-3/4 sm:w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400 
          hover:bg-sky-300 transition duration-500 ease-in-out"
            >
              <img
                loading="lazy"
                src={sightseeing}
                style={{ borderRadius: "50%" }}
                className="aspect-square w-[65px]"
                alt="Music Training"
              />
              <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">
                Effortless Travel
              </div>
              <div className="mt-5 text-base tracking-wide">
                Enjoy Sightseeing in Cozy Transportation
              </div>
            </div>
          </Link>

          <Link to="/contact">
            <div
              className="Servecard flex flex-col items-center px-5 py-8 w-full md:w-3/4 sm:w-full text-center text-white bg-orange-400 rounded-xl border-2 border-solid border-zinc-400 
          hover:bg-rose-400 transition duration-500 ease-in-out"
            >
              <img
                loading="lazy"
                src={exploration}
                style={{ borderRadius: "50%" }}
                className="aspect-square w-[65px]"
                alt="Best Teachers"
              />
              <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">
                Guided Exploration
              </div>
              <div className="mt-5 text-base tracking-wide">
                Create Lasting Memories Through Sightseeing
              </div>
            </div>
          </Link>

          <Link to="/contact">
            <div
              className="Servecard flex flex-col items-center px-5 py-8 w-full md:w-3/4 sm:w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400 
          hover:bg-sky-300 transition duration-500 ease-in-out"
            >
              <img
                loading="lazy"
                src={bags}
                style={{ borderRadius: "50%" }}
                className="aspect-square w-[65px]"
                alt="Music Training"
              />
              <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">
                Reliable Transfers
              </div>
              <div className="mt-5 text-base tracking-wide">
                Smooth Departure Transfers to Your Journey's End
              </div>
            </div>
          </Link>

          <Link to="/contact">
            <div
              className="Servecard flex flex-col items-center px-5 py-8 w-full md:w-3/4 sm:w-full text-center text-white bg-orange-400 rounded-xl border-2 border-solid border-zinc-400 
          hover:bg-rose-400 transition duration-500 ease-in-out"
            >
              <img
                loading="lazy"
                src={tourPackage}
                style={{ borderRadius: "50%" }}
                className="aspect-square w-[65px]"
                alt="Best Teachers"
              />
              <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">
                Complete Land Package
              </div>
              <div className="mt-5 text-base tracking-wide">
                Enjoy a Stress-Free Journey from Arrival to Departure
              </div>
            </div>
          </Link>
        </div>

        {/* Special services */}
        <div className="specialServices grid grid-cols-1 md:grid-cols-2">
          <h2 className="text-center text-white text-3xl py-4 my-8 font-semibold md:text-3xl mb-8">
            We also specialzie in these seamless services catering for the
            elderly and ladies:
          </h2>
          <div className="my-12 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <Link to="/contact" className="flex justify-center">
              <div className="Servecard flex flex-col 
              items-center px-5 py-8 w-full md:w-6/7 sm:w-full 
              text-center text-fuchsia-900 bg-pink-100 
              rounded-xl border-2 border-solid border-zinc-400
               hover:bg-sky-300 transition duration-500 ease-in-out
               h-auto ">
                <img
                  loading="lazy"
                  src={seniorCitizen}
                  style={{ borderRadius: "50%" }}
                  className="aspect-square w-20 md:w-24"
                  alt="Senior Citizen"
                />
                <div className="mt-5 text-sm md:text-base font-semibold tracking-wider">
                  Senior Citizens Group Tour
                </div>
                <div className="mt-3 text-sm tracking-wide">
                  Minimum 12 pax and for 6 nights/7 days. These tours are
                  conducted during offseason (to avoid the crowds and high hotel
                  rates). Get-togethers and inhouse fun activities in
                  the evenings.
                </div>
              </div>
            </Link>
            <Link to="/contact" className="flex justify-center">
              <div className="Servecard 
              h-auto flex flex-col items-center px-5 py-8 w-full md:w-6/7 sm:w-full text-center
               text-fuchsia-900 bg-orange-400 rounded-xl border-2 border-solid border-zinc-400 hover:bg-pink-500
                transition duration-500 ease-in-out">
                <img
                  loading="lazy"
                  src={ladiesOnly}
                  style={{ borderRadius: "50%" }}
                  className="aspect-square w-20 md:w-24"
                  alt="Ladies Only"
                />
                <div className="mt-5 text-sm md:text-base font-normal tracking-wider">
                  Ladies Only Group Tour
                </div>
                <div className="mt-3 text-sm tracking-wide">
                Minimum 12 pax and for 6 nights/7 days. These tours are accompanied by a female company personnel. Get-togethers and inhouse fun activities in the evenings. 

                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scard;
