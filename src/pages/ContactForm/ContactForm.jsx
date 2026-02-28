import React, { useState } from 'react'

import styles from './ContactForm.module.scss'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайщее время!')
  }

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
    >
      <h2 className={styles.formTitle}>Свяжитесь с нами</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="name">Имя:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message">Сообщение:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
      >
        Отправить
      </button>
    </form>
  )
}
