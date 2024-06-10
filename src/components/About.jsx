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
        Hey there! I am a Software engineer with a strong foundation in Computer Science, specializing in web development. I have an 
        experience working mainly on React Js and Java but not limited to that. 
        I love working on new and exciting technologies. I have a keen interest in Web Development and I am always looking for
         new opportunities to learn and grow.


        </p>

       
      </div>
    </div>
  );
};

export default About;