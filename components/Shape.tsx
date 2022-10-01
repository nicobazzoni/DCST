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

         className="flex justify-center items-center xl:w-full">
            <div className="absolute border bg-black  border-[#ff2121] h-[500px] w-screen md:top-1 bottom:1
            animate-pulse " />
             <div className="absolute border bg-black  border-[#ff2020] h-[500px] w-screen mt-52 top-10 
            animate-ping" />
            <div  className="box border border-[#f92525] h-[500px] w-screen absolute mt-60 animate-pulse " />
       

            <div  className="box border border-[#3f0909] h-full w-full absolute bottom-2  animate-ping " />
            <div  className="box border border-[#e4ff17]  h-[500px]  w-screen absolute  animate-ping " />
            <div  className="box border border-[#1decff]  h-[600px]  w-screen absolute  animate-ping " />
            <div  className="box border border-[#17e8ff]  h-[600px] w-[800px] absolute mt-96 animate-ping " />
            <div  className="box border border-[#ff3939] h-2  w-[600px] absolute mb-7 animate-ping " />
            <div  className="box border border-[#363535] h-full  w-[300px] absolute mt-52 animate-spin " />
            <div  className="box border border-[#363535] h-1  w-[500px] absolute mt-1 mr-10 animate-spin " />
            <div className="box border border-[#7e1d1d] h-[300px] w-screen absolute mt-70 animate-ping " />
            <div className="box border border-[#720f0f] opacity-20   h-[650px] w-screen absolute mt-52 animate-ping" />
            <div  className="box border border-[#fb3030] h-0  w-screen  mt-80 absolute border-shadow-[#ff0cce] animate-pulse " />
            <div  className="box border border-[#5c0d0d] h-0  w-[300px] absolute mt-70  animate-ping " />
            
            <div className="box border border-[#121210] bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ... opacity-40 h-fit w-fit absolute mt-52 animate-pulse " />
            
            <div />
            

        </motion.div>
        )
}

export default Shape
    
    

  

