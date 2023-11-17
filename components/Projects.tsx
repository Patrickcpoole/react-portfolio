import React, { useRef, useEffect, useCallback, useState } from 'react';
import { FaGithub, FaMobile } from 'react-icons/fa'; // For the GitHub icon
import Image from 'next/image';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
	projects: Project[];
};

function Projects({ projects }: Props) {
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

		const currentScrollContainer = scrollContainerRef.current;
		const currentProject = projectRef.current;

		if (currentScrollContainer) {
			currentScrollContainer.addEventListener('wheel', wheelListener, {
				passive: false,
			});
		}

		if (projectRef.current) {
			observer.observe(projectRef.current);
		}

		return () => {
			if (currentScrollContainer) {
				currentScrollContainer.removeEventListener('wheel', wheelListener);
			}
			if (currentProject) {
				observer.unobserve(currentProject);
			}
			window.removeEventListener('keydown', handleKeyPress);
		};
	}, [handleWheel, handleKeyPress]);

	return (
		<div
			ref={projectRef}
			className='h-screen relative flex overflow-hidden flex-col text-left  max-w-full justify-start
    mx-auto items-center z-0'
		>
			<h3 className='section-heading mt-24 '>Projects</h3>

			{isVisible && (
				<button
					onClick={() => scroll('left')}
					className='hidden md:block fixed left-4 top-1/2 text-heading z-30 hover:text-accent'
				>
					<MdArrowBack size={'3em'} />
				</button>
			)}
			<div
				ref={scrollContainerRef}
				className='relative w-full flex overflow-y-hidden  snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#169137]/80 '
			>
				{projects.map((project, i) => (
					<div key={i} className="flex flex-col items-center mt-12 ">
						<article
							
							className='flex flex-col rounded-md items-center justify-center space-y-7 flex-shrink-0 shadow-xl text-text mx-auto w-[95%] md:w-[40%]
          snap-center  text-center pb-5
					bg-card  md:p-10 cursor-pointer overflow-hidden hover:shadow-2xl transition-transform duration-300 ease-in-out'
						>
							<Image
								height={1000}
								width={1600}
								src={urlFor(project?.image).url()}
								className='rounded-t-md h-100%'
								alt=''
							/>

							<h4 className='text-4xl'>{project.title}</h4>
							<div className='flex flex-row justify-center items-center mt-4'>
								{project.technologies.map((technology) => (
									<Image
										height={200}
										width={200}
										key={technology._id}
										className='w-12 h-12 mx-1'
										src={urlFor(technology?.image).url()}
										alt=''
									/>
								))}
							</div>
							<p className='text-xl mt-2'>{project.summary}</p>
							<div className='flex justify-center items-center mt-10'>
								<a href={project.linkToGithub}>
									<button className='projectButton'>
										<FaGithub className='mr-2' />
										View Github
									</button>
								</a>
								<a href={project.linkToBuild}>
									<button className='projectButton flex '>
										<FaMobile className='mr-2' />
										View Demo
									</button>
								</a>
							</div>
						</article>

						{isVisible && (
							<div className='md:hidden flex space-x-4 mt-8'>
								<button
									onClick={() => scroll('left')}
									className='z-30 text-heading hover:text-accent'
								>
									<MdArrowBack size={'2.5em'} />
								</button>
								<p className='text-2xl mt-1'>{`Project ${i+1}`}</p>
								<button
									onClick={() => scroll('right')}
									className='z-30 text-heading hover:text-accent'
								>
									<MdArrowForward size={'2.5em'} />
								</button>
							</div>
						)}
					</div>
				))}
				{isVisible && (
					<button
						onClick={() => scroll('right')}
						className='hidden md:block fixed right-6 top-1/2  z-30 text-heading hover:text-accent'
					>
						<MdArrowForward size={'3em'} />
					</button>
				)}
			</div>
		</div>
	);
}

export default Projects;
