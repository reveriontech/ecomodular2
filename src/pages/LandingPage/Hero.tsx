import styles from './scss/_hero.module.scss'
import heroVideo from '@/assets/videos/HeroBG.mov'

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
                <h1>Hero</h1>
            </div>
        </div>
    )
}

export default Hero