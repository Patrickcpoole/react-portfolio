import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
	return (
		<motion.div
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration:1.5}}
			className="flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-heading text-2xl">
				About
			</h3>
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1.2,
				}}
				viewport={{ once: true }}
				src="https://wageup-media.s3.amazonaws.com/profile.JPG"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-md object-cover md:rounder-lg md:w-64 md:h-64
      xl:w-[400px] xl:h-[400px] text-heading"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-5xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-accent">little</span>{" "}
					background
				</h4>
				<p className="text-xl">
					My name is Patrick Poole and I am a full stack web developer currently living in Denver, Colorado.
					I have been working with both React and Vue for the past 5 years and have experience 
					designing, building, and deploying many web projects both personally and professionally. 
				</p>
			</div>
		</motion.div>
	);
}

export default About;
