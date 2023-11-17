import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
	socials: Social[];
};

function Header({ socials }: Props) {
	return (
		<header className='sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-50 bg-transparent'>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex flex-row items-center'
			>
				{socials.map((social, index) => (
					<div key={index} className="mx-1">
						<a href={social.url} target='_blank' rel='noopener noreferrer'>
							{social.title === 'Github' ? (
								<FaGithub
									className='text-heading hover:text-accent cursor-pointer mr-3'
									size={'1.75em'}
								/>
							) : (
								<FaLinkedin
									className='text-heading hover:text-accent cursor-pointer ml-3'
									size={'1.75em'}
								/>
							)}
						</a>
					</div>
				))}
			</motion.div>
			<Link href='#contact' legacyBehavior>
				<motion.div
					initial={{
						x: 500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className='flex flex-row items-center text-heading cursor-pointer'
				>
					<div className='flex group'>
						<FaEnvelope
							className='text-heading mr-3 group-hover:text-accent'
							size={'1.5em'}
						/>
						<p className='uppercase hidden md:inline-flex text-sm text-heading group-hover:text-accent'>
							Get In Touch
						</p>
					</div>
				</motion.div>
			</Link>
		</header>
	);
}

export default Header;
