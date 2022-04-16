import React from 'react';
import './Banner.css';

const Banner = () => {
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
                    <button>My Services</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
