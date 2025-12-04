import { useState, useEffect, useRef } from "react"
import styles from "./scss/_benefits.module.scss"

// GIF imports
import timeGif from "@/assets/gif/time.gif"
import lineChartGif from "@/assets/gif/line-chart.gif"
import productivityGif from "@/assets/gif/productivity.gif"
import calendarGif from "@/assets/gif/calendar.gif"
import shieldGif from "@/assets/gif/shield.gif"
import qualitygatesGif from "@/assets/gif/qualitygates.gif"
import completionGif from "@/assets/gif/completion.gif"
import renewableEnergyGif from "@/assets/gif/renewableEnergy.gif"
import leavesGif from "@/assets/gif/leaves.gif"
import percentageChartGif from "@/assets/gif/percentage-chart.gif"
import pieChartGif from "@/assets/gif/pie-chart.gif"

type CategoryType = "speed" | "quality" | "environment"

interface BenefitItem {
    id: string
    icon: string
    label: string
    value: string
}

interface CategoryData {
    id: CategoryType
    number: number
    title: string
    highlight: string
    mainIcon: string
    items: BenefitItem[]
}

const categoriesData: CategoryData[] = [
    {
        id: "speed",
        number: 1,
        title: "with fast delivery",
        highlight: "Speed",
        mainIcon: timeGif,
        items: [
            {
                id: "speed-1",
                icon: lineChartGif,
                label: "Rapid Project Start",
                value: "Pre-engineered, completed designs allow construction to begin immediately without lengthy design phases."
            },
            {
                id: "speed-2",
                icon: productivityGif,
                label: "Increased Efficiency",
                value: "Simultaneous on-site preparation and off-site manufacturing significantly shortens the overall project timeline."
            },
            {
                id: "speed-3",
                icon: calendarGif,
                label: "Fast Installation",
                value: "Modular components are quickly assembled on-site, drastically reducing construction time compared to traditional methods."
            }
        ]
    },
    {
        id: "quality",
        number: 2,
        title: "with premium standards",
        highlight: "Quality",
        mainIcon: shieldGif,
        items: [
            {
                id: "quality-1",
                icon: qualitygatesGif,
                label: "Rigorous Factory Control",
                value: "A controlled manufacturing environment enables 20-25 specific quality checks for each module."
            },
            {
                id: "quality-2",
                icon: completionGif,
                label: "Superior Standards",
                value: "Built to meet the highest standards for finishing, acoustics, fire safety, and thermal efficiency."
            },
            {
                id: "quality-3",
                icon: renewableEnergyGif,
                label: "Proven Reliability",
                value: "The system's quality is validated by standard projects that have been successfully completed and installed."
            }
        ]
    },
    {
        id: "environment",
        number: 3,
        title: "with sustainability",
        highlight: "Environment",
        mainIcon: leavesGif,
        items: [
            {
                id: "env-1",
                icon: percentageChartGif,
                label: "Low Energy Consumption",
                value: "Highly insulated modules are designed for reduced operational energy use over the building's lifespan."
            },
            {
                id: "env-2",
                icon: pieChartGif,
                label: "Cleaner Construction",
                value: "Off-site manufacturing means a cleaner, quieter worksite with minimal disturbance to neighbors and surroundings."
            },
            {
                id: "env-3",
                icon: leavesGif,
                label: "Reduced Carbon Footprint",
                value: "A shorter project lifecycle and optimized logistics lead to a significant reduction in total CO2 emissions."
            }
        ]
    }
]

const ChevronIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="6 9 12 15 18 9" />
    </svg>
)

const Benefits = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [openCategory, setOpenCategory] = useState<CategoryType | null>("speed")
    const [selectedItem, setSelectedItem] = useState<string>("speed-1")
    const [displayedGif, setDisplayedGif] = useState<string>(lineChartGif)

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

    const handleCategoryClick = (categoryId: CategoryType) => {
        if (openCategory === categoryId) {
            setOpenCategory(null)
        } else {
            setOpenCategory(categoryId)
            // Select first item of the category when opening
            const category = categoriesData.find(c => c.id === categoryId)
            if (category && category.items.length > 0) {
                setSelectedItem(category.items[0].id)
                setDisplayedGif(category.items[0].icon)
            }
        }
    }

    const handleItemClick = (itemId: string, icon: string) => {
        setSelectedItem(itemId)
        setDisplayedGif(icon)
    }

    return (
        <section ref={sectionRef} className={styles.benefits}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2 className={`${styles.title} ${isVisible ? styles.titleAnimate : ''}`}>Benefits</h2>
                </div>

                <div className={styles.content}>
                    {/* Left side - GIF Display */}
                    <div className={`${styles.display} ${isVisible ? styles.displayAnimate : ''}`}>
                        <img
                            key={displayedGif}
                            src={displayedGif}
                            alt="Benefit illustration"
                            className={styles.displayImage}
                        />
                    </div>

                    {/* Right side - Timeline */}
                    <div className={`${styles.timeline} ${isVisible ? styles.timelineAnimate : ''}`}>
                        {categoriesData.map((category) => (
                            <div
                                key={category.id}
                                className={`${styles.category} ${styles[`category--${category.id}`]} ${isVisible ? styles.categoryAnimate : ''}`}
                            >
                                <div
                                    className={styles.categoryHeader}
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    <span
                                        className={`${styles.categoryNumber} ${openCategory === category.id ? styles['categoryNumber--active'] : ''
                                            }`}
                                    >
                                        {category.number}
                                    </span>
                                    <h3
                                        className={`${styles.categoryTitle} ${openCategory === category.id ? styles['categoryTitle--active'] : ''
                                            }`}
                                    >
                                        <span className={`${styles.highlight} ${styles[`highlight--${category.id}`]}`}>
                                            {category.highlight}
                                        </span>{" "}
                                        {category.title}
                                    </h3>
                                    <span
                                        className={`${styles.chevron} ${openCategory === category.id ? styles['chevron--open'] : ''
                                            }`}
                                    >
                                        <ChevronIcon />
                                    </span>
                                </div>

                                <div
                                    className={`${styles.itemsList} ${openCategory === category.id ? styles['itemsList--open'] : ''
                                        }`}
                                >
                                    {category.items.map((item) => (
                                        <div
                                            key={item.id}
                                            className={`${styles.item} ${styles[`item--${category.id}`]} ${selectedItem === item.id ? styles['item--active'] : ''
                                                }`}
                                            onClick={() => handleItemClick(item.id, item.icon)}
                                        >
                                            <img
                                                src={item.icon}
                                                alt={item.label}
                                                className={styles.itemIcon}
                                            />
                                            <div className={styles.itemContent}>
                                                <p className={styles.itemLabel}>{item.label}</p>
                                                <p className={`${styles.itemValue} ${styles[`itemValue--${category.id}`]}`}>
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits
