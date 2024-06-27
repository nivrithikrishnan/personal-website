import styles from '../styles/socials.module.css';
import React from 'react';

const Socials = () => {
  return (
    <div>
      <nav class={styles.container}>
        <a href="https://read.cv/nivrithikrishnan"><img src="/media/icons/resume.png" alt="Resume" className={styles.icon} /></a>
        <a href="mailto:&#110;&#105;&#118;&#114;&#105;&#116;&#104;&#105;&#046;&#107;&#114;&#105;&#115;&#104;&#110;&#097;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"> <img src="/media/icons/mail.png" alt="Mail" className={styles.icon} /></a>
        <a href="https://www.linkedin.com/in/nivrithi-krishnan/"><img src="/media/icons/linkedin.png" alt="LinkedIn" className={styles.icon} /></a>
        <a href="https://github.com/nivrithikrishnan"><img src="/media/icons/github.png" alt="GitHub" className={styles.icon} /></a>
        {/*<img src="/media/icons/line.png" alt="|" className={styles.line}/>*/}
      {</*a href="https://www.goodreads.com/user/show/113843935-nivrithi-krishnan"><img src="/media/icons/gr.png" alt="Goodreads" className={styles.icon} /></a> */}
      {/*<a href="https://letterboxd.com/nskrishn/"><img src="/media/icons/lb.png" alt="Letterboxd" className={styles.icon} /></a> */}
      </nav>
    </div>
  );
};

export default Socials;
