import React from 'react';

import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        {
          skills.map((skill, id) => {
            return <div key={id}>
              <div>
              <img src={getImageUrl(skill.imgSrc)} alt={skill.title} />
              </div>
            </div>
          })
        }
      </div>
    </section>
  )
}
