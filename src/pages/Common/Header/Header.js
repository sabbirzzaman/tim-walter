import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../images/logo.svg'
import './Header.css'

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header-container'>
            <nav className="container">
                <div className="site-logo">
                    <img onClick={() => navigate('/')} src={logo} alt="Site Logo" />
                </div>
                <div className="navigation">
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About Me</Link>
                    <Link to='/services'>My Services</Link>
                </div>
                <div className="header-btn">
                    <button>Login</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;