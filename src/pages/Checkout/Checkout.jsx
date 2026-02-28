import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './Checkout.module.scss'

export const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )
  const [buyerData, setBuyerData] = useState({ name: '', email: '', phone: '' })
  const [receiverData, setReceiverData] = useState({ name: '', address: '' })
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  const handleChange = (e, setter) => {
    const { name, value } = e.target
    setter((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !buyerData.name ||
      !buyerData.email ||
      !buyerData.phone ||
      !receiverData.name ||
      !receiverData.address
    ) {
      alert('Пожалуйста, заполните все поля')
      return
    }
    setOrderSubmitted(true)
    alert('Заказ оформлен!')
  }

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.checkoutTitle}>Оформление заказа</h2>

      {cartItems.length === 0 ? (
        <p className={styles.emptyCart}>
          Корзина пуста. Пожалуйста, добавьте товары в корзину.
        </p>
      ) : (
        <>
          <div className={styles.checkoutCart}>
            <h3>Товары в корзине</h3>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className={styles.checkoutItem}
                >
                  <h4>{item.title}</h4>
                  <p>Цена: ${item.price.toFixed(2)}</p>
                  <p>Количество: {item.quantity}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.checkoutTotal}>
            Итоговая сумма: ${totalPrice.toFixed(2)}
          </div>

          <form
            onSubmit={handleSubmit}
            className={styles.checkoutForm}
          >
            <h3>Данные покупателя</h3>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={buyerData.name}
              onChange={(e) => handleChange(e, setBuyerData)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={buyerData.email}
              onChange={(e) => handleChange(e, setBuyerData)}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Телефон"
              value={buyerData.phone}
              onChange={(e) => handleChange(e, setBuyerData)}
              required
            />

            <h3>Данные получателя</h3>
            <input
              type="text"
              name="name"
              placeholder="Имя получателя"
              value={receiverData.name}
              onChange={(e) => handleChange(e, setReceiverData)}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Адрес доставки"
              value={receiverData.address}
              onChange={(e) => handleChange(e, setReceiverData)}
              required
            />

            <h3>Способ оплаты</h3>
            <div className={styles.paymentMethods}>
              <label className={styles.paymentOption}>
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{' '}
                Картой
              </label>
              <label className={styles.paymentOption}>
                <input
                  type="radio"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{' '}
                Наличными
              </label>
            </div>

            <button
              type="submit"
              className={styles.checkoutButton}
            >
              Оформить заказ
            </button>
          </form>

          {orderSubmitted && (
            <div className={styles.orderConfirmation}>
              <h3>Ваш заказ оформлен!</h3>
              <p>
                Способ оплаты:{' '}
                {paymentMethod === 'card' ? 'Картой' : 'Наличными'}
              </p>
              <Link
                to="/"
                className={styles.checkoutBack}
              >
                Вернуться в магазин
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  )
}
