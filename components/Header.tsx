import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';
import ThemeToggle from './ThemeToggle';
type Props = { socials: Social[] };
function Header({ socials }: Props) {
	return (
		<header className='sticky top-[1%] p-5 flex items-center justify-between max-w-7xl mx-auto z-50 md:w-screen '>
		
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className='flex flex-row items-center md:justify-around'
			>
				
				<ThemeToggle />
				{socials.map((social, index) => (
						<a
						key={index}
						href={social.url}
						target='_blank'
						rel='noopener noreferrer'
						className='mx-1'
					>
					
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
				))}
			
			</motion.div>
			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className='flex items-center flex-nowrap text-heading cursor-pointer '
			>
				
				<a
					href='https://amplify-venu20-dev-131644-deployment.s3.amazonaws.com/Patrick+Poole+Resume.pdf'
					target='_blank'
					rel='noopener noreferrer'
					className='w-auto flex md:mr-4 group'
				>
				
					<FaFile
						className='text-heading mr-3 group-hover:text-accent'
						size={'1.5em'}
					/>
					<p className='uppercase hidden md:inline-flex text-sm text-heading group-hover:text-accent'>
						Resume
					</p>
				</a>
				<Link href='#contact' legacyBehavior>
				
					<div className='flex w-auto md:ml-4 group cursor-pointer'>
					
						<FaEnvelope
							className='text-heading mr-3 group-hover:text-accent'
							size={'1.5em'}
						/>
						<p className='uppercase hidden md:inline-flex text-sm text-heading group-hover:text-accent'>
							Get In Touch
						</p>
					</div>
				</Link>
			</motion.div>
		</header>
	);
}
export default Header;
