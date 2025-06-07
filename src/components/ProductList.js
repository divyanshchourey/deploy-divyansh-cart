import React from 'react'
import Product from './Product.js';

export default function ProductList(props) {
  return (
    props.productList.length > 0 ? (
      props.productList.map((product, i) => {
        return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem} index={i}/>
      })
    ) : (
      <div className="empty-cart">
        <i className="fas fa-shopping-cart"></i>
        <h2>No products exists in the cart</h2>
        <p>Add some products to get started!</p>
      </div>
    )
  )
}
