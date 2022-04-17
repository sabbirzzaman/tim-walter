import React from 'react';
import TitleBanner from '../Common/TitleBanner/TitleBanner';
import './NotFounded.css';

const NotFounded = () => {
    return (
        <>
            <TitleBanner title="Page Not Founded"></TitleBanner>

            <div className="not-founded">
                <div className="container">
                    <h2>404</h2>
                    <h3>Opps! Page not founded</h3>
                </div>
            </div>
        </>
    );
};

export default NotFounded;
