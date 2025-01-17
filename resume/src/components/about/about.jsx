import React from 'react'

import styles from "./about.module.css"
import AboutImage from "../../assets/about/aboutimage.png"
import CursorIcon from "../../assets/about/cursoricon.png"
import ServerIcon from "../../assets/about/servericon.png"
import HeartIcon from "../../assets/about/heart.png"

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <div className={styles.content}>
            <img src={AboutImage} alt="About Image" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={CursorIcon} alt="Cursor Icon" className={styles.aboutImages} />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a Frontend Developer with experience in building stylish and responsive websites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={ServerIcon} alt="Server Icon" className={styles.aboutImages} />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimised websites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={HeartIcon} alt="Heart Icon" className={styles.aboutImages} />
                    <div className={styles.aboutItemText}>
                        <h3>Customer Focused</h3>
                        <p>With over 20 years experience in a customer focused role, you will always be at the heart of everything I do</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
