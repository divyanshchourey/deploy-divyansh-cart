import React from 'react'

export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
      <div className='col-12 d-flex justify-content-between align-items-center px-4'>
        <button className='btn btn-danger' onClick={() => {
          props.resetQuantity()
        }}>
          <i className="fas fa-redo"></i> Reset
        </button>
        <div className='total-amount'>
          Total: ₹{props.totalAmount}
        </div>
        <button className='btn btn-primary' onClick={props.onPayNow}>
          <i className="fas fa-credit-card"></i> Pay Now
        </button>
      </div>
    </div>
  )
}
