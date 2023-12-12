import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '../typings';

type Props = {
	pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
	const navButtons = [
		{
		name: 'About',
		link: '#about'
	},
	{
		name: 'Experience',
		link: '#experience'
	},
	{
		name: 'Skills',
		link: '#skills'
	},
	{
		name: 'Projects',
		link: '#projects'
	},
]
	const [text] = useTypewriter({
		words: [...pageInfo['typewriter']],
		loop: true,
		typeSpeed: 70,
		delaySpeed: 700,
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
					{
						navButtons.map((button, index) => (
							<Link href={button.link} key={index}>
						<button className='border-[#169137]/40 bg-[#169137]/40 px-6 mx-1 py-2 border 
    border-primary   text-text
      md:mx-5 md:py-2 md:border md:bg-transparent rounded-full uppercase text-xs tracking-widest md:text-heading
      transition-all hover:border-[#169137]/40 hover:text-[#FFF] hover:bg-[#169137]/40 mt-2 md:mt-0'>{button.name}</button>
					</Link>
						))
					}
					
				</div>
			</div>
		</div>
	);
}

export default Hero;
