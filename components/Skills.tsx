import React from 'react';

import { motion } from 'framer-motion';

import { SocialIcon } from 'react-social-icons';
import Skill from './Skill';
import { Skill as SkillType } from '../typings';
import  Circles  from './Circles';

type Props = { 
    skills: SkillType[];
};

function Skills( { skills }: Props) {
    return (
     
        <div 
        
        className="flex relative flex-col text-center md:text-left md:flex xl:flex-row 
        max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center ">

            
            <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>

            <h3 className="absolute bottom-28 uppercase tracking-[3px] text-gray-500 text-sm">
                 hover 
            </h3>

            <div className="grid grid-cols-2 md:w-fit p-24 gap-5 ">
               {skills?.slice(0, skills.length / 2).map((skill) => (
                <Skill key={skill._id} skill={skill} />
               ))}

                {skills?.slice(skills.length / 2, skills.length).map((skill) => (
                <Skill key={skill._id} skill={skill} directionLeft />
               ))}


            </div> 
            <div className=''>

           
             </div>
            
        </div>

    )
}

export default Skills
