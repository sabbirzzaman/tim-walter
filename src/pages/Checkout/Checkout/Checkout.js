import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import ShippingForm from '../ShippingForm/ShippingForm';
import './Checkout.css';

const Checkout = () => {
    const { serviceId } = useParams();

    const [services] = useServices('../data.json');

    const serviceItem = services.find(
        (service) => parseInt(service.id) === parseInt(serviceId)
    );

    return (
        <>
            <TitleBanner title="Checkout"></TitleBanner>

            <div className="checkout-container">
                <div className="container">
                    <div className="checkout-item-details">
                        <h2>Your selected package.</h2>
                        <CheckoutItem service={serviceItem}></CheckoutItem>
                    </div>
                    
                    <div className="checkout-form">
                        <ShippingForm></ShippingForm>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
