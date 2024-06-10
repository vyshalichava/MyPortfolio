import React, { useState } from 'react';
import mealplanner from '../assets/mealplanner.jpg';
import ecommerce from '../assets/ecommerce.jpg'

const PortfolioItem = ({ title, src, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div
      className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ alignSelf: 'start' }} // This ensures that the grid item does not stretch.
    >
      <p>{title}</p>
      <img src={src} alt="Portfolio item" className="object-contain w-full" />
      <div className={`transition-opacity px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 ease-in-out ${isHovered ? 'max-h-96' : 'max-h-0' } overflow-hidden`}>
        <p className="text-white text-sm p-4">{description}</p>
      </div>
      <button
        onClick={() => window.open(link)}
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
      title:'Meal Planner',
      src: mealplanner,
      link:'https://github.com/vyshalichava/MealPlanner-zip',
      description: 'Developed and implemented a web application designed to optimize resource planning for food vendors by facilitating advance meal preparation scheduling.',
    },
    {
      id: 2,
      title:'E-Commerce',
      src: ecommerce,
      link:'https://github.com/vyshalichava/E-commerce',
      description: 'Built a shopping application with responsive design  for clothing where users can navigate through various pages using MERN stack. It provides a platform for users to view and purchase various products. The server-side (Node. js with Express) manages the API for product data stored in a MongoDB database. The client-side (React) handles the user interface(​​UX/UI) and interacts with the server to fetch and display product information.',
    },
    
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <p className="text-4xl font-bold inline border-b-4 border-gray-500" style={{marginLeft:'240px'}}>
            Some of my work
          </p>
          <br/> <br/>
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
