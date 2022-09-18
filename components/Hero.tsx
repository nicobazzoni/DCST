    import React from 'react';
    import { Cursor, useTypewriter}   from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

    type Props = {};

    export default function Hero({}: Props) {

        const [text, count] = useTypewriter({
            words: [
                'Nico Bazzoni here',
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
                <h1>
                <span>{text}</span>
                </h1>
            </div>
        );
    }