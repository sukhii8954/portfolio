import React from 'react'
import about from '../Assets/About/aboutImage.png'
import crsr from '../Assets/About/cursorIcon.png'
import server from '../Assets/About/serverIcon.png'
import UI from '../Assets/About/uiIcon.png'
export const About = () => {
    return (
        // about section 
        <div className='relative  w-10/12 mx-auto text-white font-custom mt-12 rounded-2xl z-30
        md:p-20 p-0 bg-transparent md:bg-[#0C0C0C99]'  id='about'>
            {/* left side */}

            <h1 className='font-bold text-4xl tracking-wider'>ABOUT</h1>


            <div className='flex flex-col items-center  md:flex-row'>

                <img className='w-1/3 hidden md:flex' src={about} alt='aboutimgicon' />



                {/* right side */}
                <ul className='flex flex-col gap-12 mt-8 md:mt-0'>

                    <li className='flex flex-row items-center rounded-2xl px-0 md:p-6 bg-gradient-custom bg-size-custom hover:bg-size-100'>
                        <img src={crsr} alt="cursoricon" />
                        <div className=''>
                            <h3 className='font-bold text-2xl'>Frontend Developer</h3>
                            <p className='text-lg'>I’m a front-end developer with experience in building responsive
                                and optimized sites and I possess a valuable skill 
                                set that combines creativity with technical expertise.
                                 My knowledge in ReactJS allows me to create dynamic
                                  and interactive user interfaces,
                                   while my knowledge of Tailwind and Bootstrap
                                    enables me to design visually appealing and responsive websites.</p>
                        </div>
                    </li>

                    <li className='flex flex-row items-center rounded-2xl px-0 md:p-6 bg-gradient-custom bg-size-custom'>
                        {/* <img src={server} alt="servericon" /> */}
                        {/* <div className=''>
                            <h3 className='font-bold text-2xl'>Backend Developer</h3>
                            <p className='text-lg'>I have experience developing fast and optimised back-end systems and APIs</p>
                        </div> */}
                    </li>

                    <li className='flex flex-row items-center rounded-2xl px-0 md:p-6 bg-gradient-custom bg-size-custom'>
                        {/* <img src={UI} alt="uidesginicon" /> */}
                        {/* <div className=''>
                            <h3 className='font-bold text-2xl '>UI Designer</h3>
                            <p className='text-lg'>
                                I have designed multiple landing pages and have created design systems as well </p>
                        </div> */}
                    </li>

                </ul>
            </div>


        </div>


    )
}
