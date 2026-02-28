import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'

import styles from './Catalog.module.scss'
import {
  addToCart,
  removeFromCart,
  updateCartOnServer,
} from '@/slices/cartSlice'

export const Catalog = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const pageElem = 6
  const [totalPages, setTotalPages] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const CartItems = useSelector((state) => state.cart.items)
  const products = useSelector((state) => state.products.products)
  const [filtered, setFiltered] = useState([])
  const userId = useSelector((state) =>
    state.user.user ? state.user.user.id : null,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/products')
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (!searchParams.has('search')) {
      setSearchParams({ search: '' }, { replace: true })
    }
  }, [searchParams, setSearchParams])

  useEffect(() => {
    const searchValue = searchParams.get('search')?.toLowerCase() || ''
    const filt = products.filter((item) =>
      item.title.toLowerCase().includes(searchValue),
    )
    setTotalPages(Math.ceil(filt.length / pageElem))
    setFiltered(filt)
  }, [searchParams, products])

  const addToCartWithUpdate = (product) => {
    const productInCart = CartItems.find(
      (cartItem) => cartItem.id === product.id,
    )
    if (!productInCart) {
      dispatch(addToCart(product))
      dispatch(updateCartOnServer(userId))
    }
  }

  return (
    <div className={styles.root}>
      <h1>
        Каталог <br />
        <small>Страница #{pageNumber + 1}</small>
      </h1>

      <div className={styles.wrapper}>
        {filtered
          .slice(pageNumber * pageElem, pageNumber * pageElem + pageElem)
          .map((product) => (
            <div
              key={product.id}
              className={styles.card}
            >
              <img
                src={product.image}
                alt={product.title}
              />
              <h3>{product.title}</h3>
              <p>{product.price}$</p>
              <div className={styles.rating}>
                {Array.from({ length: Math.round(product.rating.rate) }).map(
                  (_, index) => (
                    <span key={index}>★</span>
                  ),
                )}
              </div>
              <p>Rated: {product.rating.count}</p>
              <p>{product.category}</p>

              <Link to={`/catalog/${product.id}`}>
                <button className={styles.moreButton}>Подробнее</button>
              </Link>

              <div className={styles.buttonGroup}>
                <button
                  onClick={() => addToCartWithUpdate(product)}
                  className={styles.addButton}
                >
                  В корзину
                </button>

                <button
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className={styles.removeButton}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Link
            key={index}
            to={`?page=${index}`}
            onClick={() => setPageNumber(index)}
            className={index === pageNumber ? styles.active : ''}
          >
            {index + 1}
          </Link>
        ))}
      </div>
    </div>
  )
}
