import classes from './skillPage.module.scss';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SkillBox from './skillbox';

const Skills = (props) => {
  const { skills } = props;
  
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={`${classes.skill} mvh-100`} id='skills'>
      <div className={classes.container}>
        <h2 data-aos='slide-right'>Skills</h2>
        <div className={classes.galleryWrap}>
          <div className={classes.gallery}>
            {skills !== null &&
              skills !== undefined &&
              skills.map((skill,i) => <SkillBox skill={skill} key={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
