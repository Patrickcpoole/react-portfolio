import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import Link from 'next/link';
import { Experience } from '../typings';

type Props = {
	experience: Experience[];
};

function WorkExperience({ experience }: Props) {
	const orderedExperience = experience.sort((a, b) => new Date(a.dateStarted).getTime() - new Date(b.dateStarted).getTime());
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen flex relative flex-col  overflow-hidden text-left max-w-full px-10 justify-evenly max-auto items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-heading text-2xl '>
				Experience
			</h3>
			<div className='flex flex-row max-sm:flex-col justify-center items-center md:space-y-0 p-10 snap-x snap-mandatory'>
				{orderedExperience.map((job) => (
					<ExperienceCard key={job._id} job={job} />
				))}
			</div>
		</motion.div>
	);
}

export default WorkExperience;
