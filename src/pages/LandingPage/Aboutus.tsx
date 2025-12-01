import styles from './scss/_aboutus.module.scss'
import aboutUsVideo from '@/assets/videos/AboutUsVideo2.mp4'

const Aboutus = () => {
    return (
        <div className={styles.aboutus}>
            <div className={styles.aboutus__container}>
                {/* LEFT SIDE */}
                <div className={styles.aboutus__videoWrapper}>
                    <video
                        className={styles.aboutus__video}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={aboutUsVideo} type="video/mp4" />
                    </video>
                </div>

                {/* RIGHT SIDE */}
                <div className={styles.aboutus__content}>
                    <h2>Eco Modular is a leading Smart Tech Modular Manufacturing company based in the UK, Ireland, and Eastern Europe</h2>
                    <h5>Eco House, Log House, and DN Group are now playing for the Eco Modular team, forging a powerful alliance within the sector.</h5>
                    <p>We offer a complete jobsite solution, combining Smart Tech and Modular Manufacturing. From concept to completion, our turnkey solutions save time and resources, allowing customers to focus on their goals. With a strong... Eco Modular provides ultimate flexibility and... success.</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus