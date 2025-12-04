import s from './scss/_video.module.scss'
import { useEffect, useRef, useState } from 'react'

const Video = () => {
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
        <div ref={sectionRef} className={s.video}>
            <div className={s.video__overlay}></div>
            <div className={s.video__container}>
                <div className={s.video__content}>
                    <div className={`${s.video__content__title} ${isVisible ? s.video__content__titleAnimate : ''}`}>
                        <h2>EcoModular Building System</h2>
                    </div>
                    <div className={`${s.video__content__embed} ${isVisible ? s.video__content__embedAnimate : ''}`}>
                        <iframe
                            src="https://www.youtube.com/embed/Q5OGDZAFUMU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                        <div className={s.video__content__embed__overlay}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video