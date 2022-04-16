import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import Loading from '../../Common/Loading/Loading';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPassRef = useRef('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);
    
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <>
            <TitleBanner title="Sign Up"></TitleBanner>

            <div className="form-container">
                <div className="form-heading">
                    <h2>Create your account</h2>
                </div>
                <form onSubmit={handleSignUp}>
                    <div className="field-group">
                        <label htmlFor="name">Name</label>
                        <input
                            ref={nameRef}
                            type="name"
                            name="name"
                            placeholder="Enter your name"
                            id="name"
                            required
                        />
                    </div>

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
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            ref={confirmPassRef}
                            type="password"
                            name="confirm-password"
                            placeholder="Confirm your password"
                            id="confirm-password"
                            required
                        />
                    </div>

                    <div className="field-group">
                        <input type="submit" value="Sign Up" />
                    </div>

                    <div className="field-group">
                        <p>
                            Already have an account?{' '}
                            <Link to="/login">Login</Link>
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

export default SignUp;
