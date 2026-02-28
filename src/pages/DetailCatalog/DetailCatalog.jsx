import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { getProducts } from '../../slices/productsSlice'

import styles from './DetailCatalog.module.scss'

export const DetailCatalog = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { products, loading, error } = useSelector((state) => state.products)

  const [selectedColor, setSelectedColor] = useState('')

  const product = products.find((item) => String(item.id) === id)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts())
    }
  }, [dispatch, products.length])

  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0])
    }
  }, [product])

  if (loading) {
    return <p>Загрузка...</p>
  }

  if (error) {
    return <p>Ошибка: {error}</p>
  }

  if (!product) {
    return <p>Продукт не найден</p>
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.productTitle}>{product.title}</h1>

      <img
        className={styles.largeImage}
        src={product.image}
        alt={product.title}
      />
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>{product.price}</p>

      {product.colors && product.colors.length > 0 && (
        <div className={styles.colorSelector}>
          <p className={styles.colorLabel}>Выберите цвет:</p>
          <div className={styles.colorOptions}>
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`${styles.colorButton} ${
                  selectedColor === color ? styles.activeColor : ''
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className={styles.selectedColorText}>
            Выбранный цвет:{' '}
            <strong style={{ color: selectedColor }}>{selectedColor}</strong>
          </p>
        </div>
      )}

      <Link
        to="/checkout"
        className={styles.checkoutLink}
      >
        Перейти к оформлению заказа
      </Link>
    </div>
  )
}
