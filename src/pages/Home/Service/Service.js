import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { image, title, price, details } = service;
    return (
        <div className="service-item">
            <img src={image} alt={title} />

            <div className="service-details">
                <h4>{title}</h4>
                <h3>{price}</h3>
                <p>{details}</p>
                <Link to="/">
                    <span>Add to cart</span>
                    <FontAwesomeIcon
                        icon={faArrowAltCircleRight}
                    ></FontAwesomeIcon>
                </Link>
            </div>
        </div>
    );
};

export default Service;
