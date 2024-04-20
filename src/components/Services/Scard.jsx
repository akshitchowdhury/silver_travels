import React from 'react';
import ticket from '../../assets/serviceLogo1.png';
import hotel from '../../assets/serviceLogo2.png';
import plane from '../../assets/serviceLogo3.jpg';
import bags from '../../assets/serviceLogo3.png';
import { Link } from 'react-router-dom';


const Scard = () => {
  return (
    <div>
       <div className="self-center px-4 mt-8 w-full max-w-[90%] mx-auto" style={{marginTop: '10%'}}>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Link to="/birthday">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full md:w-3/4 sm:w-full 
           text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={ticket}
              style={{ borderRadius: '50%' }}
              className="aspect-square w-[65px]"
              alt="Bus Service"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Touring Variety</div>
            <div className="mt-5 text-base tracking-wide">
            Let Play Pawws host your birthday and turn every moment into a joyful celebration!
            </div>
          </div>
          </Link>

          <Link to="/event">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full md:w-3/4 sm:w-full text-center text-white bg-orange-400 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={hotel}
              style={{ borderRadius: '50%' }}
              className="aspect-square w-[65px]"
              alt="Sports Training"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Event Parties</div>
            <div className="mt-5 text-base tracking-wide">
            Experience the magic of event parties hosted by Play Pawws, where every moment is infused with joy and excitement!
            </div>
          </div>
          </Link>

          <Link to="/kitty">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full md:w-3/4 sm:w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={plane}
              style={{ borderRadius: '50%',  }}
              className="aspect-square w-[65px]"
              alt="Music Training"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Flight Deals</div>
            <div className="mt-5 text-base tracking-wide">
            Indulge in purr-fectly delightful kitty parties hosted by Play Pawws, where fun and feline charm collide!
            </div>
          </div>
          </Link>

          <Link to="/cafe">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full md:w-3/4 sm:w-full text-center text-white bg-orange-400 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={bags}
              style={{ borderRadius: '50%' }}
              className="aspect-square w-[65px]"
              alt="Best Teachers"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Small Groups</div>
            <div className="mt-5 text-base tracking-wide">
            Relax and unwind in the cozy café and lounge area at Play Pawws, where every moment is infused with comfort and charm
            </div>
          </div>
          </Link>
          
          <Link to="/kitty">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full md:w-3/4 sm:w-full text-center text-fuchsia-900 bg-pink-100 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={plane}
              style={{ borderRadius: '50%',  }}
              className="aspect-square w-[65px]"
              alt="Music Training"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Flight Deals</div>
            <div className="mt-5 text-base tracking-wide">
            Indulge in purr-fectly delightful kitty parties hosted by Play Pawws, where fun and feline charm collide!
            </div>
          </div>
          </Link>
          
          <Link to="/cafe">
          <div className="Servecard flex flex-col items-center px-5 py-8 w-full md:w-3/4 sm:w-full text-center text-white bg-orange-400 rounded-xl border-2 border-solid border-zinc-400">
            <img
              loading="lazy"
              src={bags}
              style={{ borderRadius: '50%' }}
              className="aspect-square w-[65px]"
              alt="Best Teachers"
            />
            <div className="bubblegum-sans-regular mt-5 text-2xl font-semibold tracking-wider">Small Groups</div>
            <div className="mt-5 text-base tracking-wide">
            Relax and unwind in the cozy café and lounge area at Play Pawws, where every moment is infused with comfort and charm
            </div>
          </div>
          </Link>

          

        </div>
      </div>
    </div>
  )
}

export default Scard