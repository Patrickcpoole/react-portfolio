import { GetStaticProps } from "next";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

// 2/10/2024

const Home: React.FC<Props> = ({
  pageInfo,
  experience,
  skills,
  projects,
  socials,
}) => {
  return (
    <div
      className="bg-primaryLight dark:bg-primaryDark dark:text-text text-primaryDark h-screen w-screen font-sans
    md:snap-y md:snap-mandatory overscroll-contain overflow-y-scroll overflow-x-hidden scroll-smooth z-0 
    md:scrollbar md:scrollbar-thumb-[#169137]/80 md:scrollbar-track-cardLight dark:md:scrollbar-track-card"
    >
      <Head>
        <title>Patrick Poole - Full Stack Developer Portfolio</title>
        <meta
          property="og:title"
          content="Patrick Poole - Full Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="My name is Patrick Poole and I'm a Full Stack Web Developer from Colorado."
        />
        <meta
          property="og:image"
          content="https://amplify-venu20-dev-131644-deployment.s3.amazonaws.com/profile-2.jpg"
        />
        <meta property="og:url" content="https://www.patrickcpoole.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <Header socials={socials} />
      <main>
        <section id="hero" data-testid="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        <section
          id="about"
          data-testid="about"
          className="snap-center md:pb-0 "
        >
          <About pageInfo={pageInfo} />
        </section>

        <section
          id="experience"
          data-testid="experience"
          className="snap-start md:snap-always  pt-8 xl:pt-0 md:pb-[5dvh] lg:pb-0"
        >
          <WorkExperience experience={experience} />
        </section>

        <section
          id="projects"
          data-testid="projects"
          className="snap-start  pt-[5dvh] md:pt-0 pb-[5dvh] lg:pb-0"
        >
          <Projects projects={projects} />
        </section>

        <section
          id="skills"
          data-testid="skills"
          className="snap-start pt-8 xl:pt-0 pb-[5dvh] md:pb-[10dvh] lg:pb-0"
        >
          <Skills skills={skills} />
        </section>

        <section
          id="contact"
          data-testid="contact"
          className="snap-start pb-[10dvh] pt-[5dvh] md:pt-0 md:pb-0"
        >
          <Contact pageInfo={pageInfo} />
        </section>
      </main>
      <Link href="#hero" legacyBehavior>
        <footer className="hidden sticky md:block bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon
              className="h-8 w-8 md:h-6 md:w-6"
              style={{ color: "#169137" }}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
// deploying
export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills();
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials,
    },

    revalidate: 10,
  };
};
