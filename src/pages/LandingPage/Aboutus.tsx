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
                    <h2>Eco Modular is a leading SmartTech Modular Manufacturing company based in the UK, Ireland, and Eastern Europe.</h2>
                    <h4>Eco House, Log House, and DJI Group are now playing for the Eco Modular team, forming a powerful alliance within the sector.</h4>
                    <p>We offer a complete jobsite solution, combining SmartTech and Modular Manufacturing. From concept to completion, our turnkey solutions save time and resources, allowing customers to focus on their goals. With expertise, an innovative fleet, extensive locations, and a commitment to being Ready to Work, Eco Modular provides unmatched convenience and success in the industry.</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus