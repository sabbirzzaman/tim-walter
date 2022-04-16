import React from 'react';
import { Link } from 'react-router-dom';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import './Login.css';

const Login = () => {
    return (
        <>
            <TitleBanner title="Login"></TitleBanner>

            <div className="form-container">
                <div className="form-heading">
                    <h2>Login to your account</h2>
                </div>
                <form>
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
                        <input type="submit" value="Login" />
                    </div>

                    <div className="field-group">
                        <p>
                            Don't have an account? <Link to="/signup">Create an account.</Link>
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
