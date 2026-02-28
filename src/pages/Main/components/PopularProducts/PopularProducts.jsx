import { useEffect, useState } from 'react'

import styles from './PopularProducts.module.scss'

export const PopularProducts = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products')

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`)
        }

        const data = await response.json()
        setProducts(data)
      } catch (err) {
        console.error('Ошибка загрузки данных:', err)
        setError(err.message)
      }
    }

    fetchProducts()
  }, [])

  const popularProducts = products.filter(
    (product) => product.category === 'new',
  )

  return (
    <div className={styles.popularProducts}>
      <h2 className={styles.popularProductsTitle}>Новая коллекция</h2>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.productContainer}>
        {popularProducts.map((product) => (
          <li
            className={styles.product}
            key={product.id}
          >
            <div className={styles.productCard}>
              <img
                className={styles.productImage}
                src={product.image}
                alt={product.title}
              />
              <div className={styles.productText}>
                <h3 className={styles.subTitle}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>Цена: ${product.price}</p>
                <p className={styles.rating}>
                  Рейтинг: {product.rating?.rate} ({product.rating?.count}{' '}
                  отзывов)
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
