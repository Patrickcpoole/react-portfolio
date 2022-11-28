import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
	return (
		<motion.div
			className="h-screen flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Skills
			</h3>
			<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
				Hover over a skill for current profeciency
			</h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill url="https://wageup-media.s3.amazonaws.com/React-log.png" skill="85%"/>
        <Skill url="https://wageup-media.s3.amazonaws.com/vue-logo.png" skill="75%"/>
        <Skill url="https://wageup-media.s3.amazonaws.com/django.svg" skill="55%"/>
        <Skill url="https://wageup-media.s3.amazonaws.com/sql-logo-1.jpg" skill="55%"/>
        <Skill url="https://wageup-media.s3.amazonaws.com/html-log.webp" skill="95%"/>
        <Skill url="https://wageup-media.s3.amazonaws.com/css-logo.png" skill="90%"/>
        <Skill url="https://wageup-media.s3.amazonaws.com/js-logo1.png" skill="75%"/>
				<Skill url="https://wageup-media.s3.amazonaws.com/firebase-logo.webp" skill="70%"/>
        
        
      </div>
		</motion.div>
	);
}

export default Skills;
