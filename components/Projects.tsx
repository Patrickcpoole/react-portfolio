import React, { useRef, useEffect, useCallback, useState } from 'react';
import { FaGithub, FaMobile } from 'react-icons/fa';
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

    const projectRef = useRef<HTMLDivElement>(null);

    const scroll = useCallback(
			(direction: 'left' | 'right') => {
					if (isScrolling) return;
					setIsScrolling(true);
					if (scrollContainerRef.current) {
							const container = scrollContainerRef.current;
							const scrollAmount =
									direction === 'left' ? -container.offsetWidth : container.offsetWidth;
							container.scrollTo({
									left: container.scrollLeft + scrollAmount,
									behavior: 'smooth',
							});
							// Scroll back to the top after the animation completes
							setTimeout(() => {
									
									setIsScrolling(false);
							}, 300);
					}
			},
			[isScrolling]
	);
	

    const handleKeyPress = useCallback(
        (event: KeyboardEvent) => {
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
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );
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
            className='relative w-screen flex overflow-x-hidden flex-col text-left max-w-full justify-start mx-auto items-center z-0 overflow-y-scroll my-20'
        >
            <h3 className='section-heading'>Projects</h3>
            <h5 className='section-sub-heading md:hidden'>
                Swipe cards to view more
            </h5>

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
                className='relative w-[95%] flex snap-x snap-mandatory overflow-y-hidden'
            >
                {projects.map((project, key) => (
									<div key={key} className='snap-center flex-shrink-0 w-full md:w-[40%] overflow-auto transition-transform duration-300 ease-in-out mx-10 mb-4'>
                    <article
                        
                        className='flex flex-col  items-center mt-6 rounded-md justify-start space-y-7 shadow-xl text-text 
												text-center pb-5
												bg-card md:p-10 cursor-pointer hover:shadow-2xl'
                    >
                        <Image
                            height={1200}
                            width={1600}
                            src={urlFor(project?.image).url()}
                            className='rounded-t-md'
                            alt=''
                        />

                        <h4 className='text-3xl'>{project.title}</h4>
                        <div className='flex flex-row flex-wrap justify-center items-center mt-4'>
                            {project.technologies.map((technology) => (
                                <Image
                                    height={200}
                                    width={200}
                                    key={technology._id}
                                    className='w-8 h-8 mx-1'
                                    src={urlFor(technology?.image).url()}
                                    alt=''
                                />
                            ))}
                        </div>
                        <p className='text-md mt-2 px-2'>{project.summary}</p>
                        <div className='flex justify-center items-center mt-10'>
                            <a href={project.linkToGithub}>
                                <button className='projectButton'>
                                    <FaGithub className='mr-2' />
                                    View Github
                                </button>
                            </a>
                            <a href={project.linkToBuild}>
                                <button className='projectButton flex'>
                                    <FaMobile className='mr-2' />
                                    View Demo
                                </button>
                            </a>
                        </div>
                    </article>
										</div>
                ))}
                {isVisible && (
                    <button
                        onClick={() => scroll('right')}
                        className='hidden md:block fixed right-6 top-1/2 z-30 text-heading hover:text-accent'
                    >
                        <MdArrowForward size={'3em'} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Projects;
