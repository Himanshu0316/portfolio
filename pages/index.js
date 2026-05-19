import Head from 'next/head';
import Hero from '../components/home/hero';
import FeaturedProjects from '../components/projects/featuredProjects';
import Experience from '../components/Experience/experience';
import {
  getFeaturedProjects,
  getNonFeaturedProjects,
} from '../util/projects-util';
import { getAllSkills } from '../util/skills-util';
import Skills from '../components/Skills/skillPage';
import Achievements from '../components/Achievements/Achievements';
import Services from '../components/Services/services';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Himanshu | Full Stack Web Developer</title>
        <meta
          name='description'
          content='Full Stack Developer specializing in React, Next.js, Node.js, and MERN stack. View my portfolio and projects.'
        />
      </Head>
      <Hero />
      <Experience />
      <Services />
      <FeaturedProjects featuredProjects={props.featuredProjects} />
      <Skills skills={props.skills} />
      <Achievements />
    </>
  );
}

export const getStaticProps = () => {
  const skills = getAllSkills();
  const featuredProjects = getFeaturedProjects();
  const nonFeaturedProjects = getNonFeaturedProjects();

  return {
    props: {
      skills: skills,
      featuredProjects: featuredProjects,
      nonFeaturedProjects: nonFeaturedProjects,
    },
  };
};
