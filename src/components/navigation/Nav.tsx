import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './scss/_nav.module.scss'
import logoImage from '@/assets/logo/EcoModularLogo.svg'
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavScroll } from './event/NavScrollEvent';

// Project titles from Projects.tsx
const projectTitles = [
  'HOTELS',
  'APARTMENTS',
  'NURSING HOMES',
  'SOCIAL HOUSING',
  'STUDENT ACCOMMODATION',
  'BATHROOM PODS',
]

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const [isMobileProductsDropdownOpen, setIsMobileProductsDropdownOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Lower thresholds to activate navbar with minimal scroll
  const activateAt = 10
  const deactivateAt = 5

  const isScrolled = useNavScroll(activateAt, deactivateAt)

  // Show navbar immediately on contact page
  const isContactPage = location.pathname === '/contact-us'
  const isBuildingsPage = location.pathname === '/buildings'
  const shouldShowNavbar = isScrolled || isContactPage || isBuildingsPage

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation and component mount, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 80 // Adjust this value based on your navbar height
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 500)
      closeMobileMenu()
      return
    }

    // If already on home page, scroll directly
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }

    closeMobileMenu()
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
            <a
              href="#about"
              className={styles.nav__link}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              About Us
            </a>
            <div
              className={styles.nav__dropdown}
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <a href="#products" className={styles.nav__link}>
                Products
                <span className={`${styles.nav__caret} ${isProductsDropdownOpen ? styles.nav__caretOpen : ''}`}>
                  <ChevronDown />
                </span>
              </a>
              {isProductsDropdownOpen && (
                <div className={styles.nav__dropdownMenu}>
                  {projectTitles.map((title, index) => (
                    <Link
                      key={index}
                      to={`/buildings?filter=${encodeURIComponent(title)}`}
                      className={styles.nav__dropdownItem}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#projects"
              className={styles.nav__link}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
            >
              Project
            </a>
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
          <a href="#news" className={styles.nav__link}>Articles</a>
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
              <a
                href="#about"
                className={styles.nav__mobileLink}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('about')
                }}
              >
                About Us
              </a>
              <div className={styles.nav__mobileDropdown}>
                <button
                  className={styles.nav__mobileDropdownToggle}
                  onClick={() => setIsMobileProductsDropdownOpen(!isMobileProductsDropdownOpen)}
                >
                  Products
                  <span className={`${styles.nav__caret} ${isMobileProductsDropdownOpen ? styles.nav__caretOpen : ''}`}>
                    <ChevronDown />
                  </span>
                </button>
                {isMobileProductsDropdownOpen && (
                  <div className={styles.nav__mobileDropdownMenu}>
                    {projectTitles.map((title, index) => (
                      <Link
                        key={index}
                        to={`/buildings?filter=${encodeURIComponent(title)}`}
                        className={styles.nav__mobileDropdownItem}
                        onClick={closeMobileMenu}
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <a href="#news" className={styles.nav__mobileLink} onClick={closeMobileMenu}>Systems</a>
              <a
                href="#projects"
                className={styles.nav__mobileLink}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('projects')
                }}
              >
                Project
              </a>
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