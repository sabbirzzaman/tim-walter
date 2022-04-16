import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.svg';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const [user, loading] = useAuthState(auth);

    return (
        <div className="header-container">
            <nav className="container">
                <div className="site-logo">
                    <img
                        onClick={() => navigate('/')}
                        src={logo}
                        alt="Site Logo"
                    />
                </div>
                <div className="navigation">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/services">My Services</Link>
                </div>
                <div className="header-btn">
                    {user ? (
                        <button onClick={() => signOut(auth)}>Sign Out</button>
                    ) : (
                        <button onClick={() => navigate('login')}>Login</button>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
