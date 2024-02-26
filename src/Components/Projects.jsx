import React from 'react'
import { projectsdata } from '../data/projects';
import { ProjectCard } from './ProjectCard';
export const Projects = () => {
  return (
     
      
      <div id='projects' className='font-custom text-white  mt-24  mx-[10%] '>
       
            <h1 className='text-4xl font-bold  uppercase tracking-[1.70px]'>Projects</h1>
                
                
    
                <div className=' flex flex-row flex-wrap items-center justify-center w-full gap-5 mt-14'>
                    {
                       projectsdata.map((proj, id)=>{

                        return <ProjectCard key={id} project ={proj} />;

                       })}
                </div>

        </div>
    
  
  )
}
