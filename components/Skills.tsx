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

	const skillsData: { url: string; skill: string; skillType: string }[] = [
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-html-96.png',
			skill: 'HTML',
			skillType: 'language',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-css-96.png',
			skill: 'CSS',
			skillType: 'language',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-javascript-96.png',
			skill: 'Javascript',
			skillType: 'language',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-python-96.png',
			skill: 'Python',
			skillType: 'language',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-sql-96.png',
			skill: 'SQL',
			skillType: 'language',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-swiftui-96.png',
			skill: 'Swift',
			skillType: 'language',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-react-a-javascript-library-for-building-user-interfaces-96.png',
			skill: 'React',
			skillType: 'framework',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-vue.js-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-96.png',
			skill: 'Vue',
			skillType: 'framework',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-nextjs-96.png',
			skill: 'NextJS',
			skillType: 'framework',
		},
		{
			url: 'https://wageup-media.s3.amazonaws.com/django.svg',
			skill: 'Django',
			skillType: 'framework',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-react-native-96.png',
			skill: 'React Native',
			skillType: 'framework',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-git-96.png',
			skill: 'Git',
			skillType: 'version-control',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-bitbucket-is-a-web-based-version-control-repository-hosting-service-96.png',
			skill: 'Bitbucket',
			skillType: 'version-control',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-styled-components-96.png',
			skill: 'Styled Components',
			skillType: 'css',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-tailwind-css-96.png',
			skill: 'Tailwind CSS',
			skillType: 'css',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-trello-96.png',
			skill: 'Trello',
			skillType: 'productivity',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-firebase-96.png',
			skill: 'Firebase',
			skillType: 'productivity',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/icons8-confluence-96.png',
			skill: 'Atlassian Confluence',
			skillType: 'productivity',
		},
		{
			url: 'https://wageup-media.s3.amazonaws.com/jetbrains-space.png',
			skill: 'Jetbrains Space',
			skillType: 'productivity',
		},
		{
			url: 'https://wageup-patrick.s3.amazonaws.com/icons/airtable_logo_icon_169628.png',
			skill: 'Airtable',
			skillType: 'productivity',
		},
	];

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

	const filteredSkills = skillsData.filter(
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
			<div className='absolute top-36 flex flex-row justify-center items-center  h-36'>
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
				className={`${containerClass} absolute top-72`}
			>
				{/* Map through filtered skills */}
				{skills?.map((skill) => (
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
