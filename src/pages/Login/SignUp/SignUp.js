import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import Loading from '../../Common/Loading/Loading';
import SocialLogin from '../../Common/SocialLogin/SocialLogin';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPassRef = useRef('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    const [updateProfile, updating] = useUpdateProfile(auth);

    const handleSignUp = async (e) => {
        e.preventDefault();
        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    if (loading) {
        return <Loading></Loading>;
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

                <SocialLogin></SocialLogin>
            </div>
        </>
    );
};

export default SignUp;
