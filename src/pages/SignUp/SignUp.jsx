import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './SignUp.module.scss'
import { register } from '@/slices/authSlice'

export const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordCheck: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.passwordCheck) {
      setError('Пароли не совпадают!')
      return
    }

    if (formData.password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов!')
      return
    }

    setError('')

    setLoading(true)
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`)
      }

      const result = await response.json()
      console.log('Успешно отправлено:', result)
      dispatch(register(formData))
      navigate('/login')
    } catch (error) {
      setError('Ошибка при отправке. Попробуйте позже.')
      console.error('Ошибка:', error)
    }
    setLoading(false)
  }

  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.title}>Регистрация</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.formGroup}>
          <label htmlFor="username">Имя пользователя</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password-check">Повторить пароль</label>
          <input
            type="password"
            id="password-check"
            name="passwordCheck"
            value={formData.passwordCheck}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? 'Загрузка...' : 'Зарегистрироваться'}
        </button>
      </form>
    </div>
  )
}
