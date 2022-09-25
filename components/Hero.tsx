import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter}   from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

    type Props = { 
        pageInfo: PageInfo;
    };

    export default function Hero({ pageInfo }: Props) {

        const [text, count] = useTypewriter({
            words: [
                `Hi, The Name's ${pageInfo?.name}`,
                'I am a Front End Developer',
                'I am a Back End Developer',
                'I am a Web Developer',
                'I am a Software Developer',

            ],
            loop: true,
            delaySpeed: 2000,

        })


        return (
            <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
                <BackgroundCircles />
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Nico Bazzoni
                </h2>
                <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
                    src={urlFor(pageInfo?.heroImage).url() || '/images/profile.jpg'}
                    />
                    

                

                

               <div className='z-20'>

                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                   {pageInfo?.role}
                </h2>

                <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
                <span className='mr-3'>{text}</span>
                </h1>

                <div className='space-y-2 space-x-4 justify-center pt-6'>

                    <Link href="about">
                     <button className="heroButton">About</button>
                    </Link>
                   
                    <button className="heroButton">Experience</button>
                    <button className="heroButton">Skills</button>
                    <button className="heroButton">Projects</button>
                </div>
                </div>
            </div>
        );
    }