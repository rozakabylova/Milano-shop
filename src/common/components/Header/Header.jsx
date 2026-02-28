import React, { useState } from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

// import { logout } from '../store/authSlice'
import { logout } from '../../../slices/authSlice'

import styles from './Header.module.scss'

export const Header = () => {
  const [inputVal, setInputVal] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)
  // const user = useSelector((state) => state.auth.user)
  const cartItems = useSelector((state) => state.cart?.items?.length || 0)

  console.log(user)

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleClick()
  }

  const handleClick = () => {
    if (inputVal.trim()) navigate(`/catalog?search=${inputVal}`)
  }

  // const handleLogout = () => {
  //   dispatch({ type: 'logout' })
  //   navigate('/')
  // }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link
          to="/"
          className={styles.logoText}
        >
          Milano
        </Link>
      </div>

      <div className={styles.searchContainer}>
        <input
          placeholder="Поиск..."
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyPress}
          className={styles.searchInput}
        />
        <button
          onClick={handleClick}
          className={styles.searchButton}
        >
          <FaSearch className={styles.searchIcon} />
        </button>
      </div>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/about">О бренде</Link>
          </li>

          {/* Логика отображения профиля или кнопок "Войти" и "Регистрация" */}

          <li>
            <Link to="/contacts">Контакты</Link>
          </li>

          <li className={styles.cart}>
            <Link to="/cart">
              <FaShoppingCart />
              {cartItems > 0 && (
                <span className={styles.cartCount}>({cartItems})</span>
              )}
            </Link>
          </li>

          {user ? (
            <li className={styles.profile}>
              <Link to="/profile">Профиль</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Войти</Link>
              </li>
              <li>
                <Link to="/registration">Регистрация</Link>
              </li>
            </>
          )}

          {/* Если пользователь авторизован, показываем кнопку выхода */}
          {user && (
            <li>
              <button
                onClick={handleLogout}
                className={styles.logout}
              >
                Выйти
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
