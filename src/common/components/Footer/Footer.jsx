// import { Link } from 'react-router-dom'
// import styles from './Footer.module.scss'
// export const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.footer__content}>
//         <h2 className={styles.footer__logo}>Мой Магазин</h2>
//         <nav className={styles.footer__nav}>
//           <Link
//             to="#"
//             className={styles.footer__link}
//           >
//             О нас
//           </Link>
//           <Link
//             to="#"
//             className={styles.footer__link}
//           >
//             Контакты
//           </Link>
//           <Link
//             to="#"
//             className={styles.footer__link}
//           >
//             Политика
//           </Link>
//         </nav>
//         <div className={styles.footer__socials}>
//           <Link
//             to="#"
//             className={styles.footer__socialLink}
//           >
//             🔵
//           </Link>
//           <Link
//             to="#"
//             className={styles.footer__socialLink}
//           >
//             📷
//           </Link>
//           <Link
//             to="#"
//             className={styles.footer__socialLink}
//           >
//             🐦
//           </Link>
//         </div>
//       </div>
//       <p className={styles.footer__copy}>© 2025 Все права защищены</p>
//     </footer>
//   )
// }
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h3 className={styles.title}>Account</h3>
          <ul>
            <li>Log In</li>
            <li>Sign Up</li>
            <li>Redeem a Gift Card</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Company</h3>
          <ul>
            <li>About</li>
            <li>Environmental Initiatives</li>
            <li>Factories</li>
            <li>DEI</li>
            <li>Careers</li>
            <li>International</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Get Help</h3>
          <ul>
            <li>Help Center</li>
            <li>Return Policy</li>
            <li>Shipping Info</li>
            <li>Bulk Orders</li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Connect</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Affiliates</li>
            <li>Our Stores</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.links}>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Do Not Sell or Share My Personal Information</Link>
          <Link to="#">CS Supply Chain Transparency</Link>
          <Link to="#">Vendor Code of Conduct</Link>
          <Link to="#">Sitemap Pages</Link>
          <Link to="#">Sitemap Products</Link>
        </div>
        <div className={styles.subscribe}>
          <input
            type="email"
            placeholder="Email Address"
            className={styles.input}
          />
          <button className={styles.button}>→</button>
        </div>
      </div>
    </footer>
  )
}
