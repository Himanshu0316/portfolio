import classes from './services.module.scss';

const Services = () => {

  const services = [
    {
      title: 'Frameworks & Libraries',
      icon: 'fa-solid fa-layer-group',
      description: 'Building modern web apps with component-based architecture and server-side rendering.',
      tags: ['React.js', 'Next.js'],
      color: 'rgba(74, 144, 226, 0.1)',
      iconColor: '#4a90e2'
    },
    {
      title: 'Languages',
      icon: 'fa-solid fa-pen-nib',
      description: 'Writing clean, maintainable code with modern JavaScript standards and type safety.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
      color: 'rgba(123, 97, 255, 0.1)',
      iconColor: '#7b61ff'
    },
    {
      title: 'Styling & UI',
      icon: 'fa-solid fa-globe',
      description: 'Crafting responsive, pixel-perfect interfaces with modern CSS tools and animation.',
      tags: ['Tailwind CSS', 'SCSS', 'Material UI', 'Framer Motion'],
      color: 'rgba(52, 199, 89, 0.1)',
      iconColor: '#34c759'
    },
    {
      title: 'State Management',
      icon: 'fa-solid fa-database',
      description: 'Managing complex application state with scalable, predictable patterns.',
      tags: ['Redux', 'Zustand', 'Context API', 'TanStack Query'],
      color: 'rgba(88, 86, 214, 0.1)',
      iconColor: '#5856d6'
    },
    {
      title: 'Performance & SEO',
      icon: 'fa-solid fa-chart-simple',
      description: 'Optimising load times, improving Core Web Vitals, and ensuring mobile-first delivery.',
      tags: ['Lazy Loading', 'Code Splitting', 'Core Web Vitals'],
      color: 'rgba(255, 149, 0, 0.1)',
      iconColor: '#ff9500'
    },
    {
      title: 'Tools & Integrations',
      icon: 'fa-solid fa-code',
      description: 'Efficient dev workflows, API consumption, and collaboration with design and backend teams.',
      tags: ['Git', 'REST API', 'Figma', 'Vite','MinIO/S3','Postman','emailJs'],
      color: 'rgba(255, 59, 48, 0.1)',
      iconColor: '#ff3b30'
    }
  ];

  return (
    <section className={`${classes.servicesSection} mvh-100`} id="services" style={{backgroundImage:"var(--service-bg)",backgroundSize:'cover'}}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h2 data-aos="fade-down" className={classes.title}>Core Expertise</h2>
          <p data-aos="fade-up" className={classes.subtitle}>Transforming ideas into high-quality digital solutions</p>
        </div>
        <div className={classes.grid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={classes.serviceCard} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className={classes.iconBox} style={{ backgroundColor: service.color, color: service.iconColor }}>
                <i className={service.icon}></i>
              </div>
              <h3 className={classes.cardTitle}>{service.title}</h3>
              <p className={classes.cardDescription}>{service.description}</p>
              <div className={classes.tagCloud}>
                {service.tags.map((tag, i) => (
                  <span key={i} className={classes.tag} style={{ 
                    borderColor: `${service.iconColor}44`, 
                    color: service.iconColor,
                    backgroundColor: `${service.iconColor}08`
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
