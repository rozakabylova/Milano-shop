import React from 'react'

import styles from './FashionSection.module.scss'

export const FashionSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.imageWrapper}>
        <img
          src="https://www.marko-shoes.ru/blog_images/feshion/Trendovye%20sumki%20vesna-leto%202025/3.png "
          alt="Fashion Campaign"
        />
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Fashion</h2>
          <h3 className={styles.subTitle}>The Milano 25 HandBag</h3>
          <button className={styles.button}>See the Campaign</button>
        </div>
      </div>
    </div>
  )
}
