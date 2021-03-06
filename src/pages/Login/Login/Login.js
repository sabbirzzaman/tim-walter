import React, { useEffect, useRef } from 'react';
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../Common/SocialLogin/SocialLogin';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const location = useLocation();
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, , error] =
        useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    const handlePasswordReset = async () => {
        const email = emailRef.current.value;

        if (!email) {
            toast.error('Please provide your email.');
            return;
        }

        await sendPasswordResetEmail(email);
        toast.success('Sent email for password reset.');
    };

    const from = location.state?.form?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    if (error?.message === 'Firebase: Error (auth/user-not-found).') {
        toast.error('User account not founded.', {
            toastId: 'error412',
        });
    }

    if (error?.message === 'Firebase: Error (auth/wrong-password).') {
        toast.error('Wrong Password', {
            toastId: 'error122',
        });
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
                </form>

                <div className="forget-password">
                    <button onClick={handlePasswordReset}>
                        <span>Forget Password?</span>
                        <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                        ></FontAwesomeIcon>
                    </button>
                </div>

                <div className="field-group">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/signup">Create an account.</Link>
                    </p>
                </div>

                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </>
    );
};

export default Login;
