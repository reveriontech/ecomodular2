import s from './scss/_banner.module.scss'
import { Check } from 'lucide-react'

// Import GIFs
import timeGif from '@/assets/gif/time.gif'
import shieldGif from '@/assets/gif/shield.gif'
import leavesGif from '@/assets/gif/leaves.gif'

const features = [
    {
        title: 'SPEED',
        gif: timeGif,
        colorClass: s.speed,
        items: [
            {
                bold: 'Rapid Project Start:',
                text: 'Pre-engineered, completed designs allow construction to begin immediately without lengthy design phases.'
            },
            {
                bold: 'Increased Efficiency:',
                text: 'Simultaneous on-site preparation and off-site manufacturing significantly shortens the overall project timeline.'
            },
            {
                bold: 'Fast Installation:',
                text: 'Modular components are quickly assembled on-site, drastically reducing construction time compared to traditional methods.'
            }
        ]
    },
    {
        title: 'QUALITY',
        gif: shieldGif,
        colorClass: s.quality,
        hasBadge: true,
        items: [
            {
                bold: 'Rigorous Factory Control:',
                text: 'A controlled manufacturing environment enables 20-25 specific quality checks for each module.'
            },
            {
                bold: 'Superior Standards:',
                text: 'Built to meet the highest standards for finishing, acoustics, fire safety, and thermal efficiency.'
            },
            {
                bold: 'Proven Reliability:',
                text: "The system's quality is validated by standard projects that have been successfully completed and installed."
            }
        ]
    },
    {
        title: 'ENVIRONMENT',
        gif: leavesGif,
        colorClass: s.environment,
        items: [
            {
                bold: 'Low Energy Consumption:',
                text: "Highly insulated modules are designed for reduced operational energy use over the building's lifespan."
            },
            {
                bold: 'Cleaner Construction:',
                text: 'Off-site manufacturing means a cleaner, quieter worksite with minimal disturbance to neighbors and surroundings.'
            },
            {
                bold: 'Reduced Carbon Footprint:',
                text: 'A shorter project lifecycle and optimized logistics lead to a significant reduction in total CO2 emissions.'
            }
        ]
    }
]

const Banner = () => {
    return (
        <div className={s.bannerSection}>
            <div className={s.container}>
                <div className={s.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={`${s.card} ${feature.colorClass}`}>
                            {'hasBadge' in feature && feature.hasBadge && (
                                <span className={s.badge}>EcoModular</span>
                            )}
                            <div className={s.cardHeader}>
                                <h3 className={s.title}>{feature.title}</h3>
                                <div className={s.gifWrapper}>
                                    <img src={feature.gif} alt={feature.title} className={s.gif} />
                                </div>
                            </div>

                            <div className={s.divider}></div>

                            <ul className={s.list}>
                                {feature.items.map((item, idx) => (
                                    <li key={idx} className={s.listItem}>
                                        <div className={s.checkIcon}>
                                            <Check size={16} />
                                        </div>
                                        <p className={s.text}>
                                            <span className={s.boldText}>{item.bold}</span> {item.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Banner