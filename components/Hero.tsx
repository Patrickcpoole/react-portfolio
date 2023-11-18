import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '../typings';

type Props = {
	pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
	const [text] = useTypewriter({
		words: [...pageInfo['typewriter']],
		loop: true,
		delaySpeed: 1000,
	});
	return (
		<div className='h-screen flex flex-col items-center justify-center text-center md:space-y-8 overflow-hidden'>
			<BackgroundCircles />
			<img
				className='relative rounded-full h-32 w-32 mx-auto mt-10 md:mt-0 object-cover '
				src='https://wageup-media.s3.amazonaws.com/profile.JPG'
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-heading pb-2 tracking-[15px] my-10 md:my-0'>
					Full Stack Developer
				</h2>
				<div className='z-20'>
					<h1 className='text-4xl lg:text-5xl font-semibold px-10 h-32 md:h-24'>
						<span className='mr-3 text-text'>{text}</span>
						<Cursor cursorColor='#169137' />
					</h1>
				</div>
       
				<div className='flex flex-wrap justify-center items-center mt-5 '>
					<Link href='#about'>
						<button className='heroButton '>About</button>{' '}
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>{' '}
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Skills</button>{' '}
					</Link>
					<Link href='#projects'>
						<button className='heroButton mt-2 md:mt-0'>Projects</button>{' '}
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
