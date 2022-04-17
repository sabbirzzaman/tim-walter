import React from 'react';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import image from '../../../images/me.jpg';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <>
            <TitleBanner title="About Me"></TitleBanner>
            <div className="about-container">
                <div className="container">
                    <div className="about">
                        <h2>Something About Me</h2>
                        <p>
                            <span>Hi, This is Sabbir Zzaman.</span> I'm a
                            Frontend Developer and a passionate learner. I love
                            to explore new technologies and work with them. I'm
                            trying to make myself more efficient. Currently I'm
                            learning Node.js and Express.js. I want to see
                            myself as a full-stack developer in the future.
                        </p>

                        <div className="my-aim">
                            <div>
                                <h3>My Goal</h3>
                                <p>
                                    My goal is to be a professional developer. I
                                    will work as a Front-end developer. But I
                                    don't want to stop here. I will build myself
                                    as a full-stack web developer. And I will
                                    work with dedication.
                                </p>
                            </div>
                            <div>
                                <h3>My Promises</h3>
                                <p>
                                    I will work hard since I achieve my target.
                                    And I will work with full dedication. I love
                                    to work with technologies. And I'm
                                    passionate about it. And I will work daily
                                    to create a better version of myself.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
