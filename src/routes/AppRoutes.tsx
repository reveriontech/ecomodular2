import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
    LandingPage,
    Home,
    ContactUs,
} from "./LazyCodeSplitting";
import PulseLoader from "../components/loader/PulseLoader";
import ScrollToTop from "../components/ScrollToTop";
import styles from "./scss/AppRoutes.module.scss";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={
                <div className={styles.loadingWrapper}>
                    <PulseLoader size={40} />
                </div>
            }>

                <Routes>

                    {/* Auth Page Routes */}
                    {/* <Route path="/login" element={<Login />} /> */}

                    {/* Landing Page Routes */}
                    <Route path="/" element={<LandingPage />}>
                        <Route index element={<Home />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                    </Route>

                </Routes>

                {/* <Route path="*" element={<NotFound />} /> */}
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoutes