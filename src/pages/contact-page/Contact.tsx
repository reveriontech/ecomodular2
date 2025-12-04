import { useState } from 'react'
import s from './scss/_contactus.module.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    gdpr: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const services = [
    'Obligation Free Consultation',
    'Accurate Budget Quotations',
    'Latest Technologies',
    'Eco Friendly Construction'
  ]

  return (
    <section className={s['contact-us']}>
      <div className={s['contact-us-wrapper']}>
        {/* Left Column - Services List */}
        <div className={s['contact-us-left']}>
          <h2 className={s['contact-us-heading']}>HOW CAN WE CAN HELP?</h2>
          <ul className={s['services-list']}>
            {services.map((service, index) => (
              <li key={index} className={s['service-item']}>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div className={s['contact-us-right']}>
          <form className={s['contact-form']} onSubmit={handleSubmit}>
            <div className={s['form-group']}>
              <label htmlFor="name" className={s['form-label']}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={s['form-input']}
                required
              />
            </div>

            <div className={s['form-group']}>
              <label htmlFor="email" className={s['form-label']}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className={s['form-input']}
                required
              />
            </div>

            <div className={s['form-group']}>
              <label htmlFor="phone" className={s['form-label']}>Phone No</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className={s['form-input']}
                required
              />
            </div>

            <div className={s['form-group']}>
              <label htmlFor="subject" className={s['form-label']}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={s['form-input']}
                required
              />
            </div>

            <div className={s['form-group']}>
              <label htmlFor="message" className={s['form-label']}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className={s['form-textarea']}
                rows={5}
                required
              />
            </div>

            <div className={s['form-group']}>
              <div className={s['gdpr-section']}>
                <label htmlFor="gdpr" className={s['gdpr-label']}>
                  GDPR Agreement <span className={s['required']}>*</span>
                </label>
                <div className={s['gdpr-checkbox-wrapper']}>
                  <input
                    type="checkbox"
                    id="gdpr"
                    name="gdpr"
                    checked={formData.gdpr}
                    onChange={handleChange}
                    className={s['form-checkbox']}
                    required
                  />
                  <label htmlFor="gdpr" className={s['gdpr-text']}>
                    I consent to having my information stored in order for Eco Modular to respond to my inquiry.
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" className={s['submit-button']}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact