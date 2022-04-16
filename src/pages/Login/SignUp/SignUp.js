import React from 'react';
import { Link } from 'react-router-dom';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';

const SignUp = () => {
    return (
        <>
            <TitleBanner title="Sign Up"></TitleBanner>

            <div className="form-container">
                <div className="form-heading">
                    <h2>Create your account</h2>
                </div>
                <form>
                    <div className="field-group">
                        <label htmlFor="name">Name</label>
                        <input
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
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            id="password"
                            required
                        />
                    </div>

                    <div className="field-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
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
                            Already have an account? <Link to="/login">Login</Link>
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