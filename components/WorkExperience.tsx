import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experience: Experience[];
};

function WorkExperience({ experience }: Props) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const experienceRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      if (isScrolling) return;
      setIsScrolling(true);
      if (direction === "left") {
        const currentIndex = experienceIndex;
        setExperienceIndex(currentIndex - 1);
      } else {
        const currentIndex = experienceIndex;
        setExperienceIndex(currentIndex + 1);
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
          const currentIndex = experienceIndex;
          setExperienceIndex(currentIndex + 1);
          scroll("right");
        } else if (event.code === "ArrowLeft") {
          const currentIndex = experienceIndex;
          setExperienceIndex(currentIndex - 1);
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
    const currentexperience = experienceRef.current;

    if (currentScrollContainer) {
      currentScrollContainer.addEventListener("wheel", wheelListener, {
        passive: false,
      });
    }

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (currentScrollContainer) {
        currentScrollContainer.removeEventListener("wheel", wheelListener);
      }
      if (currentexperience) {
        observer.unobserve(currentexperience);
      }
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleWheel, handleKeyPress]);

  const orderedExperience = experience.sort(
    (a, b) =>
      new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime()
  );

  return (
    <div
      ref={experienceRef}
      className="relative w-screen flex  flex-col text-left max-w-full justify-start mx-auto items-center z-0 "
    >
      <h3 className="section-heading">Experience</h3>

      <div
        ref={scrollContainerRef}
        className="flex flex-col w-full  md:flex-start items-center md:flex  md:flex-row md:relative  md:w-[95%] md:snap-x md:snap-mandatory md:overflow-hidden  md:hide-scrollbar"
      >
        {orderedExperience.map((job, index) => (
          <div
            key={job._id}
            className="snap-center snap-always flex-shrink-0 w-11/12 md:h-screen md:w-full overflow-x-hidden flex flex-row 
									justify-center items-start  transition-transform duration-300 ease-in-out mx-10 "
          >
            <ExperienceCard
              key={job._id}
              job={job}
              scroll={scroll}
              experienceIndex={experienceIndex}
              experienceLength={experience.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
