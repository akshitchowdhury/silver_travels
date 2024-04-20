import React from 'react';

const ImageGrid = (props) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 rounded-md gap-6" style={{padding: '5%'}}>
      {props.source.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg">
          <img
            src={image.image}
            alt={`image ${index}`}
            className="w-3/4  max-w-1/2  
            max-h-auto transition-transform duration-300 transform-gpu h
            over:scale-105 rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
