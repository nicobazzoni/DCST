import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from 'framer-motion'

type Inputs ={
    name: string,
    email: string,
    subject: string
    message: string
}


type Props = {}

function ContactMe({}: Props) { 
    const { handleSubmit, register } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href =`mailto:nicobazzoni@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };
  return (
    <div className="h-screen flex relative flex-col text-center 
    md:text3-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact

        </h3>

        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                I have the solutions.{" "}
                <span className="decoration-white underline"> Let's Talk</span>
            </h4>
       

        <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
                
         <PhoneIcon className='text-2xl h-7 w-7 animate-pulse' />
         <p className="text-2xl ">555888777e</p>

            </div>

            <div className="flex items-center space-x-5 justify-center">
                
                <EnvelopeIcon className='text-2xl h-7 w-7 animate-pulse' />
                <p className="text-2xl ">nicobazzoni@gmail.com</p>
       
                </div>

                <div className="flex items-center space-x-5 justify-center">
                
                <MapPinIcon className='text-2xl h-7 w-7 animate-pulse' />
                <p className="text-2xl ">123 developer lane</p>
       
                </div>
            
           </div>  

           <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto" >
            
            <div className="flex space-x-2">
                <input {...register("name")} 
                placeholder="Name"  
                className='contactInput' 
                type="text" />
                
                <input {...register('email')} 
                placeholder="Subject" 
                className='contactInput' 
                type="email" />
                
            </div>
                
            <input {...register('subject')} 
            placeholder="Subject" 
            className='contactInput' 
            type="text" 
            />
            
            <textarea {...register('message')} 
            placeholder="Message" 
            className='contactInput'
            />

            
            <button 
            type="submit" 
            className="bg-[#F7AB0A] py-5 px-10 rounded-full text-black font-bold
            text-lg "
            >
                Submit
                
            </button>
           
           </form>

        </div>

    
    
    
    </div>
  )
}

export default ContactMe