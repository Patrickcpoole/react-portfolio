import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '../typings';
import Image from 'next/image';
import { urlFor } from '../sanity';

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
		<div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<Image
				width={600}
				height={600}
				alt='Hero profile picture'
				className='relative rounded-full md:h-52 md:w-52 h-48 w-48 mx-auto object-cover'
				src={urlFor(pageInfo.heroImage).url()}
			/>
			<div className='z-20'>
				<h2 className='text-md md:text-sm uppercase text-heading pb-2 md:tracking-[15px] tracking-[5px] my-5'>
					{pageInfo.role}
				</h2>
				<div className='w-full h-40 '>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold px-6 md:px-10'>
						<span className='text-text'>{text}</span>
						<Cursor cursorColor='#169137' />
					</h1>
				</div>

				<div className='flex flex-wrap justify-center items-center mt-5'>
					<Link href='#about'>
						<button className='heroButton'>About</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton mt-2'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
