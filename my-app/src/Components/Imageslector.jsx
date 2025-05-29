import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/200x150?text=Image+1',
  'https://via.placeholder.com/200x150?text=Image+2',
  'https://via.placeholder.com/200x150?text=Image+3',
  'https://via.placeholder.com/200x150?text=Image+4',
];

function PictureSelector() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={images[currentIndex]} alt="Selected" style={{ border: '1px solid black' }} />
      <br />
      <button onClick={handleNextImage} style={{ marginTop: '10px' }}>
        Show Next Image
      </button>
    </div>
  );
}

export default PictureSelector;
