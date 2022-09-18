    import React from 'react';
    import { Cursor, useTypewriter}   from 'react-simple-typewriter';

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
            <div>
                <h1>
                <span>{text}</span>
                </h1>
            </div>
        );
    }