import Image from "next/image";
import Link from "next/link";
import classes from "./projectDetail.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImgLoader from "../../util/imageLoader";

const ProjectDetail = (props) => {
  const { project } = props;

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const techArray = Array.isArray(project.tech)
    ? project.tech
    : project.tech
    ? project.tech.split(", ")
    : [];

  return (
    <div className={classes.projectDetail}>
      {/* Decorative orbs */}
      <div className={`${classes.accentOrb} ${classes.orbTopRight}`}></div>
      <div className={`${classes.accentOrb} ${classes.orbBottomLeft}`}></div>

      <div className="container">
        {/* Back navigation */}
       
          <Link href="/projects" className={classes.backLink}>
            <i className="fas fa-arrow-left"></i>
            Back to Projects
        </Link>
        

        {/* Hero header */}
        <div className={`${classes.heroHeader} ${classes.fadeIn}`}>
          <div className={classes.titleRow}>
            <div className={classes.titleBlock}>
              <h1>{project.title}</h1>
              <div className={classes.projectMeta}>
                <span className={classes.statusBadge}>
                  <span className={classes.dot}></span>
                  {project.liveLink ? "Live" : "Completed"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack */}
        {techArray.length > 0 && (
          <div className={`${classes.techStack} ${classes.fadeInDelay1}`}>
            {techArray.map((tech, index) => (
              <span key={index} className={classes.techTag}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Description card */}
        <div className={`${classes.descriptionCard} ${classes.fadeInDelay2}`}>
          <div className={classes.descriptionLabel}>
            <i className="fas fa-info-circle"></i>
            About this project
          </div>
          <p>{project.description}</p>
        </div>

        {/* Action links */}
        <div className={`${classes.projectLinks} ${classes.fadeInDelay3}`}>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className={classes.primaryLink}
            >
              <i className="fas fa-external-link-alt"></i>
              Visit Live Site
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className={classes.secondaryLink}
            >
              <i className="fab fa-github"></i>
              View Source Code
            </a>
          )}
        </div>

        {/* Screenshots gallery */}
        {project.screenshots ? (
          <div
            className={`${classes.screenshotsSection} ${classes.fadeInDelay4}`}
          >
            <div className={classes.sectionHeader}>
              <div className={classes.sectionIcon}>
                <i className="fas fa-images"></i>
              </div>
              <h2 className={classes.sectionTitle}>Project Gallery</h2>
            </div>

            <Swiper
              rewind={false}
              modules={[Pagination, Navigation]}
              navigation={true}
              pagination={pagination}
              className="mySwiper"
            >
              {project.screenshots.map((screenshot, index) => (
                <SwiperSlide key={index}>
                  <div className={classes.screenshotSlide}>
                    <div className={classes.imageContainer}>
                      <Image
                        src={`/images/projects/${screenshot.screenshot}`}
                        loader={ImgLoader}
                        height={600}
                        width={1060}
                        alt={screenshot.description}
                      />
                    </div>
                    <div className={classes.slideCaption}>
                      <span className={classes.captionDot}></span>
                      <span>{screenshot.description}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          project.image && (
            <div className={`${classes.projectImage} ${classes.fadeInDelay4}`}>
              <Image
                src={`/images/projects/${project.image}`}
                loader={ImgLoader}
                height={600}
                width={1060}
                alt={project.description}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default ProjectDetail;
