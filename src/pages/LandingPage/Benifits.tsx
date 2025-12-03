import { useState, useCallback } from 'react'
import styles from './scss/_benifits.module.scss'

// Benefit images
import speedImage from '@/assets/benefits/speed.jpg'
import qualityImage from '@/assets/benefits/quality.jpg'
import environmentImage from '@/assets/benefits/environment.jpg'

interface BenefitCategory {
    title: string
    theme: string
    image: string
    subtitle: string
    description: string
    highlights: string[]
}

const benefitCategories: BenefitCategory[] = [
    {
        title: 'SPEED',
        theme: 'speed',
        image: speedImage,
        subtitle: 'Faster Project Delivery',
        description: 'Our modular construction approach dramatically reduces project timelines compared to traditional building methods. Factory-controlled manufacturing means weather delays are eliminated, and parallel site preparation and module fabrication further accelerates the process.',
        highlights: [
            'Completed design ready for immediate production',
            'Short verification period with streamlined approvals',
            'Increased production efficiency through automation',
            'Faster returns on your investment',
            'Rapid on-site installation and assembly',
        ],
    },
    {
        title: 'QUALITY',
        theme: 'quality',
        image: qualityImage,
        subtitle: 'Superior Construction Standards',
        description: 'Every module undergoes rigorous quality control in our state-of-the-art manufacturing facilities. Our precision engineering ensures consistent, high-quality results that meet and exceed the most stringent building standards across Europe.',
        highlights: [
            'Factory quality control with 20-25 quality checks per module',
            '2 standard projects successfully completed and installed in Sweden',
            'Meets highest standards for finishing quality',
            'Superior acoustic performance and sound insulation',
            'Fire safety compliance and thermal efficiency',
        ],
    },
    {
        title: 'ENVIRONMENT',
        theme: 'environment',
        image: environmentImage,
        subtitle: 'Sustainable Building Solutions',
        description: 'Our commitment to environmental responsibility is built into every aspect of our modular construction process. From material selection to energy-efficient designs, we create buildings that minimize environmental impact while maximizing comfort and efficiency.',
        highlights: [
            'Low energy consumption through smart design',
            'Construction without disturbing neighbors and surroundings',
            'Cleaner construction site with minimal waste',
            'Reduction in CO2 emissions due to shorter project lifecycle',
            'Sustainable materials and eco-friendly processes',
        ],
    },
]

const Benifits = () => {
    const [activeIndex, setActiveIndex] = useState(1) // Center card (Quality) is default
    const [showContent, setShowContent] = useState(true)

    // Calculate visible cards for carousel effect
    const getVisibleCards = useCallback(() => {
        const total = benefitCategories.length
        return [
            (activeIndex - 1 + total) % total,
            activeIndex,
            (activeIndex + 1) % total,
        ]
    }, [activeIndex])

    const visibleCards = getVisibleCards()

    const goToSlide = useCallback((index: number) => {
        setShowContent(false)
        setTimeout(() => {
            setActiveIndex(index)
            setShowContent(true)
        }, 150)
    }, [])

    const handleCardClick = (index: number) => {
        if (index !== activeIndex) {
            goToSlide(index)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleCardClick(index)
        }
    }

    const activeBenefit = benefitCategories[activeIndex]

    return (
        <section className={styles.benefits}>
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.wrapper}>
                <div className={styles.heading}>
                    <h2>Benefits</h2>
                </div>

                {/* Carousel */}
                <div className={styles.carouselContainer}>
                    <div className={styles.carousel}>
                        {visibleCards.map((cardIndex, position) => {
                            const benefit = benefitCategories[cardIndex]
                            const isCenter = position === 1
                            const isLeft = position === 0
                            const isRight = position === 2

                            return (
                                <div
                                    key={`${benefit.title}-${position}`}
                                    className={`${styles.card} ${isCenter ? styles.active : ''} ${isLeft ? styles.left : ''} ${isRight ? styles.right : ''}`}
                                    onClick={() => handleCardClick(cardIndex)}
                                    onKeyDown={(e) => handleKeyDown(e, cardIndex)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`View ${benefit.title} benefits`}
                                    data-theme={benefit.theme}
                                >
                                    <div className={styles.cardImage}>
                                        <img
                                            src={benefit.image}
                                            alt={benefit.title}
                                            loading="lazy"
                                        />
                                        <div className={styles.cardOverlay}>
                                            <div className={styles.cardTitle}>
                                                <span>{benefit.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Carousel Indicators */}
                <div className={styles.indicators}>
                    {benefitCategories.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} ${index === activeIndex ? styles.indicatorActive : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Content Below */}
                <div className={`${styles.contentContainer} ${showContent ? styles.contentVisible : ''}`}>
                    <div className={styles.contentGrid}>
                        <div className={styles.contentImage}>
                            <img
                                src={activeBenefit.image}
                                alt={activeBenefit.title}
                            />
                        </div>
                        <div className={styles.contentInfo}>
                            <ul className={styles.contentHighlights}>
                                {activeBenefit.highlights.map((highlight, idx) => (
                                    <li key={idx} className={styles.highlightItem}>
                                        <span className={styles.highlightDot} data-theme={activeBenefit.theme} />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benifits
