import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading/Loading';
import SocialLogin from '../../Common/SocialLogin/SocialLogin';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const location = useLocation();
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading] =
        useSignInWithEmailAndPassword(auth);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    const from = location.state?.form?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    if (loading) {
        return <Loading></Loading>;
    }

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
                            Don't have an account? <Link to="/signup">Create an account.</Link>
                        </p>
                    </div>
                </form>

                <SocialLogin></SocialLogin>
            </div>
        </>
    );
};

export default Login;
