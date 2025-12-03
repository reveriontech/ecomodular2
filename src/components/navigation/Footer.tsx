import styles from './scss/_footer.module.scss'
import logoImage from '@/assets/logo/EcoModularLogo.svg'
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* Newsletter Section */}
      <div className={styles.footer__newsletter}>
        <div className={styles.footer__newsletterContainer}>
          <div className={styles.footer__newsletterContent}>
            <h3 className={styles.footer__newsletterTitle}>Don't miss out.</h3>
            <p className={styles.footer__newsletterSubtitle}>Subscribes now.</p>
          </div>
          <form className={styles.footer__newsletterForm}>
            <input
              type="email"
              placeholder="Email"
              className={styles.footer__newsletterInput}
              aria-label="Email address"
            />
            <button type="submit" className={styles.footer__newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
        <div className={styles.footer__newsletterDivider}></div>
      </div>

      <div className={styles.footer__main}>
        <div className={styles.footer__container}>
          {/* Left Section - Logo and Social Media */}
          <div className={styles.footer__left}>
            <div className={styles.footer__logo}>
              <img src={logoImage} alt="EcoModular Logo" className={styles.footer__logoImage} />
            </div>

            <div className={styles.footer__description}>
              <p className={styles.footer__descriptionText}>The Future of Construction</p>
            </div>

            <div className={styles.footer__social}>
              <a href="#" aria-label="Facebook" className={styles.footer__socialLink}>
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className={styles.footer__socialLink}>
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="YouTube" className={styles.footer__socialLink}>
                <Youtube size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.footer__socialLink}>
                <Linkedin size={24} />
              </a>
              <a href="#" aria-label="Instagram" className={styles.footer__socialLink}>
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className={styles.footer__nav}>
            <div className={styles.footer__navColumn}>
              <a href="#" className={styles.footer__navLink}>Find a Floor Plan</a>
              <a href="#" className={styles.footer__navLink}>Find a Retail Location</a>
              <a href="#" className={styles.footer__navLink}>Manufacturing</a>
            </div>

            <div className={styles.footer__navColumn}>
              <a href="#" className={styles.footer__navLink}>About</a>
              <a href="#" className={styles.footer__navLink}>Our Construction Process</a>
              <a href="#" className={styles.footer__navLink}>Homeowner Resources</a>
            </div>

            <div className={styles.footer__navColumn}>
              <a href="#" className={styles.footer__navLink}>Contact</a>
              <a href="#" className={styles.footer__navLink}>Request Information</a>
              <a href="#" className={styles.footer__navLink}>Become a Retailer</a>
            </div>

            <div className={styles.footer__navColumn}>
              <a href="#" className={styles.footer__navLink}>Service / Parts Inquiry</a>
              <a href="#" className={styles.footer__navLink}>Careers</a>
              <a href="#" className={styles.footer__navLink}>HomeFront (Blog)</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className={styles.footer__bottom}>
        <p className={styles.footer__copyright}>
          Copyright © EcoModular Industries, Inc. All rights reserved.
          <a href="#" className={styles.footer__policyLink}>Privacy Policy</a> |
          <a href="#" className={styles.footer__policyLink}>Do Not Sell My Personal Information</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
