import styles from './scss/_nav.module.scss'
import logoImage from '@/assets/logo/EcoModularLogo.png'
import { ChevronDown } from 'lucide-react';
import { useNavScroll } from './event/NavScrollEvent';

const Nav = () => {
  
  // Lower thresholds to activate navbar with minimal scroll
  const activateAt = 10
  const deactivateAt = 5

  const isScrolled = useNavScroll(activateAt, deactivateAt)

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles['nav--scrolled'] : ''}`}>
      <div className={styles.nav__container}>

        {/* Left Navigation Items */}
        <div className={styles.nav__left}>
          {/* Language Flags */}
          <div className={styles.nav__flags}>
            <a href="#" className={styles.nav__flag} aria-label="English">
              <img src="https://ecomodular.com/wp-content/plugins/gtranslate/flags/svg/en.svg" alt="English" />
            </a>
            <a href="#" className={styles.nav__flag} aria-label="French">
              <img src="https://ecomodular.com/wp-content/plugins/gtranslate/flags/svg/fr.svg" alt="French" />
            </a>
            <a href="#" className={styles.nav__flag} aria-label="German">
              <img src="https://ecomodular.com/wp-content/plugins/gtranslate/flags/svg/de.svg" alt="German" />
            </a>
            <a href="#" className={styles.nav__flag} aria-label="Italian">
              <img src="https://ecomodular.com/wp-content/plugins/gtranslate/flags/svg/it.svg" alt="Italian" />
            </a>
            <a href="#" className={styles.nav__flag} aria-label="Spanish">
              <img src="https://ecomodular.com/wp-content/plugins/gtranslate/flags/svg/es.svg" alt="Spanish" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className={styles.nav__links}>
            <a href="#about" className={styles.nav__link}>About Us</a>
            <div className={styles.nav__dropdown}>
              <a href="#products" className={styles.nav__link}>
                Products
                <span className={styles.nav__caret}><ChevronDown /></span>
              </a>
            </div>
            <a href="#projects" className={styles.nav__link}>Projects</a>
          </div>
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