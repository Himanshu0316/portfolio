import classes from './experience.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper';

const Experience = () => {

  const EXP_COLORS = [
    {
      accent: '#FF3366', // Vibrant Pink
      lightBg: 'linear-gradient(135deg, #FFF0F3 0%, #FFE6EA 100%)',
      lightBorder: '#FFB3C6',
      darkBg: 'rgba(255, 51, 102, 0.04)',
      darkBorder: 'rgba(255, 51, 102, 0.3)'
    },
    {
      accent: '#00E5FF', // Cyan
      lightBg: 'linear-gradient(135deg, #E0FFFF 0%, #CCFBFB 100%)',
      lightBorder: '#99F6F6',
      darkBg: 'rgba(0, 229, 255, 0.04)',
      darkBorder: 'rgba(0, 229, 255, 0.3)'
    },
    {
      accent: '#B026FF', // Purple
      lightBg: 'linear-gradient(135deg, #F5E6FF 0%, #EBD4FF 100%)',
      lightBorder: '#D6A8FF',
      darkBg: 'rgba(176, 38, 255, 0.04)',
      darkBorder: 'rgba(176, 38, 255, 0.3)'
    }
  ];

  const experiences = [
    {
      id: 1,
      role: 'React.js Developer',
      company: 'PMIT Solutions',
      duration: '2023 - Present',
      details: [
        'Designed and developed scalable admin panels and gaming dashboards with real-time features using Socket.IO, TypeScript, and React, focusing on performance and maintainability.',
        'Implemented complex frontend logic, API integrations, and state management using Redux and TanStack Query across multiple production applications.',
        'Built responsive and modern UIs using MUI, Tailwind CSS, and Chakra UI.',
      ]
    },
    {
      id: 2,
      role: 'Internship',
      company: 'Aimed labs',
      duration: '2023',
      details: [
        'Working on Aimedlabs.com website using HTML, SCSS, and Hugo theme.',
        'Assisted in transforming Figma layouts into pixel-perfect frontend code components.',
      ]
    },
    {
      id: 3,
      role: 'Mern Stack Developer',
      company: 'Masai School',
      duration: '2021 - 2022 (9-9-6)',
      details: [
    <>Completed an intensive 9-9-6 military-style MERN Stack <strong>training</strong> program focused on real-world development.</>,
    "Built 10+ full-stack projects using MongoDB, Express.js, React.js, and Node.js from scratch.",
    <>Solved Approx <strong>150+ DSA problems</strong> covering arrays, linked lists, trees, graphs, and dynamic programming.</>,
    "Secured 1st Place in the Final Project Showcase among 200+ developers.",
    "Collaborated in agile teams, performed code reviews, and shipped production-ready applications."
  ]
    }
  ];

  return (
    <section className={classes.experienceSection} id='experience'>
      <div className={classes.neonBgWrap}></div>
      <div className={classes.container}>
        <h2 data-aos='slide-right' className={classes.neonHeading}>Experience & Journey</h2>
        <div data-aos='zoom-in' className={classes.sliderContainer}>
          <Swiper
            grabCursor={true}
            spaceBetween={30}
            loop={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            modules={[Pagination, Navigation, Keyboard, Autoplay]}
            className="experienceSwiper"
          >
            {experiences.map((exp, index) => {
              const themeColors = EXP_COLORS[index % EXP_COLORS.length];
              return (
                <SwiperSlide 
                  key={exp.id} 
                  className={classes.swiperSlideCustom}
                  style={{
                    '--card-accent': themeColors.accent,
                    '--light-bg': themeColors.lightBg,
                    '--light-border': themeColors.lightBorder,
                    '--dark-bg': themeColors.darkBg,
                    '--dark-border': themeColors.darkBorder,
                  }}
                >
                  <div className={classes.timelineContent}>
                  <div className={classes.timelineHeader}>
                    <h3>{exp.role}</h3>
                    <span className={classes.timelineDate}>{exp.duration}</span>
                  </div>
                  <h4>{exp.company}</h4>
                  <ul>
                    {exp.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Experience;
