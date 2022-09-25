import React from 'react'
import { motion } from 'framer-motion'
import {SocialIcon} from 'react-social-icons'
import Link from 'next/link'
import {Social} from '../typings'


type Props = { 
  socials: Social[];
}

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 
    xl:items-center">
      <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,

      }}

      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}

      transition={{
        duration: 1,
        type: 'spring',
        stiffness: 120,
      }}
      
      
      className="flex flex-row items-center text-gray-300 cursor-pointer "  
      >
        {/* social icons */} 
        {socials.map((social) => ( 
          <SocialIcon 
          key={social._id}
          url={social.url} 
          fgColor="gray"
          bgColor="transparent" 
          /> 
          ))}

        <SocialIcon url="https://github.com/nicobazzoni" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
        
        
        
      </motion.div>
     
     <Link href="#contact">
      <motion.div 
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
        type: 'spring',
        stiffness: 120,
      }}
      
      className="flex flex-row items-center text-gray-300 cursor-pointer" 
      >
        <SocialIcon
        className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
          network="email"
          />

          <p className="uppercase hidden md:inline-flex text-small text-gray-400 mr-4" >
            Get in Touch</p>

     </motion.div>
    </Link>

    </header>
  )
}