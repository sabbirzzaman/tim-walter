import React, { useEffect } from 'react';
import {
    useSignInWithFacebook,
    useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, googleUser, , googleError] =
        useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, , facebookError] =
        useSignInWithFacebook(auth);

    useEffect(() => {
        if (googleUser || facebookUser) {
            navigate('/');
        }
    }, [googleUser, facebookUser]);

    if (
        googleError?.message ===
            'Firebase: Error (auth/popup-closed-by-user).' ||
        facebookError?.message ===
            'Firebase: Error (auth/popup-closed-by-user).'
    ) {
        toast.warning('Popup closed.');
    }

    return (
        <>
            <div className="divider">
                <hr />
                <span>Or</span>
                <hr />
            </div>

            <div className="form-google">
                <button onClick={() => signInWithGoogle()}>
                    Continue with Google
                </button>
            </div>

            <div className="form-facebook">
                <button onClick={() => signInWithFacebook()}>
                    Continue with Facebook
                </button>
            </div>
        </>
    );
};

export default SocialLogin;
