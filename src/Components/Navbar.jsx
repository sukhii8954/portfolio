"use client"
import React, { useState } from 'react'
import bg from "../Assets/navbar/menuIcon.png"
import bg1 from "../Assets/hero/heroImage.png"
export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
   
       
        <div className='w-full text-white md:px-30 px-10 flex justify-between absolute items-center py-10 '>
          {/* left */}
          <a className=' z-50 md:z-50 text-xl' href='/'>Portfolio</a>

          {/* right */}
          <div className='z-50 md:flex hidden gap-5 items-center text-lg '>

            <a href='#about'>About</a>
            <a href='#experience'>Experience</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
            <a 
            target={"_blank"}
            without rel="noreferrer" 
            href="https://drive.google.com/file/d/1cKPabX6t3rttf3TGBon6d7q9pp_dtQlf/view?usp=drive_link">

            <button className='border border-solid rounded p-1 hover:bg-[#576cbc]'>Resume</button>
            </a>

          </div>
          <div className='md:hidden relative flex flex-col cursor-pointer' onClick={() => {
            setOpenMenu(!openMenu)
          }}>
            <img className='z-50' src={bg} />
            {
              openMenu === true &&
              <div className='text-white  items-center 
              flex flex-col text-xl absolute top-12 px-6 py-8
               right-0 bg-[#19376D] gap-2 z-40 md:z-20 
               rounded-xl
                bg-gradient-to-r from-[#19376D] to-[#19376D]'>
                <a href='#about'>About</a>
                <a href='#experience'>Experience</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
              </div>
            }
          </div>
        </div>




     

  )
}