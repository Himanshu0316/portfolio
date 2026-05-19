import classes from "./about.module.scss";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import myPic from "../../public/images/myimg.png";
import "aos/dist/aos.css";
import ImgLoader from "../../util/imageLoader";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.about} id="about">
      <div className={classes.container}>
        <h2 data-aos="slide-right" style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>About me</h2>

        <div className={classes.row}>
          <div className={classes.columnLeft} data-aos="fade-right">
            <h3>
            Hello !
            </h3>
            <p>
            MERN Stack Developer trained at Masai School, currently working as a Junior React.js Developer at PMIT Solutions. Experienced in building responsive web applications using React, Redux, and modern UI frameworks. Passionate about clean code, teamwork, and continuous learning.
            </p>
            <p>
            I completed my B.Tech in Automobile Engineering from KIIT University (2014-2018) with a GPA of 7.0/10. Later, I pursued my passion for software by completing an intensive MERN Stack Development Program at Masai School, Bangalore (2021-2022). 
            </p>
          </div>

          <div className={classes.columnRight}>
            <div className={classes.imageContainer}>
              <div className={classes.imageWrapper} data-aos="fade-left">
                <Image
                  src={myPic}
                  width={350}
                  height={500}
                  loader={ImgLoader}
                  alt="profile-pic"
                  className={classes.roundedImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.contact}>
        <div>
        <div><i className="fa-solid fa-envelope"></i><p>hsupadhyay316@gmail.com</p></div>
        <div><i className="fa-solid fa-phone"></i><p>8209797067</p></div>
        <div><i className="fa-solid fa-location-dot"></i><p>Hanumangrh,Rajasthan</p></div>
        </div>
      </div>
    </section>
  );
};
export default About;
