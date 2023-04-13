import classes from './skillPage.module.scss';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import GitHubCalendar from 'react-github-calendar';
import Image from "next/image";
const Experience = (props) => {
  const { exps } = props;
  
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={`${classes.exp} mvh-100`} id='exps'>
      <div className={classes.container}>
        <h2 data-aos='slide-right'>Github Info</h2>
        <div className={classes.galleryWrap} align="center">
          <GitHubCalendar username="himanshu0316" />
          <p align="center" ><img className={classes.gitimage} src="https://github-readme-stats.vercel.app/api/top-langs?username=himanshu0316&show_icons=true&locale=en&layout=compact" alt="himanshu0316" / ></p>

<p align="center" >&nbsp;<img className={classes.gitimage} align="center" src="https://github-readme-stats.vercel.app/api?username=himanshu0316&show_icons=true&locale=en" alt="himanshu0316" / ></p>

<p align="center" ><img className={classes.gitimage} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=himanshu0316&" alt="himanshu0316" / ></p>
        </div>
      </div>
    </section>
  );
};
export default Experience;
