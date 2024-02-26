import React from 'react'
import { data } from '../data/skills';
import { history }  from  '../data/history';
export const Experience = () => {
    // console.log(skills)
  return (  
    <div className='text-white mx-[10%]  mt-[79px]' id="experience">  
    {/* //container  */}
        <h1 className='uppercase font-bold text-3xl tracking-wide' >Experience</h1>  
         {/* //title */}



        <div className='flex flex-col md:flex-row items-center  justify-evenly  gap-[34px] md:gap-20  mt-6'>   
        {/* //content */}
               
               <div className=' w-[100%] flex-row justify-center md:w-[45%] mx-2 flex flex-wrap gap-[37px]'> 
               {/* //skills */}
                {  
                data.map((skills,id)=>{
                        return (
                            <div className='flex flex-col items-center gap-[11px]' key={id}>  
                            {/* //skill */}
                               <div className='bg-[#19376D] rounded-full flex
                                items-center justify-center w-[120px] h-[120px] '>  
                                {/* //skillimgcontainer */}
                                <img className='w-[75px]' src= {skills.imageSrc} alt={skills.title} />
                                </div>
                                <p className='text-2xl font-medium'>{skills.title}</p>
                           </div> 
                        );
                        
                    })}

               </div>
               {/* //history */}
               <ul className=' w-[100%] md:w-[45%] flex flex-col gap-[20px] md:gap-[48px]  '>  
                {
                  history.map((historyitem ,id)=>{
                    //  historyitem
                    return <li className='flex flex-row items-center gap-[17px] bg-[#19376D] rounded-xl
                     p-[24px] bg-gradient-custom2' key={id}>  
                  
                      <img className='w-[50px]' src= {historyitem.imageSrc} alt={`${historyitem.organisation}logo`}></img>
                     
                      {/* // historyitemdetails */}
                    <div>   
                      <h3 className='text-3xl font-medium'>{`${historyitem.role}, ${historyitem.organisation}`}</h3>
                      <p className= 'text-sm font-light'>{`${historyitem.startDate}-${historyitem.endDate}`}</p>
                      <ul className='mt-[6px] list-disc list-inside text-xl mx-4'>
                        {historyitem.experiences.map((exp,id)=>{
                          return <li key={id}>{exp}</li>
                        })}
                      </ul>
                    </div>
                    </li>
                  })
                }
               </ul>

        </div>

    </div>
  )
}
