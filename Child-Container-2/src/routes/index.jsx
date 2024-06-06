import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "../component/container2";
import PageA from "../component/pageA";
import PageB from "../component/pageB";

const ChildRouter = () => {
    return (
        <React.Suspense fallback="Loading">
            <Routes>
                <Route index element={<Container />} />
                <Route path="/page-A" element={<PageA />} />
                <Route path="/page-B" element={<PageB />} />
            </Routes>
        </React.Suspense>
    )
}

export default ChildRouter;