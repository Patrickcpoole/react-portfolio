import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
	experience: Experience[];
};


function WorkExperience({ experience }: Props) {
  const orderedExperience = experience.sort(
    (a, b) => new Date(a.dateStarted).getTime() - new Date(b.dateStarted).getTime()
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen w-screen mb-20 flex relative flex-col overflow-scroll md:overflow-hidden text-left justify-start items-center"
    >
      <h3 className="section-heading mt-24 md:mt-0">
        Experience
      </h3>
      <div className="flex flex-col w-full md:flex-row justify-center items-center md:space-y-0">
        {orderedExperience.map((job) => (
          <ExperienceCard key={job._id} job={job} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience