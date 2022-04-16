import React from 'react';
import './TitleBanner.css';

const TitleBanner = ({ title }) => {
    return (
        <div className="title-banner">
            <div className="overlay">
                <div className="container">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default TitleBanner;
