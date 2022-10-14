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
        <h2 data-aos="slide-right">About me</h2>

        <div className={classes.row}>
          <div className={classes.columnLeft} data-aos="fade-right">
            <h3>
            Hello !
            </h3>
            <p>
            My name is Himanshu.I am 26 years old.I am from Rajasthan. I completed my B.Tech in Automobile trade from KIIT University,Bhubaneswar. Currently I am pursuing a Full Stack Web Development course from MASAI School. My hobbies are cooking and watching movies.
            </p>
            <p>
            I'm an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developert.
            </p>
            
          </div>

          <div className={classes.columnRight}>
            <div className={classes.imageContainer}>
              <Image
                src={myPic}
                width={350}
                height={550}
                loader={ImgLoader}
                alt="profile-pic"
                data-aos="fade-left"
              />
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
