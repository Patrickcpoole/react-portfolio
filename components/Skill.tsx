import React from 'react';
import Image from 'next/image';
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';

type Props = {
	skill: SkillType;
};

function Skill({ skill }: Props) {
	return (
		<div className='group relative flex cursor-pointer'>
			<div
				className='rounded-full dark:bg-card bg-cardLight object-cover md:w-[6.5em] md:h-[6.5em] w-[5em] h-[5em] transition-transform
				duration-300 ease-in-out flex justify-center items-center'
			>
				<Image
					height={300} 
					width={300}
					src={urlFor(skill?.image).url()}
					className='w-10 h-10'
					alt='skill photos'
				/>
				<div
					className='absolute opacity-0 group-hover:opacity-80 transition duration-300
			ease-in-out group-hover:bg-text  w-[5em] h-[5em] md:w-24 md:h-24 xl:w-[6.5em] xl:h-[6.5em] rounded-full z-0'
				>
					<div className='flex items-center justify-center h-full text-center'>
						<p className='text-sm font-bold text-opacity-100 text-primaryDark p-5'>
							{skill.title}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skill;
