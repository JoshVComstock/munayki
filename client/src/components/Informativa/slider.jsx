import React, { useEffect, useState } from 'react';

const Slider = ({ images, colors }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setCurrentColorIndex((prevColorIndex) =>
        (prevColorIndex + 1) % Object.keys(colors).length
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images, colors]);

  const colorKeys = Object.keys(colors);
  const currentColor = colors[colorKeys[currentColorIndex]];

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundColor: currentColor }}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Slider;
