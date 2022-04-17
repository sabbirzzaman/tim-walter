import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.svg';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

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
                <div className="navigation">
                    <CustomLink to="/home">Home</CustomLink>
                    <CustomLink to="/about">About Me</CustomLink>
                    <CustomLink to="/services">My Services</CustomLink>
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
