import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import i1 from '../../../../assets/galleryMemories/keralaBG.jpg';
import i2 from '../../../../assets/galleryMemories/gtBg.jpg';
import i3 from '../../../../assets/galleryMemories/adBg.jpg';
import i4 from '../../../../assets/galleryMemories/rjBg.jpg';
import { Link } from 'react-router-dom';

export default function TripMemories() {
  // State to track hover
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

   // Define the from and to positions for small and large screen sizes
   const smallScreenFrom = { x: 0 };
   const smallScreenTo = { x: 40 }; // Adjust this value as needed for smaller screens
   const largeScreenFrom = { x: -500 };
   const largeScreenTo = { x: 20 };
 
   // Determine the current screen width
   const screenWidth = window.innerWidth;
 
   // Use different spring configurations based on the screen size
   const springs = useSpring({
     from: screenWidth < 768 ? smallScreenFrom : largeScreenFrom, // Adjust the breakpoint as needed
     to: screenWidth < 768 ? smallScreenTo : largeScreenTo, // Adjust the breakpoint as needed
   });
   const springsy = useSpring({
     from: screenWidth < 768 ? { x: 1000 } : { x: 1660 }, // Adjust the breakpoint as needed
     to: screenWidth < 768 ? { x: 50 } : { x: 40 }, // Adjust the breakpoint as needed
   });
 

 
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , padding: '4%'}}>
      {/* First Row */}
      
      <div
        style={{
          flex: '0 0 100%',
          maxWidth: '50%',
          
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
      <Link to= '/kerela' >
        <animated.div
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          style={{
            width: '100%',
            height: screenWidth < 768 ? 200 : 300, // Adjust height for smaller screens
            padding: 35,
            borderRadius: 8,
            ...springs,
          }}
        >
          <img src={i1} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
          {isHovered1 && (
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
                color: 'white',
                fontSize: 20,
                borderRadius: 8,
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'background 3.3s ease-in-out, backdrop-filter 3.3s ease-in-out',
              pointerEvents: isHovered1 ? 'auto' : 'none',
              }}
            >
              Kerela
            </animated.div>
            
            
          )}
        </animated.div>
        </Link>
      </div>
      
      {/* Second image */}

      <div
        style={{
          flex: '0 0 100%',
          maxWidth: '50%',
          padding: 10,
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
      <Link to= '/goldentriangle' >
        <animated.div
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          style={{
            width: '100%',
            height: screenWidth < 768 ? 200 : 300, // Adjust height for smaller screens
            padding: 35,
            borderRadius: 8,
            ...springs,
          }}
        >
          <img src={i2} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
          {isHovered2 && (
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
              Golden Triangle
            </animated.div>
          )}
        </animated.div>
        </Link>
      </div>

      {/* Third image */}

      <div
        style={{
          flex: '0 0 100%',
          maxWidth: '50%',
          padding: 30,
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
      <Link to= '/andaman'>
        <animated.div
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          style={{
            width: '100%',
            height: screenWidth < 768 ? 'auto' : 350, // Adjust height for smaller screens
            maxHeight: screenWidth < 768 ? 'auto' : 350, // Adjust maxHeight for smaller screens
            borderRadius: 20,
            ...springsy,
          }}
        >
          <img src={i3} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
          {isHovered3 && (
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
                
                backdropFilter: 'blur(10px)',
                transition: 'background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out',
              pointerEvents: isHovered3 ? 'auto' : 'none',
              }}
            >
              Andaman Nicobar islands
            </animated.div>
          )}
        </animated.div>
        </Link>
      </div>

      {/* Fourth image */}
      <div
        style={{
          flex: '0 0 100%',
          maxWidth: '50%',
          padding: 30,
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
      <Link to= '/rajasthan'>
        <animated.div
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
          style={{
            width: '100%',
            height: screenWidth < 768 ? 'auto' : 350, // Adjust height for smaller screens
            maxHeight: screenWidth < 768 ? 250 : 350, // Adjust maxHeight for smaller screens
            borderRadius: 8,
            ...springsy,
          }}
        >
          <img src={i4} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
          {isHovered4 && (
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
              Rajasthan
            </animated.div>
          )}
        </animated.div>
        </Link>
      </div>
    </div>
  );
}
