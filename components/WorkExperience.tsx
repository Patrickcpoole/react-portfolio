import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
	experience: Experience[];
};


function WorkExperience({ experience }: Props) {
  const orderedExperience = experience.sort(
    (a, b) => new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime()
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-screen  min-h-screen flex relative flex-col overflow-hidden md:overflow-hidden text-left justify-start items-center  "
    >
      <h3 className="section-heading">
        Experience
      </h3>
      <div className="flex flex-col w-[95%] xl:flex-row justify-center items-center mt-6  ">
        {orderedExperience.map((job) => (
          <ExperienceCard key={job._id} job={job} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience