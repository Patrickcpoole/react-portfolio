import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
	job: Experience;
};

function ExperienceCard({ job }: Props) {
  const orderedTechnologies = job.technologies.sort(
    (a, b) => a.order - b.order
  );

  return (
    <a href={job.linkToWebsite} rel="noopener noreferrer" target="_blank">
      <article
        className="mt-5 flex flex-col rounded-md items-center space-y-7 flex-shrink-0 mx-auto shadow-xl text-text 
          snap-center w-11/12 md:max-w-[800px] text-center
          bg-card p-5 pb-12 md:p-10 cursor-pointer overflow-hidden hover:shadow-2xl transition-transform duration-300 ease-in-out"
      >
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-24 mb-[-2.5%] object-cover object-center"
          src={urlFor(job?.companyImage).url()}
          alt="work experience image"
        />
        <div className="px-0 md:px-10">
          <h4 className="text-3xl md:text-4xl font-light">{job.jobTitle}</h4>
          <p className="font-bold text-xl md:text-2xl mt-2">{job.company}</p>
          <div className="flex flex-wrap justify-center items-center w-full space-x-2 mt-4">
            {orderedTechnologies.map((technology) => (
              <Image
                className="w-8 h-8 md:w-12 md:h-12 my-2" 
                width={300}
                height={300}
                key={technology._id}
                src={urlFor(technology?.image).url()}
                alt=""
              />
            ))}
          </div>
          <p className="uppercase pt-5 text-text">Started: {job.dateStarted}</p>
          {job.dateEnded ? (
            <p className="uppercase mb-5 text-text">Ended: {job.dateEnded}</p>
          ) : (
            <p className="uppercase mb-5 text-text">Current Job</p>
          )}
          <ul className="list-disc space-y-4 ml-5 text-md md:text-xl text-left">
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
