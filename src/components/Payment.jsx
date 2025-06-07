import React, { useState } from 'react';
import './Payment.css';

export default function Payment() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        gender: '',
        email: '',
        cardNumber: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Payment processing...');
    };

    return (
        <div className="payment-container">
            <div className="payment-card">
                <div className="payment-header">
                    <h2>Payment Details</h2>
                    <div className="payment-icon">
                        <i className="fas fa-credit-card"></i>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="payment-form">
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="name">Full Name</label>
                            <div className="input-line"></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="phone">Phone Number</label>
                            <div className="input-line"></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="gender-label">Gender</label>
                        <div className="gender-options">
                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange}
                                    required
                                />
                                <span>Male</span>
                            </label>
                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange}
                                />
                                <span>Female</span>
                            </label>
                            <label className="gender-option">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={formData.gender === 'other'}
                                    onChange={handleChange}
                                />
                                <span>Other</span>
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email">Email</label>
                            <div className="input-line"></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                maxLength="16"
                                required
                            />
                            <label htmlFor="cardNumber">Credit Card Number</label>
                            <div className="input-line"></div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <label htmlFor="address">Address</label>
                            <div className="input-line"></div>
                        </div>
                    </div>

                    <button type="submit" className="submit-button">
                        <span>Proceed to Payment</span>
                        <div className="button-line"></div>
                    </button>
                </form>
            </div>
        </div>
    );
} 