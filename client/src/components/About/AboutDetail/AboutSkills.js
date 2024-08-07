import React from 'react';
import './AboutSkills.scss';
import data from '../../../data/about-en.json';

function AboutSkills() {
  return (
    <div className='skills__container'>
      {data.skills.map((skill, index) => {
        return (
          <p key={index} className={skill.important ? 'skills__tag--important' : 'skills__tag'}>
            {skill.name}
          </p>
        );
      })}
    </div>
  );
}

export default AboutSkills;
