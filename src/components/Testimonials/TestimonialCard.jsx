import React from 'react';

const TestimonialCard = ({ text, author,  Place, image }) => {
  return (
    <section className="bg-inherit dark:bg-gray-900 w-full overflow-hidden ">
  <div className="max-w-screen-md mx-auto px-4 py-8 lg:py-16 lg:px-6">
    <div className="max-w-md mx-auto bg-sky-300 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-center bg-indigo-400 dark:bg-gray-700 py-4">
        <img className="h-12 w-12 rounded-full object-cover mr-2" src={image} alt="Profile Image" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{author}</h2>
      </div>
      <p className="text-lg font-medium text-gray-900 dark:text-white px-6 py-4">{text}</p>
      <div className="flex flex-col items-center justify-center mt-6 space-y-3">
        <div className="flex flex-col items-center space-y-1">
          <div className="font-medium text-gray-900 dark:text-white">-{Place}</div>
          {/* <div className="text-sm font-light text-gray-500 dark:text-gray-400">{place}</div> */}
        </div>
      </div>
    </div>
  </div>
</section>







  );
};

export default TestimonialCard;
