import React from 'react';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import Services from '../../Home/Services/Services';
import './MyServices.css'

const ServicesPage = () => {
    return (
        <div>
            <TitleBanner title='My Services'></TitleBanner>
            <Services></Services>
        </div>
    );
};

export default ServicesPage;