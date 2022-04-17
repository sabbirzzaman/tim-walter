import React from 'react';
import Loading from '../../Common/Loading/Loading';
import './CheckoutItem.css';

const CheckoutItem = ({ service }) => {

    if(!service) {
        return <Loading></Loading>
    }

    if (service) {
        const { image, title, price, details } = service;

        return (
            <div className="checkout-item">
                <img src={image} alt={title} />
                
                <div className="item-details">
                    <h4>{title}</h4>
                    <h3>{price}</h3>
                    <p>{details}</p>
                </div>
            </div>
        );
    }
};

export default CheckoutItem;
