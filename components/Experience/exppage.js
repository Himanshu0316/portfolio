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
        <h2 data-aos='slide-right'>Github Calendar</h2>
        <div className={classes.galleryWrap}>
          <GitHubCalendar username="himanshu0316" />
        </div>
      </div>
    </section>
  );
};
export default Experience;
