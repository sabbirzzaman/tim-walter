import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

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