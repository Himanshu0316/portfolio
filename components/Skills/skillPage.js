import classes from './skillPage.module.scss';
import SkillBox from './skillbox';

const Skills = (props) => {
  const { skills } = props;
  
  return (
    <section className={`${classes.skill} mvh-100`} id='skills' style={{backgroundImage: "var(--skills-bg)", backgroundSize: 'cover'}}>
      <div className={classes.container}>
        <h2 data-aos='slide-right'>Skills & Tools</h2>
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
