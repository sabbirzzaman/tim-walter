import React from 'react';
import TitleBanner from '../../Common/TitleBanner/TitleBanner';
import image from '../../../images/order-success.gif';
import './OrderSuccess.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const OrderSuccess = () => {
    return (
        <>
            <TitleBanner title="Order Placed Successfully."></TitleBanner>

            <div className="order-container">
                <div className="container">
                    <h3>
                        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>{' '}
                        <span>
                            Order Placed Successfully. My Team will contact you
                            soon.
                        </span>
                    </h3>
                    <img src={image} alt="Order Placed" />
                </div>
            </div>
        </>
    );
};

export default OrderSuccess;
