import s from './scss/_buildings.module.scss'
import Buildings from './buildings-page/Buildings'
import BuildingAds from './buildings-page/BuildingAds'

const BuildingsPage = () => {
    return (
        <>
            <main className={s.buildingsPage}>
                <BuildingAds />
                <Buildings />
            </main>
        </>
    )
}

export default BuildingsPage