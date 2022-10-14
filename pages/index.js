import Head from 'next/head';
import Hero from '../components/home/hero';
import FeaturedProjects from '../components/projects/featuredProjects';
import About from '../components/home/about';
import {
  getFeaturedProjects,
  getNonFeaturedProjects,
} from '../util/projects-util';
import { getAllSkills } from '../util/skills-util';
import Skills from '../components/Skills/skillPage';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Himanshu &lt;Web Developer /&gt;</title>
        <meta
          name='description'
          content='My personal web development portfolio including various frontend and fullstack projects. Tech-Stack: React, Next.js, Redux, Typescript, Node.js, Express, MongoDB, Bootstrap.'
        />
      </Head>
      <Hero />
      <FeaturedProjects featuredProjects={props.featuredProjects} />
      <Skills skills={props.skills} />
      <About />
     
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
