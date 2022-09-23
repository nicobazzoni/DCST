import React from 'react'
import { motion } from 'framer-motion'
import MovingLines from './MovingLines'

type Props = {}


export default function About({}: Props) { 
    return (
        <div className=''>

            
        
        <motion.div 
        initial={{opacity: 0 }}
        whileInView= {{opacity: 1}}
        transition={{duration: 1}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
        max-w-7xl px-10 justify-evenly mx-auto items-center"
         >
          

        <h3 className="absolute top-24 uppercaswe tracking-[20px] text-gray-500 text-2xl ">
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
            
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSFAmPU2pxThTmDahJHsPMb3QskIBcMGMoA&usqp=CAU"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
            md:rounded-lg md:w-64 md:h-95 xl:w-[800px] xl:h-[600px]" 
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a {" "}
                    <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                    background
                    </h4>

                    <p className="text-base"> WhateverWhateverWhateverWhateverWhateverWhatever
                    WhateverWhateverWhateverWhateverWhateverWhateverWhatever
                    WhateverWhateverWhateverWhateverWhateverWhateverWhatever
                    WhateverWhateverWhateverWhateverWhateverWhatever
                    WhateverWhateverWhateverWhateverWhateverWhateverWhatever </p>
            </div>
            

        
        </motion.div> </div>
    )
}