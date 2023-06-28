import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

const Home = lazy(() => import('../pages/Home'))

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />} >
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}