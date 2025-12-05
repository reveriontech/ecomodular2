import styles from './scss/_aboutus.module.scss'
import aboutUsVideo from '@/assets/videos/AboutUsVideo2.mp4'
import { useEffect, useRef, useState } from 'react'

const Aboutus = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const currentRef = sectionRef.current
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
                threshold: 0.2,
            }
        )

        observer.observe(currentRef)

        return () => {
            observer.unobserve(currentRef)
        }
    }, [])

    return (
        <div ref={sectionRef} id="about" className={styles.aboutus}>
            <div className={styles.aboutus__container}>
                {/* LEFT SIDE */}
                <div
                    className={`${styles.aboutus__videoWrapper} ${isVisible ? styles.aboutus__videoWrapperAnimate : ''}`}
                >
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
                    <h2
                        className={isVisible ? styles.aboutus__titleAnimate : ''}
                    >
                        Eco Modular is a leading SmartTech Modular Manufacturing company based in the UK, Ireland, and Eastern Europe.
                    </h2>
                    <h4
                        className={isVisible ? styles.aboutus__subtitleAnimate : ''}
                    >
                        Eco House, Log House, and DJI Group are now playing for the Eco Modular team, forming a powerful alliance within the sector.
                    </h4>
                    <p
                        className={isVisible ? styles.aboutus__paragraphAnimate : ''}
                    >
                        We offer a complete jobsite solution, combining SmartTech and Modular Manufacturing. From concept to completion, our turnkey solutions save time and resources, allowing customers to focus on their goals. With expertise, an innovative fleet, extensive locations, and a commitment to being Ready to Work, Eco Modular provides unmatched convenience and success in the industry.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutus