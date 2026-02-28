import React from 'react'

import styles from './Main.module.scss'
import { FashionSection } from './components/FashionSection/FashionSection'
import { HeroPromo } from './components/HeroPromo/HeroPromo'
import { PopularProducts } from './components/PopularProducts/PopularProducts'

export function Main() {
  return (
    <main className={styles.page}>
      <section className={styles.heroPromo}>
        <HeroPromo />
      </section>
      <section className={styles.popularProducts}>
        <PopularProducts />
      </section>
      <section className={styles.fashionSection}>
        <FashionSection />
      </section>
    </main>
  )
}
