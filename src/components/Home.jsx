import React from 'react'
import cartoonImage from '../assets/cartoonImage.jpeg';


const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer!
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have recently graduated from The University of Texas at Arlington and actively looking for full time roles as a full stack developer.
                </p>

                </div>
       
            
            <div>
                <img src={cartoonImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
            </div>
    </div>
  )
}

export default Home