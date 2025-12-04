import ContactAds from "./contact-page/ContactAds"
import Contact from "./contact-page/Contact"
import s from './scss/_contactus.module.scss'

const ContactUs = () => {
  return (
    <>
      <main className={s['contact-us']}>
        <ContactAds />
        <Contact />
      </main>
    </>
  )
}

export default ContactUs