import { faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Award.css'

const Award = ({award}) => {
    const {name, details} = award;

    return (
        <div className='award-item'>
            <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
            <h3>{name}</h3>
            <p>{details}</p>
        </div>
    );
};

export default Award;