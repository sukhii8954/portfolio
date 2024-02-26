import React from 'react'
import { projectsdata } from '../data/projects';

export const ProjectCard = ({project : {title ,imageSrc ,description ,skills ,demo ,source}}) => {
   
  return (
    <div className='flex flex-col rounded-xl bg-gradient-customproj
     px-4 py-6 max-w-[345px] '> 
      
    <img className='mb-7' src={imageSrc}alt={`${title}`} />
      
      
     <h2 className='text-2xl font-bold'>{title}</h2>

    
     <p className='mt-2 text-xl font-normal'>{description}</p>
      

      
      <ul className='w-full mt-3 flex flex-row flex-wrap gap-2 list-none'>
          {
           skills.map((skill,id)=>{
             
            
           return (<li className='text-xl font-semibold  rounded-2xl bg-[#0B2447] px-5 py-1 ' key={id}>
                {skill}
                </li>
                );
            })
          }
      </ul>
     
      <div className='w-full mt-6 flex justify-around'>

     
      <a className='text-2xl font-semibold rounded-2xl bg-[#576CBC] py-[1px] px-6' href={demo}>Demo</a>
   
      <a className='text-2xl font-semibold rounded-2xl bg-[#576CBC] py-[1px] px-6' href={source}>Source</a>

      </div>
  </div>
  )
}
