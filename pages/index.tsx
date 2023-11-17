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
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const container = document.querySelector('.custom-scrollbar');

  
    const handleScroll = () => {
      if (container) {
        container.classList.add('scrolling');
        clearTimeout(timer);

        timer = setTimeout(() => {
          container.classList.remove('scrolling');
        }, 2000); // Adjust the delay as needed
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <div className="bg-primary text-text h-screen w-screen flex flex-col items-center snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 
    md:scrollbar md:scrollbar-thumb-[#169137]/80 md:scrollbar-track-card">
      <Head>
        <title>Patricks portfolio</title>

      </Head>

  
      <Header socials={socials}/>
      

      <section id='hero' className='snap-start scroll-my-10'>
        <Hero pageInfo={pageInfo}  />
      </section>

     
        <section id="about" className='snap-center scroll-my-10'>
          <About pageInfo={pageInfo}/>
        </section>
  
      <section id="experience" className='snap-start scroll-pt-10 scroll-pb-20'>
        <WorkExperience experience={experience} />
      </section>
   
       <section id="projects" className='snap-start scroll-mt-10 scroll-mb-20'>
        <Projects projects={projects} />
      </section>

   
      <section id="skills" className='snap-start scroll-my-10' >
        <Skills skills={skills}/>
      </section>
     
    
      <section id="contact" className='snap-start scroll-my-10'>
        <Contact pageInfo={pageInfo} />
      </section>
      <Link href="#hero" legacyBehavior>
        
      <footer className='hidden md:sticky bottom-5 w-full cursor-pointer'>
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
