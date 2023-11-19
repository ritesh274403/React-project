import React, { useRef, useState } from 'react';

const Imagecarousel = () => {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const width = carouselRef.current.clientWidth;
    const newPosition =
      direction === 'next' ? scrollPosition + width : scrollPosition - width;

    carouselRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });

    setScrollPosition(newPosition);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-300 ease-in-out"
        >
          {/* Add your carousel items here */}
          <img
            className="w-full transform-gpu transition-transform duration-300 ease-in-out"
            src="/ImageCrousel.jpeg"
            alt="Carousel Item 1"
          />
          <img
            className="w-full transform-gpu transition-transform duration-300 ease-in-out"
            src="/ImageCrousel.jpeg"
            alt="Carousel Item 2"
          />
          {/* Add more images as needed */}
        </div>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button onClick={() => handleScroll('prev')}>Previous</button>
        <button onClick={() => handleScroll('next')}>Next</button>
      </div>
    </div>
  );
};

export default Imagecarousel;
