import React from 'react'

export default function Product(props) {
    return (
        <div className='row mt-3 product-item'>
            <div className='col-4'>
                <h2 className="product-name">{props.product.name}<span className="badge">₹{props.product.price}</span></h2>
            </div>
            <div className='col-4'>
                <div className="btn-group" role="group" aria-label="Quantity controls">
                    <button type="button" className="btn btn-danger" onClick={() => {props.decrementQuantity(props.index)}}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-warning">
                        {props.product.quantity}
                    </button>
                    <button type="button" className="btn btn-success" onClick={() => {props.incrementQuantity(props.index)}}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div className='col-2 total-amount'>
                ₹{props.product.quantity * props.product.price}
            </div>
            <div className='col-2'>
                <button className='btn btn-danger' onClick={() => {
                    props.removeItem(props.index);
                }}>
                    <i className="fas fa-trash"></i> Remove
                </button>
            </div>
        </div>
    )
}
