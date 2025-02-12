import React, { useRef, useEffect, useCallback, useState, use } from "react";
import { FaGithub, FaMobile } from "react-icons/fa";
import Image from "next/image";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const projectRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      if (isScrolling) return;
      setIsScrolling(true);
      if (direction === "left") {
        const currentIndex = projectIndex;
        setProjectIndex(currentIndex - 1);
      } else {
        const currentIndex = projectIndex;
        setProjectIndex(currentIndex + 1);
      }
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount =
          direction === "left" ? -container.offsetWidth : container.offsetWidth;
        container.scrollTo({
          left: container.scrollLeft + scrollAmount,
          behavior: "smooth",
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
        if (event.code === "ArrowRight") {
          const currentIndex = projectIndex;
          setProjectIndex(currentIndex + 1);
          scroll("right");
        } else if (event.code === "ArrowLeft") {
          const currentIndex = projectIndex;
          setProjectIndex(currentIndex - 1);
          scroll("left");
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
    window.addEventListener("keydown", handleKeyPress);

    const currentScrollContainer = scrollContainerRef.current;
    const currentProject = projectRef.current;

    if (currentScrollContainer) {
      currentScrollContainer.addEventListener("wheel", wheelListener, {
        passive: false,
      });
    }

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (currentScrollContainer) {
        currentScrollContainer.removeEventListener("wheel", wheelListener);
      }
      if (currentProject) {
        observer.unobserve(currentProject);
      }
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleWheel, handleKeyPress]);

  return (
    <div
      ref={projectRef}
      className="relative w-screen flex  flex-col text-left max-w-full justify-start mx-auto items-center z-0 "
    >
      <h3 className="section-heading">Projects</h3>

      <div
        ref={scrollContainerRef}
        className="flex flex-col w-full  md:flex-start items-center md:flex  md:flex-row md:relative  md:w-[95%] md:snap-x md:snap-mandatory md:overflow-hidden  md:hide-scrollbar"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="snap-center snap-always flex-shrink-0 w-11/12 md:h-screen md:w-full overflow-x-hidden flex flex-row 
									justify-center items-start  transition-transform duration-300 ease-in-out mx-10 "
          >
            <div className="h-[80%] flex justify-center items-center md:w-[150px] w-[0px]">
              {isVisible && projectIndex > 0 && (
                <button
                  onClick={() => scroll("left")}
                  className="hidden md:flex flex-col justify-center items-center z-30 hover:text-accent text-heading animate-pulse mr-4 "
                >
                  <MdArrowBack size={"4em"} />
                </button>
              )}
            </div>

            <article
              className="flex flex-col items-center mt-12 md:mt-6 rounded-md justify-start space-y-7 shadow-lg md:w-[600px] 
												text-center 
												dark:bg-card bg-cardLight "
            >
              <Image
                height={1200}
                width={1600}
                src={urlFor(project?.image).url()}
                className="rounded-t-md"
                alt="project image"
              />

              <h4 className="text-3xl">{project.title}</h4>
              <div className="flex flex-row flex-wrap justify-center items-center mt-4 md:mt-2 md:pl-2 md:pr-2">
                {project.technologies.map((technology) => (
                  <Image
                    height={200}
                    width={200}
                    key={technology._id}
                    className="w-8 h-8 mx-1"
                    src={urlFor(technology?.image).url()}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-md mt-2 px-4">{project.summary}</p>
              <div className="flex justify-center items-center mt-10 pb-5">
                <a href={project.linkToGithub} target="_blank" rel="noreferrer">
                  <button className="projectButton">
                    <FaGithub className="mr-2" />
                    View Github
                  </button>
                </a>
                <a href={project.linkToBuild} target="_blank" rel="noreferrer">
                  <button className="projectButton flex">
                    <FaMobile className="mr-2" />
                    View Demo
                  </button>
                </a>
              </div>
            </article>

            <div className="h-[80%] flex justify-center items-center md:w-[150px] w-[0px]">
              {isVisible && projectIndex === 0 && (
                <button
                  onClick={() => scroll("right")}
                  className="hidden md:flex flex-col justify-center items-center  hover:text-accent text-heading animate-pulse ml-4 "
                >
                  <MdArrowForward size={"4em"} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
