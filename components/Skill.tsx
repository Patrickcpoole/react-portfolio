import React from "react";

import {Skill} from '../typings'
import { urlFor } from "../sanity";

type Props = {
	skill: Skill;
};


function Skill({skill }: Props) {
	
	return (
		<div className="group relative flex cursor-pointer">
			<div

        className="rounded-full bg-card object-cover w-[7.5em] h-[7.5em] transition-transform
				duration-300 ease-in-out flex justify-center items-center"
			>
			<img src={urlFor(skill?.image).url()} className="w-14 h-14" alt="skill photos"/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
			ease-in-out group-hover:bg-text w-16 h-16 md:w-24 md:h-24 xl:w-[7.5em] xl:h-[7.5em] rounded-full z-0">
				<div className="flex items-center justify-center h-full text-center">
					<p className="text-lg font-bold text-opacity-100 text-primary p-5">{skill.title}</p>
				</div>
			</div>
			</div>
      
		</div>
	);
}

export default Skill;
