import React, { useRef, useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaMobile } from 'react-icons/fa'; // For the GitHub icon
import { BsPlayFill } from 'react-icons/bs'; // For the Demo icon, using a play icon as an example

import { MdArrowBack, MdArrowForward } from 'react-icons/md';

type Props = {};

function Projects({}: Props) {
	const [isScrolling, setIsScrolling] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const projectRef = useRef(null);

	const scroll = useCallback(
		(direction: 'left' | 'right') => {
			if (isScrolling) return; // Prevent scroll if already scrolling
			setIsScrolling(true);
			if (scrollContainerRef.current) {
				const container = scrollContainerRef.current;
				const scrollAmount =
					direction === 'left' ? -container.offsetWidth : container.offsetWidth;
				container.scrollTo({
					left: container.scrollLeft + scrollAmount,
					behavior: 'smooth',
				});
			}
			setTimeout(() => setIsScrolling(false), 300); // Adjust time based on scroll speed
		},
		[isScrolling]
	);

	const handleKeyPress = useCallback(
		(event: KeyboardEvent) => {
			// ... rest of your code ...
			if (!isScrolling) {
				if (event.code === 'ArrowRight') {
					scroll('right');
				} else if (event.code === 'ArrowLeft') {
					scroll('left');
				}
			}
		},
		[scroll, isScrolling]
	);

	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const handleWheel = useCallback((e: WheelEvent) => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollLeft += e.deltaY;
		}
	}, []);

	useEffect(() => {
		// Cast handleWheel to EventListener
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.5 }
		); // Adjust threshold as needed
		const wheelListener = handleWheel as unknown as EventListener;
		window.addEventListener('keydown', handleKeyPress);

		if (scrollContainerRef.current) {
			scrollContainerRef.current.addEventListener('wheel', wheelListener, {
				passive: false,
			});
		}

		if (projectRef.current) {
			observer.observe(projectRef.current);
		}

		return () => {
			if (scrollContainerRef.current) {
				scrollContainerRef.current.removeEventListener('wheel', wheelListener);
			}
			if (projectRef.current) {
				observer.unobserve(projectRef.current);
			}
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [handleWheel, handleKeyPress]);

	const projects = [
		{
			name: 'Movie DB',
			url: 'https://wageup-media.s3.amazonaws.com/Screen+Shot+2022-11-28+at+8.49.09+AM.png',
			description:
				'An application that leverages the open Netflix API to display current movies out in theatres and their relevant information.',
		},
		{
			name: 'Movie DB',
			url: 'https://wageup-media.s3.amazonaws.com/Screen+Shot+2022-11-28+at+8.49.09+AM.png',
			description:
				'An application that leverages the open Netflix API to display current movies out in theatres and their relevant information.',
		},
		{
			name: 'Movie DB',
			url: 'https://wageup-media.s3.amazonaws.com/Screen+Shot+2022-11-28+at+8.49.09+AM.png',
			description:
				'An application that leverages the open Netflix API to display current movies out in theatres and their relevant information.',
		},
	];

	const projectCount = [1, 2, 3, 4, 5];
	return (
		<div
			ref={projectRef}
			className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
    mx-auto items-center z-0'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-heading text-2xl '>
				Projects
			</h3>

			{isVisible && (
				<button
					onClick={() => scroll('left')}
					className='fixed left-4 top-1/2 text-heading z-30 hover:text-accent'
				>
					<MdArrowBack size={'3em'} />
				</button>
			)}
			<div
				ref={scrollContainerRef}
				className='relative w-full flex overflow-y-hidden  snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#169137]/80'
			>
				{projects.map((project, key) => (
					<div
						className='w-screen flex-shrink-0 snap-center flex flex-row space-y-5 items-center justify-center p-20 md:p44 h-screen mt-20'
						key={key}
					>
						<article
							className='flex flex-col rounded-md items-center justify-center space-y-7 flex-shrink-0 shadow-xl text-text w-[80%] md:w-[40%]
          snap-center  text-center
					bg-card p-10 cursor-pointer overflow-hidden hover:shadow-2xl transition-transform duration-300 ease-in-out'
						>
							<div className='h-1/2'>
								<img src={project.url} className='rounded-t-md ' alt='' />
							</div>
							<div className='h-1/2'>
								<h4 className='text-4xl'>{project.name}</h4>
								<div className='flex flex-row justify-center items-center mt-4'>
									<img
										className='w-10 h-10 mx-1'
										src='https://wageup-media.s3.amazonaws.com/icons8-html-48.png'
										alt=''
									/>

									<img
										className='w-10 h-10 mx-1'
										src='https://wageup-media.s3.amazonaws.com/icons8-css-logo-48.png'
										alt=''
									/>

									<img
										className='w-10 h-10 mx-1'
										src='https://wageup-media.s3.amazonaws.com/icons8-javascript-48.png'
										alt=''
									/>
									<img
										className='w-10 h-10 mx-1'
										src='https://wageup-media.s3.amazonaws.com/icons8-vue.js-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-48.png'
										alt=''
									/>

									<img
										className='w-10 h-10 mx-1'
										src='https://wageup-patrick.s3.amazonaws.com/icons/icons8-python-96.png'
										alt=''
									/>

									<img
										className='w-10 h-10 mx-1'
										src='https://wageup-media.s3.amazonaws.com/django.svg'
										alt=''
									/>

									<img
										className='w-10 h-10 mx-1'
										src='https://wageup-media.s3.amazonaws.com/icons8-sql-40.png'
										alt=''
									/>
								</div>
								<p className='text-xl mt-2'>{project.description}</p>
								<div className='flex justify-center items-center mt-10'>
								<Link href='#about'>
									<button className='projectButton'>
										<FaGithub className='mr-2'/>
										View Github
									</button>
								</Link>
								<Link href='#about'>
									<button className='projectButton flex '>
										<FaMobile className='mr-2'/>
										View Demo
									</button>
								</Link>
								</div>
							</div>
						</article>
					</div>
				))}
				{isVisible && (
					<button
						onClick={() => scroll('right')}
						className='fixed right-6 top-1/2  z-30 text-heading hover:text-accent'
					>
						<MdArrowForward size={'3em'} />
					</button>
				)}
			</div>

			{/* <div className='w-full absolute top-[25%] bg-[#169137]/20 left-0 h-[500px] -skew-y-12' /> */}
		</div>
	);
}

export default Projects;
