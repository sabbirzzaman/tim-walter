import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="banner-container">
            <div className="overlay">
                <div className="container">
                    <h1>
                        First-class lawyer and <br />
                        consultant in USA.
                    </h1>
                    <p>
                        I use innovative approaches to solve the <br />
                        toughest challenges for businesses.
                    </p>
                    <button onClick={() => navigate('/services')}>
                        My Services
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
