import React, { useState } from 'react'

export default function AddItem(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addItem(name, price);
        setName('');
        setPrice('');
    }

    return (
        <form onSubmit={handleSubmit} className="row mb-4">
            <div className="col-4">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>
            <div className="col-4">
                <div className="input-group">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
            </div>
            <div className="col-4">
                <button type="submit" className="btn btn-primary w-100">
                    <i className="fas fa-plus"></i> Add Phone
                </button>
            </div>
        </form>
    );
}