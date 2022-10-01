import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Circles({}: Props) {
    return (
        <div className='overflow-visible'>
        <motion.div 
        whileTap={{ scale: 2.1 }}
        whileDrag={{ scale: 2.1,  }}
        drag="x"
        dragConstraints={{ left: -100, right: 100, top: 800, bottom: 200 }}
        initial={{ 
            x: 0,
            opacity: 1,
        }}
        
       

        whileInView={{
            opacity: 0.5,
            
        }}

        animate={{
            scale: [1,2,4],
            opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.1, 0.1, 0.1,],
            borderRadius: ["10%", "20%", "50%", "50%", "60%", "80%"],

        }}
        transition={{
            duration: 40,
            repeat: Infinity,

        }}

         className="relative flex justify-center items-center" >
           
          
            <div className="rounded-full bg-gradient-to-r from-indigo-600 to-white text-white px-2 ... border border-[#333333] h-[900px] w-[900px] absolute mb-2 right-3 opacity-30 animate-pulse " />
            <div className="rounded-full bg-gradient-to-r from-indigo-600 to-red-500 text-white px-2 ... border border-[#333333] h-[500px] w-[500px] absolute mt-34 mr-48 opacity-50  animate-pulse " />
            <div className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-2 ... border border-[#333333] h-[200px] w-[200px] absolute mt-34 mr-52 animate-pulse " />
            <div className="rounded-full bg-gradient-to-r from-indigo-500 to-pink-200 text-white px-2 ... border border-[#333333] h-[100px] w-[100px] absolute mt-52 right-4 opacity-30 mr-36 animate-pulse " />
            <div className="rounded-full bg-gradient-to-r from-indigo-600 to-yellow-500 text-white px-2 ... border border-[#333333] h-screen w-[200px] absolute mt-34 ml-52 animate-pulse " />
            <div className="rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-2 ... border border-[#333333] h-screen w-[300px] right-44 absolute mt-34 ml-96 animate-pulse " />
            <div className="rounded-full bg-gradient-to-r from-red-600 to-blue-500 text-white px-2 ... border border-[#333333] h-screen w-[300px] right-24 absolute mt-34 mr-96 animate-pulse " />
            <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 ... border border-[#333333] h-screen w-[300px] absolute mt-34 ml-1 animate-pulse " />
            <div className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 ... border border-[#333333] h-screen w-[300px] absolute mt-34 ml-96 animate-pulse " />
        </motion.div>
        </div>
        )
}

export default Circles