import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import Link from 'next/link';

type Props = {};

function WorkExperience({}: Props) {
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
				{/* <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'> */}
				{/* <ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard /> */}

				<article
					className='mr-2 flex flex-col rounded-md items-center justify-center space-y-7 flex-shrink-0 shadow-xl text-text h-[600px]
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
						className='w-32 h-32 mt-[-10%] mb-[-5%]
      object-cover object-center'
						src='https://wageup-media.s3.amazonaws.com/wageupLogo850.png'
						alt='work experience image'
					/>
					<div className='px-0 md:px-10'>
						<h4 className='text-4xl font-light'>Full Stack Developer </h4>
						<p className='font-bold text-2xl mt-2'>WageUp</p>
						<div className='flex justify-center items-center w-full space-x-2 mt-4'>
							<img
								className='w-10 h-10'
								src='https://wageup-media.s3.amazonaws.com/icons8-html-48.png'
								alt=''
							/>
							<img
								className='w-10 h-10'
								src='https://wageup-media.s3.amazonaws.com/icons8-css-logo-48.png'
								alt=''
							/>

							<img
								className='w-10 h-10'
								src='https://wageup-media.s3.amazonaws.com/icons8-javascript-48.png'
								alt=''
							/>

							<img
								className='w-10 h-10'
								src='https://wageup-media.s3.amazonaws.com/icons8-vue.js-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-48.png'
								alt=''
							/>

							<img
								className='w-10 h-10'
								src='https://wageup-patrick.s3.amazonaws.com/icons/icons8-python-96.png'
								alt=''
							/>

							<img
								className='w-10 h-10'
								src='https://wageup-media.s3.amazonaws.com/django.svg'
								alt=''
							/>

							<img
								className='w-10 h-10'
								src='https://wageup-media.s3.amazonaws.com/icons8-sql-40.png'
								alt=''
							/>
						</div>
						<p className='uppercase py-5 text-text'>
							Started 11/01/2019 - Current Job
						</p>
						<ul className='list-disc space-y-4 ml-5 text-lg'>
							<li>
								Designed and built MyToolKit a mobile app used by thousands of
								AAA across the United States of America to track and improve
								their performance
							</li>

							<li>
								Assisted in the designing and building of the companies
								marketing site{' '}
								<Link href='wageup.com' passHref={true}>
									wageup.com
								</Link>
							</li>
						</ul>
					</div>
				</article>

				<article
					className='flex ml-2 flex-col rounded-md items-center space-y-7 flex-shrink-0 shadow-xl text-text h-[600px]
          snap-center max-w-[600px] md:max-w-[800px]
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
						className='w-32 h-32 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] xl:rounded-full
      object-cover object-center'
						src='https://wageup-media.s3.amazonaws.com/fareharbor1.png'
						alt='work experience image'
					/>
					<div className='px-0 md:px-10'>
						<h4 className='text-4xl font-light'>Integrations Specialist</h4>
						<p className='font-bold text-2xl mt-2'>FareHarbor</p>
						<div className='flex space-x-2 mt-4'>

								<img
									className='w-10 h-10'
									src='https://wageup-media.s3.amazonaws.com/icons8-html-48.png'
									alt=''
								/>
			
								<img
							className='w-10 h-10'
									src='https://wageup-media.s3.amazonaws.com/icons8-css-logo-48.png'
									alt=''
								/>
			
								<img
								className='w-10 h-10'
									src='https://wageup-media.s3.amazonaws.com/icons8-javascript-48.png'
									alt=''
								/>
		
								<img
									className='w-10 h-10'
									src='https://wageup-media.s3.amazonaws.com/icons8-react-native-48.png'
									alt=''
								/>
					
						</div>
						<p className='uppercase py-5 text-prmiary'>
							Started 05/01/2018 - Ended 11/01/2019
						</p>
						<ul className='list-disc space-y-4 ml-5 text-lg'>
							<li>
								Integrated over 1,000 FareHarbor client websites using HTML,
								CSS, JavaScript, and jQuery creating exceptional UI/UX to
								optimize bookings and revenue
							</li>
							<li>
								Developed a metrics dashboard in React to analyze and display
								the stats of the web integrations team including integrations,
								live updates, seo audits, and mock integrations
							</li>
						</ul>
					</div>
				</article>
			</div>
		</motion.div>
	);
}

export default WorkExperience;
