import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './scss/_nav.module.scss'
import logoImage from '@/assets/logo/EcoModularLogo.svg'
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavScroll } from './event/NavScrollEvent';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Lower thresholds to activate navbar with minimal scroll
  const activateAt = 10
  const deactivateAt = 5

  const isScrolled = useNavScroll(activateAt, deactivateAt)

  // Show navbar immediately on contact page
  const isContactPage = location.pathname === '/contact-us'
  const shouldShowNavbar = isScrolled || isContactPage

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${shouldShowNavbar ? styles['nav--scrolled'] : ''}`}>
      <div className={styles.nav__container}>

        {/* Mobile Menu Button - Show when scrolled or on contact page */}
        {shouldShowNavbar && (
          <button
            className={styles.nav__hamburger}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        )}

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
            <a href="#projects" className={styles.nav__link}>Systems</a>
          </div>
        </div>

        {/* Center Logo */}
        <div className={styles.nav__logo}>
          <Link to="/">
            <img src={logoImage} alt="ECO MODULAR" className={styles.nav__logoImage} />
          </Link>
        </div>

        {/* Right Navigation Items */}
        <div className={styles.nav__right}>
          <a href="#news" className={styles.nav__link}>Project</a>
          <Link to="/contact-us" className={styles.nav__link}>Contact</Link>
          <button className={styles.nav__button}>LET'S TALK</button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.nav__mobileMenu}>
          <div className={styles.nav__mobileContent}>
            {/* Language Flags */}
            <div className={styles.nav__mobileFlags}>
              <a href="#" className={styles.nav__flag} aria-label="English" onClick={closeMobileMenu}>
                <img src="https://ecomodular.com/wp-content/plugins/gtranslate/flags/svg/en.svg" alt="English" />
              </a>
              <a href="#" className={styles.nav__flag} aria-label="French" onClick={closeMobileMenu}>
                <img src="https://ecomodular.com/wp-content/plugins/gtranslate/flags/svg/fr.svg" alt="French" />
              </a>
              <a href="#" className={styles.nav__flag} aria-label="German" onClick={closeMobileMenu}>
                <img src="https://ecomodular.com/wp-content/plugins/gtranslate/flags/svg/de.svg" alt="German" />
              </a>
              <a href="#" className={styles.nav__flag} aria-label="Italian" onClick={closeMobileMenu}>
                <img src="https://ecomodular.com/wp-content/plugins/gtranslate/flags/svg/it.svg" alt="Italian" />
              </a>
              <a href="#" className={styles.nav__flag} aria-label="Spanish" onClick={closeMobileMenu}>
                <img src="https://ecomodular.com/wp-content/plugins/gtranslate/flags/svg/es.svg" alt="Spanish" />
              </a>
            </div>

            {/* Navigation Links */}
            <div className={styles.nav__mobileLinks}>
              <a href="#about" className={styles.nav__mobileLink} onClick={closeMobileMenu}>About Us</a>
              <a href="#products" className={styles.nav__mobileLink} onClick={closeMobileMenu}>
                Products
              </a>
              <a href="#projects" className={styles.nav__mobileLink} onClick={closeMobileMenu}>Systems</a>
              <a href="#news" className={styles.nav__mobileLink} onClick={closeMobileMenu}>Project</a>
              <Link to="/contact-us" className={styles.nav__mobileLink} onClick={closeMobileMenu}>Contact</Link>
              <button className={styles.nav__mobileButton} onClick={closeMobileMenu}>LET'S TALK</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav