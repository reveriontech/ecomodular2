import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
    LandingPage,
    Home,
} from "./LazyCodeSplitting";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>

                <Routes>

                    {/* Auth Page Routes */}
                    {/* <Route path="/login" element={<Login />} /> */}

                    {/* Landing Page Routes */}
                    <Route path="/" element={<LandingPage />}>
                        <Route index element={<Home />} />
                    </Route>

                </Routes>

                {/* <Route path="*" element={<NotFound />} /> */}
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoutes