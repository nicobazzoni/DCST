import React from 'react'
import { motion } from 'framer-motion'
import MovingLines from './MovingLines'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'

type Props = { 
    pageInfo: PageInfo;
   
}


export default function About({ pageInfo }: Props) { 
    
    return (
        
        <motion.div 
        initial={{opacity: 0 }}
        whileInView= {{opacity: 1}}
        transition={{duration: 1}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
        max-w-7xl px-10 justify-evenly mx-auto items-center"
         >
          
        <h3 className="absolute top-24 mr-24 uppercase tracking-[30px] text-gray-500 text-2xl ">
           <MovingLines/> </h3>

            <motion.img 
            initial={{ 
                x: -200,
                opacity: 0,
            }}
             transition={{ 
                duration: 1.2,
             }}
            whileInView={{ x: 0, opacity: 1, }}
            viewport={{once: true}} 
            src={urlFor(pageInfo?.profilePic).url() || ''}
             
             
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
             md:rounded-lg md:w-64 md:h-95 xl:w-[800px] xl:h-[600px]" 
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a {" "}
                    <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                    background
                    </h4>

                  <h4 className='text-base'>{pageInfo.backgroundInformation}</h4>
            </div>
        </motion.div> 
    )
}