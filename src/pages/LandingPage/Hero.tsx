import styles from './scss/_hero.module.scss'
import heroVideo from '@/assets/videos/mainhero.mp4'
import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const currentRef = heroRef.current
        if (!currentRef) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                })
            },
            {
                threshold: 0.1,
            }
        )

        observer.observe(currentRef)

        return () => {
            observer.unobserve(currentRef)
        }
    }, [])

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }

    return (
        <div ref={heroRef} className={styles.hero}>
            <video
                className={`${styles.hero__video} ${isVisible ? styles.hero__videoAnimate : ''}`}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={heroVideo} type="video/quicktime" />
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className={`${styles.hero__container} ${isVisible ? styles.hero__containerAnimate : ''}`}>
                <div className={styles.hero__title}>
                    <p>THE FUTURE OF CONSTRUCTION</p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                className={`${styles.hero__scrollIndicator} ${isVisible ? styles.hero__scrollIndicatorAnimate : ''}`}
                onClick={scrollToContent}
                aria-label="Scroll to content"
            >
                <ChevronDown className={styles.hero__scrollArrow} />
            </button>
        </div>
    )
}

export default Hero