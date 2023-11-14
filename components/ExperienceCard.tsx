import React from "react";
import { motion } from "framer-motion";
import Link from 'next'
import Image from 'next/image'
import {Experience} from '../typings'
import { urlFor } from "../sanity";

type Props = {
	job: Experience
};

function ExperienceCard({job}: Props) {

	const orderedTechnologies = job.technologies.sort((a, b) => a.order - b.order)
	

	return (
		<a href={job.linkToWebsite} rel="noopener noreferrer" target="_blank">
		<article
					className='mr-2 flex flex-col rounded-md items-center justify-start space-y-7 flex-shrink-0 shadow-xl text-text h-[600px]
          snap-center max-w-[600px] md:max-w-[800px] text-center
					bg-card p-10 cursor-pointer overflow-hidden hover:shadow-2xl transition-transform duration-300 ease-in-out'
				>
					<motion.img
						initial={{
							y: -100,
							opacity: 0,
						}}
						transition={{ duration: 1.2 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='w-32 h-24 mb-[-2.5%]
      object-cover object-center'
						src={urlFor(job?.companyImage).url()}
						alt='work experience image'
					/>
					<div className='px-0 md:px-10'>
						<h4 className='text-4xl font-light'>{job.jobTitle}</h4>
						<p className='font-bold text-2xl mt-2'>{job.company}</p>
						<div className='flex justify-center items-center w-full space-x-2 mt-4'>
						
						{orderedTechnologies.map(technoglogy => 
							<Image
							className="w-10 h-10"
							width={40}
							height={40}
							key={technoglogy._id}
							src={urlFor(technoglogy?.image).url()}
							alt=''
						/>
							)}
							
						</div>
						<p className='uppercase pt-5 text-text'>
							Started: {job.dateStarted} 
						</p>
						{job.dateEnded ?
						<p className='uppercase mb-5 text-text'>
							Ended: {job.dateEnded}
							</p> : <p className='uppercase mb-5 text-text'>Current Job</p> }
						<ul className='list-disc space-y-4 ml-5 text-lg text-left'>
							{job.points.map((point, index) => (
								<li key={index}>{point}</li>
							))}
						</ul>
					</div>
				</article>
				</a>
	);
}

export default ExperienceCard;
