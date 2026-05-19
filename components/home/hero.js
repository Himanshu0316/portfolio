import classes from './hero.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Modal from '../ui/modal/modal';
import myPic from '../../public/images/myimg.png';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [showModal, setShowModal] = useState();

  function buttonHandler() {
    window.location.href = '#projects';
  }

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  useEffect(() => {
    if (showModal) document.body.style.overflow = 'hidden';
    if (!showModal) document.body.style.overflow = 'unset';
  }, [showModal]);


  return (
    <section className={classes.greetings} id="hero-about">
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.columnLeft}>
            <h3 data-aos='fade-left'>Hi, my name is Himanshu.</h3>
            <h1 data-aos='fade-right' className={classes.headline}>
              I&apos;m a Full Stack Web Developer.
            </h1>
            
            <div data-aos='fade-up' data-aos-delay='150' className={classes.bioSection}>
              <p>
                MERN Stack Developer trained at Masai School, currently working as a Junior React.js Developer at PMIT Solutions. Experienced in building responsive web applications using React, Redux, and modern UI frameworks. Passionate about clean code, teamwork, and continuous learning.
              </p>
              <p>
                I completed my B.Tech in Automobile Engineering from KIIT University (2014-2018) with a GPA of 7.0/10. Later, I pursued my passion for software by completing an intensive MERN Stack Development Program at Masai School, Bangalore (2021-2022).
              </p>
            </div>

            <div className={classes.contactInfo} data-aos='fade-up' data-aos-delay='200'>
              <div className={classes.contactItem}>
                <i className="fa-solid fa-envelope"></i>
                <a href='mailto:hsupadhyay316@gmail.com' target='_blank' rel='noreferrer'>hsupadhyay316@gmail.com</a>
              </div>
              <div className={classes.contactItem} onClick={()=>window.open('tel:+918209797067')}>
                <i className="fa-solid fa-phone"></i>
                <span>8209797067</span>
              </div>
              <div className={classes.contactItem}>
                <i className="fa-solid fa-location-dot"></i>
                <span>Hanumangarh, Rajasthan</span>
              </div>
            </div>

            <div className={classes.socialMedia}>
              <a href='https://github.com/Himanshu0316' target='_blank' rel='noreferrer'>
                <i className='fab fa-github' data-aos='flip-up' data-aos-delay='250'></i>
              </a>
              <a href='https://www.linkedin.com/in/himanshu-40a7b7135' target='_blank' rel='noreferrer'>
                <i className='fab fa-linkedin' data-aos='flip-up' data-aos-delay='300'></i>
              </a>
            </div>

            <div className={classes.ctaButtons}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${classes.neonBtn} btn-filled`}
                onClick={buttonHandler}>
                My Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${classes.neonBtnOutlined} btn-outlined`}
                onClick={showModalHandler}>
                Let&apos;s Talk
              </motion.button>
            </div>
          </div>

          <div className={`${classes.columnRight} ${classes.profilePicContainer}`}>
            <div className={classes.neonSquareFrame} data-aos='zoom-in'>
              <Image
                src={myPic}
                layout="fill"
                objectFit="cover"
                alt='Himanshu - Profile'
                className={classes.squareImage}
              />
              <div className={classes.neonGlow}></div>
            </div>
          </div>
        </div>
        
        <div className={classes.iconScrollContainer}>
          <a href='#projects'>
            <div className={classes.iconScroll} data-aos='fade-down' data-aos-offset='50'></div>
          </a>
        </div>
      </div>
      
      <AnimatePresence>
        {showModal && <Modal contact onClose={closeModalHandler} />}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
