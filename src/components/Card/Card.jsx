import './Card.css';
import React from 'react';

// eslint-disable-next-line
export const ProjectCard = ({ url, title, description, imgUrl }) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className="proj-imgbx">
        <img src={imgUrl} alt='imgbx' />
        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
    </a>
  )
}