import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import SocialLogin from '../../Common/SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const [updateProfile] = useUpdateProfile(auth);

    const handleSignUp = async (e) => {
        e.preventDefault();
        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPass = confirmPassRef.current.value;

        if (password.length <= 5) {
            toast.error('Password have to be 6 or more character.');
            return;
        }

        if (password !== confirmPass) {
            toast.error('Password not matched.');
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
    };
    
    if(loading) {
        toast.success('Verification email sent on your email.');
    }

    if (error) {
        if (error?.message === 'Firebase: Error (auth/email-already-in-use).') {
            toast.error('User already exist.');
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

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
                <ToastContainer />
            </div>
        </>
    );
};

export default SignUp;
