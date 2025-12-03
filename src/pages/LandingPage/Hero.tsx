import styles from './scss/_hero.module.scss'
import heroVideo from '@/assets/videos/mainhero.mp4'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <video
                className={styles.hero__video}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={heroVideo} type="video/quicktime" />
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className={styles.hero__container}>
                <div className={styles.hero__title}>
                    <p>THE FUTURE OF CONSTRUCTION</p>
                </div>
            </div>
        </div>
    )
}

export default Hero