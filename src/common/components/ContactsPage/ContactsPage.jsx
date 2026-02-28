import React from 'react'

import { ContactForm } from '../../../pages/ContactForm'

import styles from './ContactsPage.module.scss'

export function ContactsPage() {
  return (
    <div className={styles.contactsPage}>
      <h1 className={styles.pageTitle}>Контакты</h1>

      <div className={styles.contactInfo}>
        <p>Адрес: Москва, ул. Примерная, д. 1</p>
        <p>Телефон: +7 123 456 7890</p>
        <p>Email: support@milano.com</p>
        <p>Часы работы: Пн-Пт с 9:00 до 18:00</p>
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          title="Карта"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.556108251235!2d37.6203933159305!3d55.75396098055309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5d5b1585c1%3A0x9996a56c9d1a97b!2z0J_RgNC40LLQtdGA0YHQuNGC0LXRgiDQvtCx0LvQsNGB0YLRjCwgMSwg0JzQvtGB0LrQstCwLCAxMjAwMDI!5e0!3m2!1sru!2sru!4v1610000000000!5m2!1sru!2sru"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <ContactForm />
    </div>
  )
}
