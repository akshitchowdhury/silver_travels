import React from 'react';

const TestimonialCard = ({ text, author,  Place, image }) => {
  return (
    <section className="bg-inherit dark:bg-gray-900 w-full overflow-hidden">
    <div className="max-w-screen-md mx-auto px-4 py-8 lg:py-16 lg:px-6">
      <div className="max-w-md mx-auto py-6 bg-sky-200 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
         {/* Reduced the margin */}
            <img className="h-24 w-24  rounded-full object-cover border-4 border-white mx-40" 
            src={image} alt="Profile Image" />
          
          <div className="flex items-center justify-center bg-rose-400 dark:bg-gray-700 py-4 absolute top-0 left-1/2 transform -translate-x-1/2">
            
          </div>
        
        <p className="text-lg font-medium text-zinc-600 dark:text-white px-6 py-4">{text}</p>
        <div className="flex flex-col items-center justify-center mt-6 space-y-3">
          <div className="flex flex-col items-center space-y-1">
          
          <h2 className="text-lg font-semibold text-zinc-700 dark:text-white">{author}</h2>
            <div className="font-medium text-violet-600 dark:text-white">-{Place}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  







  );
};

export default TestimonialCard;
