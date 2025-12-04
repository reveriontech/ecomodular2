import s from './scss/_contactads.module.scss'

const ContactAds = () => {
    return (
        <section className={s['contact-ads']}>
            {/* Background Image */}
            <div className={s['contact-ads-background']}></div>

            {/* Content Overlay */}
            <div className={s['contact-ads-content']}>
                <h1 className={s['contact-ads-heading']}>Let's Talk!</h1>
                <p className={s['contact-ads-description']}>
                    Providing Comprehensive and Tailored Solutions to Address Your Unique Business Challenges and Achieve Optimal Results.
                </p>
            </div>
        </section>
    )
}

export default ContactAds