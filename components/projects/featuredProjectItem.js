import classes from "./featuredProjectItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import ImgLoader from "../../util/imageLoader";

const FeaturedProjectItem = ({ project, theme }) => {
  return (
    <div 
      className={classes.projectCard}
      style={{
        '--slide-bg': theme?.bg || '#EAE5F9',
        '--slide-accent': theme?.accent || '#3b3164',
        '--dark-bg': theme?.darkBg || '#1C1929',
        '--dark-accent': theme?.darkAccent || '#A78BFA'
      }}
    >
      <div className={classes.circleTopLeft}></div>
      <div className={classes.circleBottomLeft}></div>

      <div className={classes.cardContent}>
        
        <div className={classes.leftSide}>
          <h2 className={classes.title}>{project.title}</h2>
          
          <div className={classes.techStack}>
            {Array.isArray(project.tech)
              ? project.tech.map((t, i) => <span key={i} className={classes.techTag}>{t}</span>)
              : <span className={classes.techTag}>{project.tech}</span>}
          </div>

          <p className={classes.description}>{project.description}</p>
          
          <div className={classes.actionArea}>
            <Link legacyBehavior href={`/projects/${project._id}`}>
              <a className={classes.viewProjectBtn}>
                View project <span className={classes.arrow}>→</span>
              </a>
            </Link>
            
            <div className={classes.socialLinks}>
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className={classes.iconLink}>
                  <i className="fab fa-github"></i>
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className={classes.iconLink}>
                  <i className="fas fa-link"></i>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className={classes.rightSide}>
          <div className={classes.imageWrapper}>
            <Image 
              src={`/images/projects/${project.image}`}
              loader={ImgLoader}
              layout="fill"
              objectFit="fill"
              objectPosition="top center"
              alt={project.title}
              className={classes.projectImg}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedProjectItem;
