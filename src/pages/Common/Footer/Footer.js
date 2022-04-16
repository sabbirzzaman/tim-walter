import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.svg';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    const [user, loading] = useAuthState(auth);

    if (!loading) {
        return (
            <div className="footer-container">
                <div className="container">
                    <div className="footer-logo">
                        <img src={logo} alt="Footer logo" />
                    </div>

                    <div className="footer-details">
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. In, officiis ipsa ipsam soluta beatae
                            provident rerum molestias quibusdam velit quaerat.
                        </p>
                    </div>

                    <div className="footer-link">
                        {!user ? <Link to="/login">Login</Link> : ''}
                        <Link to="/home">Home</Link>
                        <Link to="/about">About Me</Link>
                    </div>

                    <div className="footer-copyright">
                        <p>Copyright &copy; {year} Tim Walter</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Footer;
