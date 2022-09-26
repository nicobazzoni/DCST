import React from 'react';

import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = { 
    experience: Experience
};

export default function ExperienceCard({ experience }: Props) {
    return (
       <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
       w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] 
       p-10 md:hover:opacity-100 md:opacity-40 cursor-pointer transition-opacity duration-200">

        <div>
            
        </div>
        <motion.img 
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once:true}}
        transition={{ duration: 1.2,  stiffness: 120 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center  "
        src={urlFor(experience?.companyImage).url()} />

        <div className="px-0 md:px-10"> 
            <h4>{experience?.company}</h4> 

            <div className="flex space-x-2 my-2">
                {experience.technologies.map((technology)  => (
                    <img 
                    key={technology._id}
                    className='h-10 w-10 rounded-full'
                    src={urlFor(technology.image).url()} />
               ))}

              

               
            </div>
            <p className="uppercase py-5 text-gray-300"> 

            {new Date(experience.dateStarted).toDateString()} - { " " }
            {experience.isCurrentlyWorkingHere 
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
            
            </p>

            <ul className="list-disc space-y-4 ml-5 text-lg w-4/5 h-96 overflow-y-scroll pr-5 ">

                {experience.points.map((point, i) => (
                    <li key={i}> {point}</li>

                ))}
                
            </ul>

        </div>


       </article>
    )
}
