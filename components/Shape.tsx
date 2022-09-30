import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Shape({}: Props) {
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

         className="flex justify-center items-center xl:w-full " >
            <div className="absolute border bg-black  border-[#1ee1ff] h-[500px] w-[500px] md:top-10 
            animate-spin " />
             <div className="absolute border bg-black  border-[#1ee1ff] h-[500px] w-[900px] mt-52 top-10 
            animate-ping" />
            <div  className="box border border-[#1ebfff] h-full w-[600px] absolute mt-60 animate-pulse " />
       

            <div  className="box border border-[#fcfcfc] h-full  w-full absolute bottom-2   animate-ping " />
            <div  className="box border border-[#ff17f7]  h-full  w-[600px] absolute mt-96  animate-ping " />
            <div  className="box border border-[#433c44] h-2  w-[600px] absolute mb-7 animate-ping " />
            <div  className="box border border-[#333333] h-full  w-[300px] absolute mt-52  animate-spin " />
            <div className="box border border-[#333333] h-[300px] w-[300px] absolute mt-70  animate-ping " />
            <div className="box border border-[#19b2ff] opacity-20   h-[650px] w-[800px] absolute mt-52 animate-ping" />
            <div  className="box border border-[#fb3030] h-6  w-[900px] absolute mt-20  animate-spin " />
            <div  className="box border border-[#eeeaea] h-6  w-[300px] absolute mt-70  animate-ping " />
            
            <div className="box border border-[#121210] bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ... opacity-40 h-fit w-fit absolute mt-52 animate-pulse " />
            
            <div />
            

        </motion.div>
        )
}

export default Shape
    
    

  

