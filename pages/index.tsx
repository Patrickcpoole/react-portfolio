import { GetStaticProps} from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo} from '../utils/fetchPageInfo'
import {fetchSocials} from "../utils/fetchSocials"
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
 
type Props = {
  pageInfo:PageInfo; 
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home: React.FC<Props> = ({ pageInfo, experience, skills, projects, socials }) => {
 
  return (
    <div className="bg-primaryLight dark:bg-primaryDark dark:text-text text-primaryDark h-screen w-screen font-sans
    snap-y snap-mandatory overscroll-contain overflow-y-scroll overflow-x-hidden scroll-smooth z-0 
    md:scrollbar md:scrollbar-thumb-[#169137]/80 md:scrollbar-track-card">
      <Head>
        <title>Patricks portfolio</title>

      </Head>

  
      <Header socials={socials} />
      
 
      <section id='hero' data-testid="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

     
        <section id="about" data-testid="about" className='snap-center pb-[20dvh] md:pb-0 '>
          <About pageInfo={pageInfo}/>
        </section>
  
      <section id="experience" data-testid="experience" className='snap-start md:snap-always pt-[5dvh] md:pt-0 pb-[50dvh] md:pb-[10dvh] lg:pb-0'>
        <WorkExperience experience={experience} />
      </section>
   
       <section id="projects" data-testid="projects" className='snap-start  pt-[5dvh] md:pt-0 pb-[40dvh] md:pb-[5dvh] lg:pb-0'>
        <Projects projects={projects} />
      </section>

   
      <section id="skills" data-testid="skills" className='snap-start  pt-[5dvh] md:pt-0 pb-[50dvh] md:pb-[10dvh] lg:pb-0' >
        <Skills skills={skills}/>
      </section>
     
    
      <section id="contact" data-testid="contact" className='snap-start pb-[10dvh] pt-[5dvh] md:pt-0 md:pb-0'>
        <Contact pageInfo={pageInfo} />
      </section>
      <Link href="#hero" legacyBehavior>
        
      <footer className='hidden sticky md:block bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
        <ArrowUpCircleIcon className="h-8 w-8 md:h-6 md:w-6" style={{color: '#169137'}}/>
        </div>
       
      </footer>
     
      </Link>

    </div>
  )

};

export default Home;
// deploying
export const getStaticProps: GetStaticProps <Props> = async () => {
  const skills: Skill[] = await fetchSkills();
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const socials: Social[]= await fetchSocials();
  console.log('this is page info', pageInfo)
  console.log('this is skills', skills);
  console.log('this is projects', projects);
  console.log('this is socials', socials);
  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials
    },

    // Next.js will attempt to re-generate the page: 
    // When a request comes in 
    // At most once every 10 seconds
    revalidate: 10,
  };

};
