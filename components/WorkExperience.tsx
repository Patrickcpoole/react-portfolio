import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import Link from "next/link";

type Props = {};

function WorkExperience({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row 
    max-w-full px-10 justify-evenly max-auto items-center"
		>
			<h3 className="absolute mt-50 top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Experience
			</h3>
			<div
				className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
		
			>
				<article
					className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
		opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
				>
					<motion.img
						initial={{
							y: -100,
							opacity: 0,
						}}
						transition={{ duration: 1.2 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="w-32 h-32 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px]
      object-cover object-center"
						src="https://wageup-media.s3.amazonaws.com/wageupLogo850.png"
						alt="work experience image"
					/>
					<div className="px-0 md:px-10">
						<h4 className="text-4xl font-light">Senior FrontEnd Developer </h4>
						<p className="font-bold text-2xl mt-1">WageUp</p>
						<div className="flex space-x-2 my-2">
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/vue-logo.png"
								alt=""
							/>
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/django.svg"
								alt=""
							/>
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/sql-logo-1.jpg"
								alt=""
							/>
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/html-log.webp"
								alt=""
							/>
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/css-logo.png"
								alt=""
							/>
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/js-logo1.png"
								alt=""
							/>
						</div>
						<p className="uppercase py-5 text-gray-300">
							Started 11/01/2019 - Current Job
						</p>
						<ul className="list-disc space-y-4 ml-5 text-lg">
							<li>
								Designed and built MyToolKit a mobile app used by thousands of
								AAA across the United States of America to track and improve
								their performance
							</li>
							
							<li>
								Assisted in the designing and building of the companies
								marketing site{" "}
								<Link href="wageup.com" passHref={true}>
									wageup.com
								</Link>
							</li>
						</ul>
					</div>
				</article>
				<article
					className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
				>
					<motion.img
						initial={{
							y: -100,
							opacity: 0,
						}}
						transition={{ duration: 1.2 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="w-32 h-32 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] xl:rounded-full
      object-cover object-center"
						src="https://wageup-media.s3.amazonaws.com/fareharbor1.png"
						alt="work experience image"
					/>
					<div className="px-0 md:px-10">
						<h4 className="text-4xl font-light">Integrations Specialist</h4>
						<p className="font-bold text-2xl mt-1">FareHarbor</p>
						<div className="flex space-x-2 my-2">
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/React-log.png"
								alt=""
							/>
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/html-log.webp"
								alt=""
							/>
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/css-logo.png"
								alt=""
							/>
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/js-logo1.png"
								alt=""
							/>
						</div>
						<p className="uppercase py-5 text-gray-300">
						Started 05/01/2018 - Ended 11/01/2019
						</p>
						<ul className="list-disc space-y-4 ml-5 text-lg">
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
				<article
					className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
				>
					<motion.img
						initial={{
							y: -100,
							opacity: 0,
						}}
						transition={{ duration: 1.2 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="w-32 h-32 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px]
      object-cover object-center"
						src="https://wageup-media.s3.amazonaws.com/cu-logo-1.png"
						alt="work experience image"
					/>
					<div className="px-0 md:px-10">
						<h4 className="text-4xl font-light">
							Website and Marketing Technologies Assistant{" "}
						</h4>
						<p className="font-bold text-2xl mt-1">
							University of Colorado Boulder
						</p>
						<div className="flex space-x-2 my-2">
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/html-log.webp"
								alt=""
							/>
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/css-logo.png"
								alt=""
							/>
							<img
								className="h-10 w-10 rounded-full"
								src="https://wageup-media.s3.amazonaws.com/js-logo1.png"
								alt=""
							/>
						</div>
						<p className="uppercase py-5 text-gray-300">
						Started 09/01/2016 - Ended 05/01/2018
						</p>
						<ul className="list-disc space-y-4 ml-5 text-lg">
							<li>
							Utilized Drupal 8 to update and style content including blogs, news, and articles
							</li>
							<li>
							Helped with SEO updates including meta-tags, page titles, content updates, implementing prescribed linking strategies
							</li>
					
					
						</ul>
					</div>
				</article>
			</div>
		</motion.div>
	);
}

export default WorkExperience;
