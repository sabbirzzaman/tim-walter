import {
    faBalanceScale,
    faBriefcase,
    faHammer,
    faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Experience from '../Experience/Experience';
import './Experiences.css';

const Experiences = () => {
    const experiences = [
        {
            id: 1,
            icon: faBalanceScale,
            time: '50+',
            name: 'Cases Solved',
        },
        {
            id: 2,
            icon: faHammer,
            time: '60+',
            name: 'Happy Clients',
        },
        {
            id: 3,
            icon: faBriefcase,
            time: '20+',
            name: 'Experience',
        },
        {
            id: 4,
            icon: faSuitcase,
            time: '20+',
            name: 'Legal Associates',
        },
    ];
    
    return (
        <div className="experience-container">
            <div className="container">
                {experiences.map((experience) => (
                    <Experience
                        key={experience.id}
                        experience={experience}
                    ></Experience>
                ))}
            </div>
        </div>
    );
};

export default Experiences;
