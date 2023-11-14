import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
	FaCode,
	FaCodeBranch,
	FaCodepen,
	FaFileCode,
	FaThList,
	FaBars
} from 'react-icons/fa'; // For the GitHub icon
import {Skill as SkillType} from '../typings'
import Skill from './Skill';

type Props = {
	directionLeft?: boolean;
	skills: SkillType[];
};

function Skills({ directionLeft, skills}: Props) {
	const [filterSkillType, setFilterSkillskillType] = useState('all');

	// Function to handle button click
	const handleFilterClick = (skillType: string) => {
		setFilterSkillskillType(skillType);
	};

	const controls = useAnimation();

	useEffect(() => {
		// Start the animation when the component mounts
		controls.start({
			x: 0,
			opacity: 1,
			transition: { duration: 1 },
		});

		// The empty dependency array ensures this effect runs only once on mount
	}, [controls]);


	const filterButtons = [
		{ label: 'all', icon: FaBars, skillType: 'all' },
		{ label: 'Languages', icon: FaCode, skillType: 'language' },
		{ label: 'Frameworks', icon: FaCodepen, skillType: 'framework' },
		{ label: 'CSS Frameworks', icon: FaFileCode, skillType: 'css' },
		{
			label: 'Version Control',
			icon: FaCodeBranch,
			skillType: 'version-control',
		},
		{ label: 'Productivity', icon: FaThList, skillType: 'productivity' },
	];

	const orderedSkills = skills.sort((a, b) => a.order - b.order)

	const filteredSkills = orderedSkills.filter(
		(skill) => filterSkillType === 'all' || skill.skillType === filterSkillType
	);
	const containerClass =
		filteredSkills.length < 5
			? 'flex justify-center gap-5'
			: 'grid grid-cols-5 gap-5';

	return (
		<motion.div
			className='h-screen flex relative flex-col text-center md:text-left 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-heading text-2xl'>
				Skills
			</h3>
			<h5 className='absolute top-36 uppercase tracking-[3px] text-heading text-sm'>
				Hover over button for skill name. Click a filter button to show specific
				skills.
			</h5>
			<div className='absolute top-32 flex flex-row justify-center items-center  h-36'>
				{filterButtons.map((button) => (
					<button
						key={button.label}
						className='projectButton flex'
						onClick={() => handleFilterClick(button.skillType)}
					>
						{React.createElement(button.icon, { className: 'mr-2' })}
						{button.label}
					</button>
				))}
			</div>
			<motion.div
				initial={{ x: directionLeft ? '-100%' : '100%', opacity: 0 }}
				animate={controls}
				className={`${containerClass} absolute top-64`}
			>
				{/* Map through filtered skills */}
				{filteredSkills.map((skill) => (
					<Skill
						key={skill._id}
						skill={skill}
						
					/>
				))}
			</motion.div>
		</motion.div>
	);
}

export default Skills;
