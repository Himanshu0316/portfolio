import classes from './hero.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Modal from '../ui/modal/modal';
import Aos from 'aos';
import profilePic from '../../public/images/profile.jpg';
import 'aos/dist/aos.css';
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

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.greetings}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.columnLeft}>
            <h3 data-aos='fade-left'>Hi, my name is Himanshu.</h3>
            <h1 data-aos='fade-right'>
              I&apos;m a Full stack web Developer.
            </h1>
            <p data-aos='fade-left' data-aos-delay='150'>
            Who focuses on writing clean and user-friendly web-applications
            </p>
            <div className={classes.socialMedia}>
              <a
                href='https://github.com/Himanshu0316'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-github' data-aos='flip-up'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/himanshu-40a7b7135'
                target='_blank'
                rel='noreferrer'>
                <i
                  className='fab fa-linkedin'
                  data-aos='flip-up'
                  data-aos-delay='50'></i>
              </a>{' '}
              <a
                href='mailto:hsupadhyay316@gmail.com'
                target='_blank'
                rel='noreferrer'>
                <i className='fa fa-envelope'></i>
              </a>
            </div>
            <div className={classes.ctaButtons}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='btn btn-filled'
                onClick={buttonHandler}>
                My Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='btn btn-outlined'
                onClick={showModalHandler}>
                Let&apos;s Talk
              </motion.button>
            </div>
          </div>

          <div className={`${classes.columnRight} ${classes.profilePic}`}>
            <Image
              src={profilePic}
              width={460}
              height={460}
              alt='profile-pic'
              data-aos='fade-left'
            />
          </div>
        </div>
        <div className='iconScrollContainer'>
          <a href='#projects'>
            <div
              className='iconScroll'
              data-aos='fade-down'
              data-aos-offset='50'></div>
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
