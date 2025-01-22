import React from 'react'
import styles from "./contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Please feel free to contact me</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("assets/contact/emailicon.png")} alt="Email Icon" />
                    <a href="mailto:chrisparry07@live.co.uk">Email</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("assets/contact/linkedinicon.png")} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/chris-parry-2a654218b">LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("assets/contact/githubicon.png")} alt="Github Icon" />
                    <a href="https://www.github.com/meSSSy">GitHub</a>
                </li>
            </ul>
        </footer>
      );
    };
