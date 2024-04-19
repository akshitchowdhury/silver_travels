import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from './TestimonialCard';
import './TestimonialCarousel.css'
import { easings } from '@react-spring/web';
const TestimonialCarousel = ({ testimonials }) => {
  const sliderRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSliding && sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isSliding]);

  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Disable autoplay as we're handling it manually
    autoplaySpeed: 4000,
    arrows: true,
    beforeChange: (_, next) => {
      setIsSliding(true);
    },
    afterChange: () => {
      setIsSliding(false);
    },
  };

  return (

    <>
   <div className="carousel-container bg-inherit py-16">
    <h2 className="text-center text-sky-300 text-4xl md:text-5xl mb-8">Testimonials</h2>
    <div className="max-w-4xl mx-auto">
        <div className="carousel">
            <Slider ref={sliderRef} {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card-container mx-auto">
                        <TestimonialCard {...testimonial} />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
</div>

    </>

  );
};

export default TestimonialCarousel;
