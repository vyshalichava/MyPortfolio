import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hey there! I'm currently mastering Computer and Information Sciences at The University of Texas at Arlington. 
        With a year's experience at Model N, I've crafted my skills in React and Spring Boot.
         Passionate about coding, I'm on a quest to push boundaries and shape the future of tech!


        </p>

       
      </div>
    </div>
  );
};

export default About;