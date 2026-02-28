import React from 'react'

import about2 from '../../assets/image2.svg'
import about from '../../assets/image.svg'

import styles from './AboutBrand.module.scss'

export const AboutBrand = () => {
  return (
    <div className={styles.wrapper}>
      {/* Баннер */}

      {/* Заголовок */}
      <h1 className={styles.title}>О бренде</h1>

      {/* История */}
      <div className={styles.textBlock}>
        <p>
          Всё началось с мечты. Маленькой, почти детской мечты — сшить идеальную
          сумку для своей мамы...
        </p>
        <p>
          Первый шов был неровный, первая кожа — из остатков, а первая фурнитура
          — куплена на последние деньги...
        </p>
        <p>
          Я начала шить по ночам, училась по видео, ошибалась, переделывала...
        </p>
        <p>Сейчас у меня небольшая мастерская и команда из трёх девушек...</p>
        <p>Этот бренд — про честность, ручную работу, и женскую силу...</p>
      </div>

      <div className={styles.banner}>
        <img
          src={about2}
          alt="картина О бренде"
        />

        <p className={styles.textBlock}>
          Я верю, что каждый маленький шаг важен. Если у тебя есть мечта — не
          бойся начинать. Пусть неидеально, пусть медленно, но с любовью. Именно
          так рождается что-то настоящее.
        </p>
        <img
          src={about} // замени на нужный путь
          alt="О бренде"
        />
      </div>
    </div>
  )
}
