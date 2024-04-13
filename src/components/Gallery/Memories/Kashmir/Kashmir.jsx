import { useSpring, animated } from '@react-spring/web';
import i1 from '../../../../assets/g1.jpg';
import i2 from '../../../../assets/g3.jpg';
import { useEffect, useState } from 'react';

export default function MyComponent() {
    const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToggle(!toggle);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [toggle]);
  // Define the from and to positions for small and large screen sizes
  const smallScreenFrom = { x: 0 };
  const smallScreenTo = { x: 40 }; // Adjust this value as needed for smaller screens
  const largeScreenFrom = { x: 0 };
  const largeScreenTo = { x: 200 };

  // Determine the current screen width
  const screenWidth = window.innerWidth;

  // Use different spring configurations based on the screen size
  const springs = useSpring({
    from: screenWidth < 768 ? smallScreenFrom : largeScreenFrom, // Adjust the breakpoint as needed
    to: screenWidth < 768 ? smallScreenTo : largeScreenTo, // Adjust the breakpoint as needed
  });
  const springsy = useSpring({
    from: screenWidth < 768 ? { x: 1000 } : { x: 1660 }, // Adjust the breakpoint as needed
    to: screenWidth < 768 ? { x: 50 } : { x: 700 }, // Adjust the breakpoint as needed
  });

  return (
    <>
      <animated.div
        style={{
          width: '100%',
          maxWidth: 300,
          height: 300,
          padding: 35,
          borderRadius: 8,
          ...springs,
        }}
      >
        <img src={i1} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
      </animated.div>

      <animated.div
        style={{
          width: '100%',
          maxWidth: 500,
          height: 'auto',
          maxHeight: 700,
          borderRadius: 8,
          ...springsy,
        }}
      >
        <img src={i2} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
      </animated.div>
    </>
  );
}
