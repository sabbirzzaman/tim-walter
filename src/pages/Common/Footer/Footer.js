import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer-container">
            <div className="container">
                <div className="footer-logo">
                    <img src={logo} alt="Footer logo" />
                </div>

                <div className="footer-details">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. In, officiis ipsa ipsam soluta beatae provident
                        rerum molestias quibusdam velit quaerat.
                    </p>
                </div>

                <div className="footer-link">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/login">Login</Link>
                </div>

                <div className="footer-copyright">
                    <p>Copyright &copy; {year} Tim Walter</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
