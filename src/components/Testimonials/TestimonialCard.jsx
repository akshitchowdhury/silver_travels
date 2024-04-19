import React from 'react';

const TestimonialCard = ({ text, author, company, place }) => {
  return (
    <section className="bg-white dark:bg-gray-900 w-full overflow-hidden overflow-x-scroll">
  <div className="max-w-screen-md mx-auto px-4 py-8 lg:py-16 lg:px-6">
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 py-4">
        <img className="h-12 w-12 rounded-full object-cover mr-2" src="profile_image_url" alt="Profile Image" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Testimonial</h2>
      </div>
      <p className="text-lg font-medium text-gray-900 dark:text-white px-6 py-4">{text}</p>
      <div className="flex flex-col items-center justify-center mt-6 space-y-3">
        <div className="flex flex-col items-center space-y-1">
          <div className="font-medium text-gray-900 dark:text-white">{author}</div>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">{company}</div>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">{place}</div>
        </div>
      </div>
    </div>
  </div>
</section>







  );
};

export default TestimonialCard;
