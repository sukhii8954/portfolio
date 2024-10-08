import React from 'react'
import bg1 from "../Assets/hero/avatar.png"
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
export const Hero = () => {
  const [typeEffect] =useTypewriter({
    words: ['Frontend Web Developer', 'graduate' , 'Learner' ,'Fresher'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed:90 
  })
  
  return (
    <div className='flex flex-col-reverse md:flex-row  justify-between items-center z-30 
     overflow-hidden md:h-[100vh] '>
    {/*  left text */}
      
        <div className= 'relative w-full px-10 py-20 z-50 md:z-50 text-white  md:top-20'>
        
        <h4 className='relative tracking-widest md:justify-normal text-2xl md:text-2xl mx-24 font-black md:text-nowrap mb-6 z-30 md:z-30'>Hi, My name is</h4>
      
        <h1 className='relative tracking-wide text-center  text-5xl md:text-7xl  font-black text-wrap md:text-nowrap mb-6 z-30 md:z-30 
        -left-10'>Sukhpreet Singh</h1>
    
     <h1 className='relative  md:justify-normal text-2xl md:text-2xl mx-24 font-black md:text-nowrap mb-6 z-30 md:z-30'>
       
       I'm a....

        <span>{typeEffect}</span>
      </h1>
        
      {/* @babel/plugin-proposal-private-property-in-object */}
        
          <p className='z-30 md:z-30 relative mx-14 text-center md:justify-normal text-3xl mb-10 md:text-wrap'>I'm a Front-End Web developer,  
          committed to crafting visually appealing and functional websites using ReactJS ,NextJS and Bootstrap. 
            Reach out if you'd like to learn more!</p>
          <a className='text-3xl font-custom font-semibold bg-[#576CBC] 
                   rounded-[100px] px-2 mb-2 py-2 z-50 md:z-50 md:mx-auto' 
                   
                   href='mailto:sukhpreet8954@gmail.com'>Contact Me</a>
        </div>
         
            {/* right side image */}
            <img className='relative z-30 md:z-30 w-3/12 mx-14 top-14 md:top-20
            animate-float inline-block'  src={bg1} alt='heroimg'></img>

        <div className='absolute z-0 md:z-0 -top-56  -left-56 w-[600px] rounded-full h-[600px] bg-gradient-radial from-[#132E5A] via-transparent to-transparent'/>
          <div className=' absolute overflow-hidden right-0'>
        <div className='relative  z-0 md:z-0 top-32  -right-96 w-[900px] rounded-full h-[900px] bg-gradient-radial from-[#132E5A] via-transparent to-transparent'/>
            </div>
           
            
    </div>
  )
}
