import classes from "./skillBox.module.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import ImgLoader from "../../util/imageLoader";
import Image from "next/image";
const SkillBox = (props) => {
  const { title, logoImg } = props.skill;
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <motion.button
      data-aos="zoom-in-up"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="btn-filled-dark"
    >
      <div className={classes.card}>
      <Image
          src={logoImg}
          data-aos="fade-left"
          loader={ImgLoader}
          alt="logo"
          priority
          width={40}
          height={40}
        />
        <h4 >{title}</h4>
      </div>
    </motion.button>
  );
};
export default SkillBox;
