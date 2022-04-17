import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Common/Loading/Loading';
import Awards from '../Awards/Awards';
import Banner from '../Banner/Banner';
import Experiences from '../Experiences/Experiences';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    const [, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Experiences></Experiences>
            <Awards></Awards>
        </>
    );
};

export default Home;