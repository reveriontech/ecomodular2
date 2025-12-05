import s from './scss/_buildingads.module.scss'

const BuildingAds = () => {
    return (
        <section className={s['building-ads']}>
            {/* Background Image */}
            <div className={s['building-ads-background']}></div>

            {/* Content Overlay */}
            <div className={s['building-ads-content']}>
                <h1 className={s['building-ads-heading']}>Buildings</h1>
                <p className={s['building-ads-description']}>
                    Discover Our Exceptional Buildings Solutions Designed to Meet Your Unique Needs.
                </p>
            </div>
        </section>
    )
}

export default BuildingAds