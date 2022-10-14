import classes from './navbar.module.scss';
import { useState, useEffect } from 'react';
import Modal from '../ui/modal/modal';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
const Navbar = (props) => {
  const [navExpanded, setNavExpanded] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [showModal, setShowModal] = useState();
  const [theme, setTheme] = useState('dark');

  function setThemeHandler() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    props.theme(newTheme);
  }

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  const toggleNav = () => {
    setNavExpanded(!navExpanded);
  };

  const closeNav = () => {
    setNavExpanded(false);
  };

  function fixNavbar() {
    if (window.pageYOffset >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    if (showModal) document.body.style.overflow = 'hidden';
    if (!showModal) document.body.style.overflow = 'unset';
  }, [showModal]);

  useEffect(() => {
    window.onscroll = fixNavbar;
  }, []);

  return (
    <>
      <div id='navbar'
        className={
          sticky ? `${classes.navbar}  ${classes.sticky}` : `${classes.navbar} `
        }>
        <div className={classes.container}>
          <Link href='/'>
            <a className={classes.logo}>Hs</a>
          </Link>

          <nav
            className={
              navExpanded
                ? `${classes.navMenu} ${classes.responsive}`
                : `${classes.navMenu}`
            }
            id='navMenu'>
            <div className={classes.linkWrapper}>
              <Link href='/#projects'>
                <a onClick={closeNav}>Projects</a>
              </Link>

              <Link href='/#skills'>
                <a href='#skills' onClick={closeNav}>
                  Skills
                </a>
              </Link>
              <Link href='/#about'>
                <a onClick={closeNav}>About</a>
              </Link>
              <Link  href='https://drive.google.com/file/d/1loPDHo4VdCuvDA02Q1F8UJPbY8VNuJ8r/view?usp=sharing'>
                <a target='_blank' onClick={closeNav}>Resume</a>
              </Link>
              <a
                href='#!'
                onClick={() => {
                  showModalHandler();
                  closeNav();
                }}>
                <i className='fa fa-envelope'></i>
              </a>           
            </div>
          </nav>
          <a className={classes.themeLogo}
                href='#!'
                onClick={() => {
                  setThemeHandler();
                  closeNav();
                }}>
                {theme === 'light' ? (
                  <i className='fa fa-moon'></i>
                ) : (
                  <i className='fa fa-sun'></i>
                )}
              </a>
          <button className={classes.icon} onClick={toggleNav}>
            <i className='fa fa-bars'></i>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showModal && <Modal contact onClose={closeModalHandler} />}
      </AnimatePresence>
      <main>{props.children}</main>
    </>
  );
};
export default Navbar;
