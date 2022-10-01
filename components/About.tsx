import React from 'react'
import { motion } from 'framer-motion'
import MovingLines from './MovingLines'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import Circles from './Circles'

type Props = { 
    pageInfo: PageInfo;
   
}


export default function About({ pageInfo }: Props) { 
    
    return (
        <div className='z-20'>
        
        <motion.div 
        initial={{opacity: 0 }}
        whileInView= {{opacity: 1}}
       
        transition={{duration: 1}}
        className=" md:hover:opacity-100  flex flex-col h-screen text-center md:text-left md:flex-row 
        max-w-7xl px-10 justify-evenly mx-auto items-center z-0 overflow-x-visible"> 
         
         
          
        <h3 className="relative mr-20 top-2 uppercase tracking-[30px] text-gray-500 text-1xl ">
           <MovingLines/> </h3>
            
 
            <Circles/>

           
        


            <motion.img 
            
            whileTap={{ scale: 2.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100, top: 800, bottom: 200 }}
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
            className="  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
             md:rounded-lg md:w-64 md:h-95 xl:w-[800px] xl:h-[600px] " 
            />
            <div className=" space-y-10 px-0 md:px-10 md:top-24 ">
                <h4 className="text-4xl font-semibold">
                    Here is a {" "}
                    <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                    background
                    </h4>

                  {pageInfo.backgroundInformation}
                  
            </div>
            {/* <div className=' position: absolute top: 0 left: 0 z-index: 10'>
             <Circles /></div> */}
            <div className="background">

           
          

           </div>
        </motion.div> 
        </div>
        
    )
}