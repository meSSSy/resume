import React from 'react';

import styles from "./projectcard.module.css";

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  console.log("Image URL:", imageSrc); // Debugging: Check if the URL is correct

  return (
    <div className={styles.container}>
      <img 
        src={imageSrc} 
        alt={title} 
        onError={(e) => console.error("Image not found:", e.target.src)} className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>{skill}</li>
        ))}
        </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">Source</a>
      </div>
    </div>
  );
};

