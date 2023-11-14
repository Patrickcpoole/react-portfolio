import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import {PageInfo} from '../typings'


type Props = {
  pageInfo: PageInfo
};

function Hero({pageInfo}: Props) {
	const [text, count] = useTypewriter({
		words: [
			"Hi! My Name's Patrick.",
			"I'm a full stack web developer from Colorado.",
      "I like to build things that people love to use."
		],
		loop: true,
		delaySpeed: 1000,
	});
	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
      <img 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://wageup-media.s3.amazonaws.com/profile.JPG" />
      <div className="z-20">
        <h2 className="text-sm uppercase text-heading pb-2 tracking-[15px]">Full Stack Developer</h2>
        
			<h1 className='text-5xl lg:text-6xl font-semibold px-10'>
				<span className='mr-3 text-text'>{text}</span>
				<Cursor cursorColor="#169137" />
			</h1>
      <div className='pt-5'>
        <Link href="#about">
        <button className='heroButton'>About</button>
        </Link>
        <Link href="#experience">
        <button className='heroButton'>Experience</button>
        </Link>
        <Link href="#skills">
        <button className='heroButton'>Skills</button>
        </Link>
        <Link href="#projects">
        <button className='heroButton'>Projects</button>
        </Link>
        </div>
      </div>
		</div>
	);
}

export default Hero;
