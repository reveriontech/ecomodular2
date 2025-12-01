import styles from './scss/_nav.module.scss'
import logoImage from '@/assets/logo/EcoModularLogo.png'
import { ChevronDown } from 'lucide-react';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>

        {/* Left Navigation Items */}
        <div className={styles.nav__left}>
          <a href="#about" className={styles.nav__link}>About Us</a>
          <div className={styles.nav__dropdown}>
            <a href="#products" className={styles.nav__link}>
              Products
              <span className={styles.nav__caret}><ChevronDown /></span>
            </a>
          </div>
          <a href="#projects" className={styles.nav__link}>Projects</a>
        </div>

        {/* Center Logo */}
        <div className={styles.nav__logo}>
          <img src={logoImage} alt="ECO MODULAR" className={styles.nav__logoImage} />
        </div>

        {/* Right Navigation Items */}
        <div className={styles.nav__right}>
          <a href="#news" className={styles.nav__link}>News</a>
          <a href="#contact" className={styles.nav__link}>Contact</a>
          <button className={styles.nav__button}>LET'S TALK</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav