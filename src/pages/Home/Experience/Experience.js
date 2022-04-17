import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Experience.css';

const Experience = ({ experience }) => {
    const { icon, time, name } = experience;
    return (
        <div className="experience-item">
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            <h3>{time}</h3>
            <p>{name}</p>
        </div>
    );
};

export default Experience;
