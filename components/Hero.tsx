import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Cursor, useTypewriter}   from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

    type Props = { 
        pageInfo: PageInfo;
    };

    export default function Hero({ pageInfo }: Props) {
        const x = useSpring(0)


            
        const [text, count] = useTypewriter({
           
            words: [
                `Hi, The Name's ${pageInfo?.name}`,
                'I am a Front End Developer',
                'I am a Back End Developer',
                'I am a Web Developer',
                'I am a Software Developer',

            ],
            loop: true,
            delaySpeed: 2000,
            typeSpeed: 100, 
            deleteSpeed: 100,
            
            
            

        })


        return (
            <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
                <BackgroundCircles />
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Nico Bazzoni
                </h2>
                <motion.div 
                
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}> 
                  
                <motion.img 
                className="relative rounded-full h-32 w-32 mx-auto object-cover hover:animate-bounce "
                    src={urlFor(pageInfo?.heroImage).url() || '/images/profile.jpg'}
                    
                    />
                   
                </motion.div>

                

                

               <div className='z-20'>

                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] hover:animate-ping">
                   {pageInfo?.role}
                </h2>

                <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10 hover:animate-ping">
                <span className='mr-3'>{text}</span>
                </h1>

                <motion.div 
                 animate={{
                    scale: [1, 2, 2, 1, 1],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}>

                 

                <div className='space-y-2 space-x-4 justify-center pt-6'>

                    

                    <Link href="#about">
                    <motion.button 
                    

                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}

                    animate={{
                        type: 'spring',
                    }}

                    
                    className="heroButton">About</motion.button>
                    </Link>
                    <Link href="#experience">
                    <motion.button 
                    

                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}

                    animate={{
                        type: 'spring',
                    }}

                    
                    className="heroButton">Experience</motion.button>
                    </Link>

                    <Link href="#skills">
                    <motion.button 
                    

                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}

                    animate={{
                        type: 'spring',
                    }}

                    
                    className="heroButton">Skills</motion.button>
                    </Link>

                    <Link href="#projects">
                    <motion.button 
                    

                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}

                    animate={{
                        type: 'spring',
                    }}

                    
                    className="heroButton">Projects</motion.button>
                    </Link>
                    
                </div></motion.div>
                </div>
            </div> 
        );
    }