import React, { useState } from 'react';
import mealplanner from '../assets/mealplanner.jpg';

const PortfolioItem = ({ src, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ alignSelf: 'start' }} // This ensures that the grid item does not stretch.
    >
      <img src={src} alt="Portfolio item" className="object-contain w-full" />
      <div className={`transition-opacity duration-300 ease-in-out ${isHovered ? 'max-h-96' : 'max-h-0' } overflow-hidden`}>
        <p className="text-white text-sm p-4">{description}</p>
      </div>
      <button
        onClick={() => window.open('https://github.com/vyshalichava/MealPlanner-zip')}
        className="w-full px-6 py-3 bg-blue-500 text-white hover:bg-blue-700 transition ease-in duration-200 text-center"
      >
        Code
      </button>
    </div>
  );
};


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: mealplanner,
      description: 'Developed and implemented a web application designed to optimize resource planning for food vendors by facilitating advance meal preparation scheduling.',
    },
    
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map((item) => (
            <PortfolioItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
