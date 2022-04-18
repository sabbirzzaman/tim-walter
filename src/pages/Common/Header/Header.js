import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.svg';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const [open, setOpen] = useState(false);

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? '#cba557' : '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

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
                <div className={!open ? 'navigation' : 'navigation mobile-nav'}>
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to="/about">About Me</CustomLink>
                    <CustomLink to="/services">My Services</CustomLink>
                    <CustomLink to="/blogs">Blogs</CustomLink>
                    <div className={!open? "mobile-nav-btn": 'mobile-nav-btn-show'}>
                        {user ? (
                            <button onClick={() => signOut(auth)}>
                                Sign Out
                            </button>
                        ) : (
                            <button onClick={() => navigate('login')}>
                                Login
                            </button>
                        )}
                    </div>
                </div>
                <div className="header-btn">
                    {user ? (
                        <button onClick={() => signOut(auth)}>Sign Out</button>
                    ) : (
                        <button onClick={() => navigate('login')}>Login</button>
                    )}
                </div>

                <div className="nav-toggle">
                    <FontAwesomeIcon
                        onClick={() => setOpen(!open)}
                        icon={open? faX : faBars}
                    ></FontAwesomeIcon>
                </div>
            </nav>
        </div>
    );
};

export default Header;
