import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
    return (
        <motion.div 
        initial={{
            opacity: 0,
        }}

        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],

        }}
        transition={{
            duration: 10,
            repeat: Infinity,
        }}

         className="relative flex justify-center items-center" >
            <div className="absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 
            animate-ping" />
            <div className="rounded-full bg-[#0d0c0c] h-[300px] w-[300px] absolute mt-52 " />
            <div className="rounded-full  bg[#333333] h-[300px] w-[300px] absolute mt-52 " />
            <div className="rounded-full  bg-[#ffffff] opacity-20  h-[650px] w-[650px] absolute mt-52 animate-ping" />
            <div className="rounded-full  bg-[#a7d3ff] h-[800px] w-[800px] opacity-20 absolute mt-52 " />
            <div />
            

        </motion.div>
        )
}

export default BackgroundCircles