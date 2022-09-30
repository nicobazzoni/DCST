import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from 'framer-motion'
import Shape from './Shape';
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
        window.location.href =`mailto:nicobazzoni@gmail.com?subject=${formData.subject}&
        body=Hi, my name is ${formData.name}. ${formData.message} 
        (${formData.email})`; 
    };
  return ( 
  
  
        
   
    <div className="h-screen flex flex-col text-center overflow-x-scroll 
    md:text-left md:flex-row max-w-10xl px-10 justify-evenly mx-auto items-center object-contain md:object-scale-down  ">
        
        <h3 className="absolute top-1 md:top-52 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact

        </h3>

        <div className="flex flex-col space-y-10  ">
            <h4 className="text-4xl font-semibold mt-12 mb-1 text-center">
                Let's Work.
            </h4>
            
            <div className='items-center'>
     
           </div>
        <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
                
         <PhoneIcon className='text-2xl h-7 w-7 animate-pulse' />
         <p className="text-2xl ">917 200 2389</p>

            </div>

            <div className="flex items-center space-x-5 justify-center">
                
                <EnvelopeIcon className='text-2xl h-7 w-7 animate-pulse' />
                <p className="text-2xl ">nicobazzoni@gmail.com</p>
       
                </div>

                <div className="flex items-center space-x-5 justify-center">
                
                <MapPinIcon className='text-2xl h-7 w-7 animate-pulse' />
                <p className="text-2xl ">Nyc</p>
       
                </div>
            
           </div>  

           <form className="flex flex-col relative space-y-2 w-screen md:w-fit p-2 mx-auto" 
            onSubmit={handleSubmit(onSubmit)} >
            
            
                <input {...register("name")} 
                placeholder="Name"  
                className='contactInput' 
                type="text" />
                
              
                
            
                <input {...register('email')} 
                placeholder="Email" 
                className='contactInput' 
                type="email" />
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
            className="bg-[#29262a] hover:bg-[#25d7ff] py-5 px-10 rounded-full text-black font-bold
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