import s from './scss/_projects.module.scss'
import apartmentsImg from '@/assets/buildings/Ecomodular-Projects-apartments.jpg'
import hotelsImg from '@/assets/buildings/Ecomodular-Projects-hotels.jpg'
import nursingHomesImg from '@/assets/buildings/Ecomodular-Projects-Nursing-home.jpg'
import resedential from '@/assets/buildings/Ecomodular-Projects-residential-housing.jpg'
import studentAccommodationImg from '@/assets/buildings/Ecomodular-Projects-student-accomodation.jpg'
import bathroom from '@/assets/buildings/Ecomodular-Bathroom-Pods-1-1.jpg'
import { useEffect, useRef, useState } from 'react'


const projects = [
    {
        name: 'HOTELS',
        image: hotelsImg
    },
    {
        name: 'APARTMENTS',
        image: apartmentsImg
    },
    {
        name: 'NURSING HOMES',
        image: nursingHomesImg
    },
    {
        name: 'Social Housing',
        image: resedential
    },
    {
        name: 'STUDENT ACCOMMODATION',
        image: studentAccommodationImg
    },
    {
        name: 'Bathroom Pods',
        image: bathroom
    },
]



const Projects = () => {
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
        <div ref={sectionRef} className={s.projects}>
            <div className={s.wrapper}>
                <div className={`${s.title} ${isVisible ? s.titleAnimate : ''}`}>
                    <p> Building Systems </p>
                </div>

                <div className={s.pictures}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${s.projectCard} ${isVisible ? s.projectCardAnimate : ''}`}
                        >
                            <div className={s.imageContainer}>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className={s.image}
                                    loading='lazy'
                                />
                                <div className={s.titleOverlay}>
                                    <h3 className={s.projectTitle}>{project.name}</h3>
                                </div>
                                <div className={s.overlay}>
                                    <div className={s.content}>
                                        <h3 className={s.projectTitle}>{project.name}</h3>
                                        <button className={s.seeMoreBtn}>See more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects