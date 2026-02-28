import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './Cart.scss'
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '@/slices/cartSlice'

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id))
  }

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(id))
    }
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-buttons">
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="cart-btn"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleDecrease(item.id, item.quantity)}
                    className="cart-btn"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="cart-btn remove"
                  >
                    Remove
                  </button>
                </div>
                <p className="cart-item-total">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
      </div>

      <Link to={'/checkout'}>Перейти к оформлению заказа</Link>
    </div>
  )
}
