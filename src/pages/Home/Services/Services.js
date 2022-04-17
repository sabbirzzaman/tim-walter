import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices('data.json');

    return (
        <div className='services-container'>
            <div className="container">
                <div className="service-title">
                    <h2>My Services</h2>
                </div>

                <div className="services">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;