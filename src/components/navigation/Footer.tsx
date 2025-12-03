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

          {/* Middle Section - Office Contact Information */}
          <div className={styles.footer__nav}>
            <div className={styles.footer__navColumn}>
              <h4 className={styles.footer__officeTitle}>IRELAND OFFICE</h4>
              <p className={styles.footer__officeAddress}>
                Unit 518A Grants Crescent, Greenogue Business Park, Rathcoole, Co. Dublin, D24 FD63
              </p>
              <p className={styles.footer__officePhone}>t: +353 1 43 70 909</p>
              <p className={styles.footer__officeEmail}>
                e: <a href="mailto:info@ecomodular.com">info@ecomodular.com</a>
              </p>
            </div>

            <div className={styles.footer__navColumn}>
              <h4 className={styles.footer__officeTitle}>CYPRUS OFFICE</h4>
              <p className={styles.footer__officeAddress}>
                121 Prodromou, Office 201, 2064, Nicosia, Cyprus
              </p>
              <p className={styles.footer__officePhone}>t: +357 97 425 472</p>
              <p className={styles.footer__officeEmail}>
                e: <a href="mailto:info@ecomodular.com">info@ecomodular.com</a>
              </p>
            </div>

            <div className={styles.footer__navColumn}>
              <h4 className={styles.footer__officeTitle}>LITHUANIA OFFICE</h4>
              <p className={styles.footer__officeAddress}>
                Maironio g. 26b, Kaunas, 44249 Lithuania
              </p>
              <p className={styles.footer__officePhone}>t: +370 60 101 010</p>
              <p className={styles.footer__officeEmail}>
                e: <a href="mailto:info@ecomodular.com">info@ecomodular.com</a>
              </p>
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
