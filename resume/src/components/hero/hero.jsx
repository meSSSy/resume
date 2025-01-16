import React from 'react';

import styles from "./hero.module.css";
import ChrisImage from "../../assets/hero/Chris.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, thank you for viewing my Portfolio, I'm Chris!</h1>
            <p className={styles.description}>
                I'm a Full Stack Software Developer proficient in a number of programming languages. I also have over 20 years 
                experience in Senior Leadership roles and I hope to transfer my knowledge and expertise into the Tech industry.
                Please reach out and we'll work together on your next project.
            </p>
            <a href="mailto:chrisparry07@live.co.uk" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={ChrisImage} alt="Image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
    
    




