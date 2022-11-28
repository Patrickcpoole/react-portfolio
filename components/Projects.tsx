import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
	const projects = [
		{
			name: "WageUp",
			url: "https://wageup-homepage-media.s3.us-east-1.amazonaws.com/arenaHomeScreen.gif",
			description: "The flagship WageUp product RDB2, displaying KPIs of employees in an engaging and entertaning way",
			size: 7
		},
		{
			name: "Venue",
			url: "https://wageup-media.s3.amazonaws.com/Screen+Shot+2022-11-27+at+10.51.57+PM.png",
			description: "A PWA (Progressive Web App) displaying various venues and the artists playing them in the Denver Area. Leveraged the Spotify API to display artist information and allow users to listen to songs in the app.",
			size: 5
		},
		{
			name: "Movie DB",
			url: "https://wageup-media.s3.amazonaws.com/Screen+Shot+2022-11-28+at+8.49.09+AM.png",
			description: "An application that leverages the open Netflix API to display current movies out in theatres and their relevant information.",
		},
	];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
    mx-auto items-center z-0"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Projects
			</h3>
			<div
				className="relative w-full flex overflow-x-scroll overlfow-y-hidden snap-x snap-mandatory z-20
      scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
			>
				{projects.map((project, key) => (
					<div
						key={key}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
          items-center justify-center p-20 md:p-44 h-screen"
					>

						<motion.img
							initial={{
								y: -300,
								opacity: 0,
							}}
		
							transition={{ duration: 1.2 }}

							whileInView={{ width: project.name == 'Venue' ? 300 : 600,  opacity: 1, y: 0, }}
							viewport={{ once: true }}
							src={project.url}
							alt="project alt"
						/>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#F7AB0A']/50 ">
									Project {key + 1} of {projects.length}{" "}
								</span>
								{project.name}
							</h4>
							<p className="text-lg text-center md:text-left">
								{project.description}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 h-[500px] -skew-y-12" />
		</motion.div>
	);
}

export default Projects;
