import classes from './Achievements.module.scss';
import { useEffect } from 'react';

import { motion } from 'framer-motion';

const Achievements = () => {
  useEffect(() => {
    // Other effects if any
  }, []);

  const achievements = [
    {
      title: 'Full Stack Development',
      subtitle: 'Certification',
      description: 'Comprehensive MERN Stack certification from Masai School. Mastered modern web development from database design to frontend deployment.',
      icon: 'fa-solid fa-certificate',
      stat: 'MERN',
      color: '#6366f1'
    },
    {
      title: '1st Place Winner',
      subtitle: 'Masai Project Showcase',
      description: 'Ranked #1 among 200+ developers in the final project showcase. Recognized for architectural excellence and user-centric design.',
      icon: 'fa-solid fa-trophy',
      stat: '#1',
      color: '#fbbf24'
    },
    {
      title: 'System Architecture',
      subtitle: 'Technical Strength',
      description: 'Designing scalable frontend systems with Next.js, optimized data fetching, and efficient global state management.',
      icon: 'fa-solid fa-microchip',
      stat: '98%',
      color: '#10b981'
    }
  ];

  return (
    <section className={classes.achievementsSection} id='achievements'>
      <div className={classes.backgroundDecor}>
        <div className={classes.glowOrb1}></div>
        <div className={classes.glowOrb2}></div>
      </div>
      
      <div className={classes.container}>
        <div className={classes.header}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={classes.badge}
          >
            Milestones
          </motion.div>
          <h2 data-aos='fade-up' data-aos-delay='100'>
            Leveling Up <span>Skills & Honors</span>
          </h2>
          <p data-aos='fade-up' data-aos-delay='200'>
            A track record of excellence in software engineering, focused on delivering high-impact solutions.
          </p>
        </div>
        
        <div className={classes.grid}>
          {achievements.map((item, index) => (
            <motion.div 
              key={index} 
              className={classes.card} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ '--accent-color': item.color }}
            >
              <div className={classes.cardHeader}>
                <div className={classes.iconBox} style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  <i className={item.icon}></i>
                </div>
                <div className={classes.statBox}>{item.stat}</div>
              </div>
              
              <div className={classes.content}>
                <span className={classes.subtitle} style={{ color: item.color }}>{item.subtitle}</span>
                <h3 className={classes.title}>{item.title}</h3>
                <p className={classes.description}>{item.description}</p>
              </div>
              
              <div className={classes.cardDecoration} style={{ background: `radial-gradient(circle, ${item.color}, transparent)` }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
