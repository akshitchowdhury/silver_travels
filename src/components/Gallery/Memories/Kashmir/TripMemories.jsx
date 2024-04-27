import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import i1 from '../../../../assets/galleryMemories/keralaBG.jpg';
import i2 from '../../../../assets/galleryMemories/gtBg.jpg';
import i3 from '../../../../assets/galleryMemories/adBg.jpg';
import i4 from '../../../../assets/galleryMemories/kashmirBkdrop.jpg';
import i5 from '../../../../assets/galleryMemories/sgBg.jpg';
import i6 from '../../../../assets/galleryMemories/btBg.jpg';

export default function TripMemories() {
  // State to track hover for each image
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  // Define the from and to positions for small and large screen sizes
  const smallScreenFrom = { x: 0 };
  const smallScreenTo = { x: 20 }; // Adjust this value as needed for smaller screens
  const largeScreenFrom = { x: -500 };
  const largeScreenTo = { x: 20 };

  // Determine the current screen width
  const screenWidth = window.innerWidth;

  // Use different spring configurations based on the screen size
  const springs = useSpring({
    from: screenWidth < 768 ? smallScreenFrom : largeScreenFrom,
    to: screenWidth < 768 ? smallScreenTo : largeScreenTo,
  });

  const springsy = useSpring({
    from: screenWidth < 768 ? { x: 1000 } : { x: 1660 },
    to: screenWidth < 768 ? { x: 20 } : { x: 20 },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 justify-center justify-self-center ">
      {/* Image cards */}
      {[
        { image: i1, title: 'Kerala', link: '/kerela', isHovered: isHovered1, setIsHovered: setIsHovered1 },
        { image: i2, title: 'Golden Triangle and Rajsthan', link: '/goldentriangle', isHovered: isHovered2, setIsHovered: setIsHovered2 },
        { image: i3, title: 'Andaman and Nicobar islands', link: '/andaman', isHovered: isHovered3, setIsHovered: setIsHovered3 },
        ].map((item, index) => (
        <div key={index} className="relative justify-center justify-self-center
        " style={{padding: '5%'}}>
          <Link to={item.link}>
            <animated.div
              onMouseEnter={() => item.setIsHovered(true)}
              onMouseLeave={() => item.setIsHovered(false)}
              style={{
                width: '100%',
                height: screenWidth < 768 ? 'auto' : 350,
                maxHeight: screenWidth < 768 ? 250 : 350,
                borderRadius: 8,
                ...springs,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
              />
              {item.isHovered && (
                <animated.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    fontSize: 20,
                    borderRadius: 8,
                    backdropFilter: 'blur(10px)',
                    transition: 'backdropFilter 500s ease-in-out',

                  }}
                >
                  {item.title}
                </animated.div>
              )}
            </animated.div>
          </Link>
        </div>
      ))}

      {[
        { image: i4, title: 'Kashmir', link: '/kashmir', isHovered: isHovered4, setIsHovered: setIsHovered4 },
        { image: i5, title: 'Singapore/Malaysia', link: '/malaysia', isHovered: isHovered5, setIsHovered: setIsHovered5 },
        { image: i6, title: 'Noth-East India and Bhutan', link: '/northeast', isHovered: isHovered6, setIsHovered: setIsHovered6 },
      ].map((item, index) => (
        <div key={index} className="relative" style={{padding: '7%'}}>
          <Link to={item.link}>
            <animated.div
              onMouseEnter={() => item.setIsHovered(true)}
              onMouseLeave={() => item.setIsHovered(false)}
              style={{
                width: '100%',
                height: screenWidth < 768 ? 'auto' : 350,
                maxHeight: screenWidth < 768 ? 250 : 350,
                borderRadius: 8,
                ...springsy,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
              />
              {item.isHovered && (
                <animated.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    fontSize: 20,
                    borderRadius: 8,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {item.title}
                </animated.div>
              )}
            </animated.div>
          </Link>
        </div>
      ))}


    </div>
  );
}
