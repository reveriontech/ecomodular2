import { Outlet } from "react-router-dom"
import Nav from "../components/navigation/Nav.tsx"
import s from './scss/_landing.module.scss'
// import Footer from '../components/navigation/Footer.tsx'

const LandingPage = () => {
    return (
        <>
            <Nav />

            <main className={s['landing-setup']}>
                <Outlet />
            </main>

            {/* <Footer /> */}
        </>
    )
}

export default LandingPage

