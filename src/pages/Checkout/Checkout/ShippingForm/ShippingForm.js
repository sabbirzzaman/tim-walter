import React from 'react';
import './ShippingForm.css'

const ShippingForm = () => {
    return (
        <div className="form-container">
            <div className="checkout-title form-heading">
                <h2>Your shipping info</h2>
            </div>
            <form>
                <div className="field-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        id="name"
                        required
                        readOnly
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
                        readOnly
                    />
                </div>

                <div className="field-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        id="address"
                        required
                    />
                </div>

                <div className="field-group">
                    <label htmlFor="instruction">Instruction</label>
                    <textarea
                        name="instruction"
                        id="instruction"
                        placeholder='Add delivery instruction'
                        cols="30"
                        rows="100"
                        required
                    ></textarea>
                </div>

                <div className="field-group">
                    <input type="submit" value="Checkout" />
                </div>
            </form>
        </div>
    );
};

export default ShippingForm;
