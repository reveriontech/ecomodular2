import styles from './scss/_benifits.module.scss'

const benefitCategories = [
    {
        title: 'SPEED',
        theme: 'speed',
        cubeImage: 'https://ecomodular.com/wp-content/uploads/2022/04/cube-2.png',
        items: [
            'Completed design',
            'Short verification period',
            'Increased production efficiency',
            'Faster returns',
            'Fast installation',
        ],
    },
    {
        title: 'QUALITY',
        theme: 'quality',
        cubeImage: 'https://ecomodular.com/wp-content/uploads/2022/04/cube-1.png',
        items: [
            'Factory quality control -20-25 quality checks for each module',
            '2 standard projects completed & installed in Sweden',
            'Meets the highest standards of finishing, acoustic, fire safety, thermal, and energy efficiency',
        ],
    },
    {
        title: 'ENVIRONMENT',
        theme: 'environment',
        cubeImage: 'https://ecomodular.com/wp-content/uploads/2022/04/cube-4.png',
        items: [
            'Low energy consumption',
            'Built without disturbing neighbours and surroundings – cleaner construction site',
            'Reduction in CO2 emissions due to shorter project lifecycle',
        ],
    },
]

const Benifits = () => {
    return (
        <section className={styles.benifits}>
            <div className={styles.wrapper}>
                <div className={styles.heading}>
                    <h2>Benefits</h2>
                </div>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                {benefitCategories.map(({ title, theme }) => (
                                    <th key={title} className={styles.tableHeader} data-theme={theme}>
                                        <div className={styles.headerContent}>
                                            <span className={styles.headerTitle}>{title}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {benefitCategories.map(({ title, items, theme, cubeImage }) => (
                                    <td key={title} className={styles.benefitColumn} data-theme={theme}>
                                        <ul className={styles.featuresList}>
                                            {items.map((item) => (
                                                <li key={item} className={styles.featureItem}>
                                                    <img 
                                                        src={cubeImage} 
                                                        alt={`${title} cube icon`}
                                                        className={styles.cubeIcon}
                                                        loading='lazy'
                                                    />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Benifits