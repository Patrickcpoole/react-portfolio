import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
	FaCode,
	FaCodeBranch,
	FaCodepen,
	FaFileCode,
	FaThList,
	FaBars,
} from 'react-icons/fa'; // For the GitHub icon
import { Skill as SkillType } from '../typings';
import Skill from './Skill';

type Props = {
	directionLeft?: boolean;
	skills: SkillType[];
};

function Skills({ directionLeft, skills }: Props) {
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
		{label: 'Version Control', icon: FaCodeBranch, skillType: 'version-control' },
		{ label: 'Productivity', icon: FaThList, skillType: 'productivity' }
	];

	const orderedSkills = skills.sort((a, b) => a.order - b.order);

	const filteredSkills = orderedSkills.filter(
		(skill) => filterSkillType === 'all' || skill.skillType === filterSkillType
	);
	const containerClass =
		filteredSkills.length < 5
			? 'flex justify-center flex-wrap gap-5'
			: 'md:grid md:grid-cols-5 flex justify-center flex-wrap gap-5';

	return (
		<motion.div
			className='flex flex-col text-center md:text-left 
    max-w-[2000px] xl:px-10 justify-start xl:space-y-0 mx-auto items-center mb-16'
		>
			<h3 className='section-heading mt-20'>
				Skills
			</h3>
			<h5 className='hidden md:block section-sub-heading'>
				Hover over button for skill name. Click a filter button to show specific
				skills.
			</h5>
			<h5 className='block md:hidden section-sub-heading'>
				Tap skill button for skill name. Tap a filter button to show specific
				skills.
			</h5>
			<div className='flex flex-wrap mb-2 justify-center'>
				{filterButtons.map((button, index) => (
				
					<button key={index}
						className='skillFilterButton flex mb-4'
						onClick={() => handleFilterClick(button.skillType)}
					>
						{React.createElement(button.icon, { className: 'mr-2' })}
						{index === 3 // Index of 'Version Control'
        ? 'CSS' // Abbreviation for 'Version Control System'
        : index === 4 // Index of 'CSS Frameworks'
        ? 'VCS' // Abbreviation for 'CSS Frameworks'
        : button.label}
					</button>
			
				))}
			</div>
			<motion.div
				initial={{ x: directionLeft ? '-100%' : '100%', opacity: 0 }}
				animate={controls}
				className={`${containerClass} `}
			>
				{filteredSkills.map((skill) => (
					<Skill key={skill._id} skill={skill} />
				))}
			</motion.div>
		</motion.div>
	);
}

export default Skills;
