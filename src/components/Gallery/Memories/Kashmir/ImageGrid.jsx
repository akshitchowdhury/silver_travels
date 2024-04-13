import React from 'react';

const ImageGrid = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{padding: '9%'}}>
      {props.source.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg">
          <img
            src={image.image}
            alt={`image ${index}`}
            className="w-auto h-auto max-w-1/2  max-h-auto transition-transform duration-300 transform-gpu hover:scale-105 opacity-75 hover:opacity-100 rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
