import { GetStaticProps} from 'next'
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
    <div className="bg-[#333] text-white h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#169137]/80">
      <Head>
        <title>Patricks portfolio</title>

      </Head>

  
      <Header socials={socials}/>
      

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}  />
      </section>

     
        <section id="about" className='snap-center'>
          <About pageInfo={pageInfo}/>
        </section>
  
      <section id="experience" className='snap-center'>
        <WorkExperience experience={experience} />
      </section>
   
       <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>

   
      <section id="skills" className='snap-start' >
        <Skills skills={skills}/>
      </section>
     
    
      <section id="contact" className='snap-start'>
        <Contact pageInfo={pageInfo} />
      </section>
      <Link href="#hero" legacyBehavior>
        
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
        <ArrowUpCircleIcon className="h-6 w-6" style={{color: '#169137'}}/>
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
