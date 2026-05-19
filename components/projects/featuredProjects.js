import classes from './featuredProjects.module.scss';
import { useEffect, useState } from 'react';
import FeaturedProjectItem from './featuredProjectItem';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Animations
import Aos from 'aos';
import 'aos/dist/aos.css';

const FeaturedProjects = (props) => {
  const { featuredProjects } = props;
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 500 });
    if (featuredProjects && featuredProjects.length > 0) {
      setActiveId(featuredProjects[0]._id);
    }
  }, [featuredProjects]);

  return (
    <section className={classes.projects} id='projects'>
      <div className={classes.container}>
        <div className={classes.headerArea}>
          <h2 data-aos='slide-right' className={classes.neonTitle}>Selected Work</h2>
          <p data-aos='fade-up' className={classes.subtitle}>Hover to explore my featured projects.</p>
        </div>
        
          <Swiper
            grabCursor={true}
            spaceBetween={40}
            slidesPerView={1}
            loop={false}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            keyboard={{ enabled: true }}
            modules={[Pagination, Navigation, Keyboard, Autoplay]}
            className="featuredSwiper"
            style={{ padding: '20px 10px 60px 10px' }}
          >
            {featuredProjects.map((project, index) => {
              const bgColors = [
                { bg: '#EAE5F9', accent: '#3b3164', darkBg: '#1C1929', darkAccent: '#A78BFA' },
                { bg: '#E0F2FE', accent: '#0369A1', darkBg: '#111A29', darkAccent: '#38BDF8' },
                { bg: '#FEF08A', accent: '#854D0E', darkBg: '#2A2411', darkAccent: '#FDE047' },
                { bg: '#dcfce7', accent: '#166534', darkBg: '#12251A', darkAccent: '#4ADE80' },
                { bg: '#ffedd5', accent: '#9a3412', darkBg: '#2B1A13', darkAccent: '#FB923C' }
              ];
              const theme = bgColors[index % bgColors.length];
              
              return (
                <SwiperSlide key={project._id}>
                  <FeaturedProjectItem 
                    project={project} 
                    theme={theme}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

        <div data-aos='fade-up' className={classes.buttonWrapper}>
          <Link legacyBehavior href='/projects/'>
            <a className={classes.neonButton}>
              Explore More Projects
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
