import React from 'react';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import BlogItem from '../BlogItem/BlogItem';
import './Blogs.css';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: 'Difference between authorization and authentication',
            description:
                'Authentication is the process to verify the user. And the authorization is the process to determines that what the user can access from the website, app or the data that the user trying to access. Authentication is the first step of any access management. Then the Authorization step comes. First we need to verify the user identity so we can confirm the right person who is trying to access the service. Then we can authorize the user with what he/she can access from the service with the authorization step.',
        },
        {
            id: 2,
            title: 'Why are you using firebase? What other options do you have to implement authentication?',
            description:
                'Firebase is a application development platform that provides us realtime database. Firebase helps us to create an authentication system for our website or app easily. We do not need to understand the complex behind the seen of the authentication system. Firebase makes it easy to get the user signed-in in out app. Firebase also provides us backend services. Without firebase we have also other options to implement the authentication system. We can also use "Auth0", "Okta", "Keycloak", etc. for authentication. ',
        },
        {
            id: 3,
            title: 'What other services does firebase provide other than authentication?',
            description:
                'Without authentication there are some other services that firebase provide us. Cloud Firestore: Cloud Firestore is a document database. Thats lets us store, query and sync data for your app or website. Hosting: Firebase hosting provides us live production for our website or app. We can deploy our single-page web app, Mobile app landing page or a progressive web app. Google Analytics: Firebase Google Analytics provides ous unlimited analytics solution without any charges. Firebase also provides us many more other services.',
        },
    ];
    return (
        <>
            <TitleBanner title="Blogs"></TitleBanner>

            <div className="blogs-container">
                <div className="container">
                    <div className="blogs">
                        {blogs.map((blog) => (
                            <BlogItem key={blog.id} blog={blog}></BlogItem>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
