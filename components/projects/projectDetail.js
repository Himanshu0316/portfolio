import Image from "next/image";
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

  return (
    <div className={classes.projectDetail}>
      <div className="container section mvh-100 projectDetail">
        <h1>{project.title}</h1>

        <div>
          <small>
            {Array.isArray(project.tech)
              ? project.tech.join(", ")
              : project.tech}
          </small>
          <p>{project.description}</p>
        </div>

        <div className={classes.projectLinks}>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
              Github
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer">
              <i className="fas fa-link"></i>
              Website
            </a>
          )}
        </div>
<br/>
        {project.screenshots ? (
          <div>
            <h2>Screenshots & description</h2>
            <Swiper
              rewind={false}
              modules={[Pagination, Navigation]}
              navigation={true}
              className="mySwiper"
            >
              {project.screenshots.map((screenshot, index) => (
                <SwiperSlide key={index}>
                  <>
                    <Image
                      src={`/images/projects/${screenshot.screenshot}`}
                      loader={ImgLoader}
                      height={600}
                      width={1060}
                      alt={screenshot.description}
                    />
                    <div>{screenshot.description}</div>
                  </>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          project.image && (
            
            <div className={classes.projectImage}>
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
