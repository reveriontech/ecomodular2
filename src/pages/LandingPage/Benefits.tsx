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

const Benefits = () => {
    return (
        <section className={styles.benefits}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Benefits</h2>
                </div>

                <div className={styles.grid}>
                    {/* Speed Banner */}
                    <div className={`${styles.card} ${styles['card--speed']}`}>
                        <div className={styles.card__header}>
                            <img src={timeGif} alt="Speed" className={styles.card__icon} />
                            <h3 className={styles.card__title}>SPEED</h3>
                        </div>

                        <div className={styles.card__stats}>
                            <div className={styles.stat}>
                                <img src={lineChartGif} alt="Productivity Lift" className={styles.stat__icon} />
                                <span className={styles.stat__label}>Productivity Lift (YTD)</span>
                            </div>

                            <div className={styles.stat}>
                                <img src={productivityGif} alt="Labor Productivity" className={styles.stat__icon} />
                                <div className={styles.stat__value}>
                                    <span className={styles.stat__number}>28%</span>
                                    <span className={styles.stat__plus}>+</span>
                                </div>
                                <span className={styles.stat__label}>Labor Productivity</span>
                            </div>

                            <div className={styles.stat}>
                                <img src={calendarGif} alt="Schedule Variance" className={styles.stat__icon} />
                                <span className={styles.stat__number}>&lt;1%</span>
                                <span className={styles.stat__label}>Schedule Variance</span>
                            </div>
                        </div>
                    </div>

                    {/* Quality Banner */}
                    <div className={`${styles.card} ${styles['card--quality']}`}>
                        <div className={styles.card__header}>
                            <img src={shieldGif} alt="Quality" className={styles.card__icon} />
                            <h3 className={styles.card__title}>QUALITY</h3>
                        </div>

                        <div className={styles.card__stats}>
                            <div className={styles.stat}>
                                <img src={qualitygatesGif} alt="Quality Gates" className={styles.stat__icon} />
                                <div className={styles.stat__value}>
                                    <span className={styles.stat__prefix}>ISO 9001</span>
                                    <span className={styles.stat__number}>42</span>
                                </div>
                                <span className={styles.stat__label}>Quality Gates</span>
                            </div>

                            <div className={styles.stat}>
                                <img src={completionGif} alt="On-Time Completion" className={styles.stat__icon} />
                                <span className={styles.stat__number}>98.5%</span>
                                <span className={styles.stat__label}>On-Time Completion</span>
                            </div>

                            <div className={styles.stat}>
                                <img src={renewableEnergyGif} alt="Renewable Energy" className={styles.stat__icon} />
                                <span className={styles.stat__number}>100%</span>
                                <span className={styles.stat__label}>Renewable Energy</span>
                            </div>
                        </div>
                    </div>

                    {/* Environment Banner */}
                    <div className={`${styles.card} ${styles['card--environment']}`}>
                        <div className={styles.card__header}>
                            <img src={leavesGif} alt="Environment" className={styles.card__icon} />
                            <h3 className={styles.card__title}>ENVIRONMENT</h3>
                        </div>

                        <div className={styles.card__stats}>
                            <div className={styles.stat}>
                                <img src={percentageChartGif} alt="CO2 Footprint" className={styles.stat__icon} />
                                <span className={styles.stat__number}>35%</span>
                                <span className={styles.stat__label}>- CO<sub>2</sub> Footprint</span>
                            </div>

                            <div className={styles.stat}>
                                <img src={pieChartGif} alt="Material Waste" className={styles.stat__icon} />
                                <span className={styles.stat__number}>100%</span>
                                <span className={styles.stat__label}>Material Waste &lt; 3%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits
