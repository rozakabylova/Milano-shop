import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './SignIn.module.scss'
import { login } from '@/slices/authSlice'

export const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('http://localhost:3001/users')
      const users = await response.json()

      const user = users.find(
        (user) => user.username === username && user.password === password,
      )

      if (user) {
        dispatch(login(user))
        setError('')
        navigate('/profile')
      } else {
        setError('Неверное имя пользователя или пароль')
      }
    } catch (err) {
      setError('Ошибка при получении пользователей')
      console.error('Ошибка:', err)
    }

    setLoading(false)
  }

  return (
    <div className={styles.signInContainer}>
      <h2>Вход</h2>
      <form
        onSubmit={handleSubmit}
        className={styles.signInForm}
      >
        <div className={styles.inputGroup}>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? 'Загрузка...' : 'Войти'}
        </button>
      </form>
    </div>
  )
}
