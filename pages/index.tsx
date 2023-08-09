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
// import { fetchExperiences } from '../utils/fetchExperiences'
// import { fetchPageInfo} from '../utils/fetchPageInfo'
// import {fetchSocials} from "../utils/fetchSocials"
// import { fetchProjects } from '../utils/fetchProjects'
// import { fetchSkills } from '../utils/fetchSkills'

// type Props = {
//   pageInfo:PageInfo; 
//   experiences: Experience[];
//   skills: Skill[];
//   projects: Project[];
//   socials: Social[];
// }

const Home = () => {
  return (
    <div className="bg-[rgb(38,38,38)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Patricks portfolio</title>

      </Head>

      {/*Header */}
      <Header />
      {/* Hero */}

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About*/}
        <section id="about" className='snap-center'>
          <About />
        </section>
      {/* Experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>
      {/* Project */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <Contact />
      </section>
      <Link href="#hero" legacyBehavior>
        
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
        <ArrowUpCircleIcon className="h-6 w-6 text-yellow-500"/>
        </div>
       
      </footer>
     
      </Link>

    </div>
  )
};

export default Home;

// export const getStaticProps: GetStaticProps <Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[]= await fetchSocials();

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials
//     },

//     // Next.js will attempt to re-generate the page: 
//     // When a request comes in 
//     // At most once ecery 10 seconds
//     revalidate: 10,
//   };

// };
