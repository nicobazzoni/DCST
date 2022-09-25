import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { fetchExperiences } from '../utils/fetchExperiences';
import { Experience } from '../typings';

type Props = { 
    experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
    return (
        <motion.div 
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, type: 'spring', stiffness: 120 }}
           
        
        className="h-screen flex relative overflow-hiddden flex-col text-lft md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center"> 
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
           Experience
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
            {experiences.map((experience) => (
                <ExperienceCard key={experience._id} experience={experience} />

            ))}
            
        </div>
        
        </motion.div>
    )


}

export default WorkExperience