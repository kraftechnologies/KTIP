import React from "react";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-4 text-center transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#18cb96]">
        Page Under Construction
      </h1>
      <p className="text-lg md:text-xl max-w-xl">
        We’re working hard to bring you this page soon. Please check back later!
      </p>
    </div>
  );
};

export default UnderConstruction;
