import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Line({}: Props) {
    return (
        <motion.div 
        initial={{
            opacity: 0,
        }}

        animate={{
            scale: [1,2,2,3],
            opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            borderRadius: ["20%", "20%", "50%", "50%", "20%", "10%"],

        }}
        transition={{
            duration: 10,
            repeat: Infinity,
        }}

         className="relative flex justify-center items-center xl:w-full " >
            
        
              <div className='box border w-screen h-0 animate-ping'> </div>
          
           
            
            
            
            <div />
            

        </motion.div>
        )
}

export default Line