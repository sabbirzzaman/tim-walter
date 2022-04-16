import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    return (
        <>
            <TitleBanner title="Login"></TitleBanner>

            <div className="form-container">
                <div className="form-heading">
                    <h2>Login to your account</h2>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="field-group">
                        <label htmlFor="email">Email</label>
                        <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            id="email"
                            required
                        />
                    </div>

                    <div className="field-group">
                        <label htmlFor="password">Password</label>
                        <input
                            ref={passwordRef}
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            id="password"
                            required
                        />
                    </div>

                    <div className="field-group">
                        <input type="submit" value="Login" />
                    </div>

                    <div className="field-group">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/signup">Create an account.</Link>
                        </p>
                    </div>
                </form>

                <div className="divider">
                    <hr />
                    <span>Or</span>
                    <hr />
                </div>

                <div className="form-google">
                    <button>Continue with Google</button>
                </div>

                <div className="form-facebook">
                    <button>Continue with Facebook</button>
                </div>
            </div>
        </>
    );
};

export default Login;
