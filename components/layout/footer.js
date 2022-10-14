import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span>Don&apos;t be a stranger.!</span>
      <p>Let&apos;s connect..!</p>
      <div className={classes.socialMedia}>
        <a href="https://github.com/Himanshu0316" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/himanshu-40a7b7135"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
                href='mailto:hsupadhyay316@gmail.com'
                target='_blank'
                rel='noreferrer'>
                <i className='fa fa-envelope'></i>
              </a>
      </div>
      <div>© 2022 Designed and Built by Himanshu with 🖤</div>
    </footer>
  );
};
export default Footer;
