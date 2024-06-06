import React from "react";
import { Route, Routes } from "react-router-dom";

const ChildApp2 = React.lazy(() => import('child2/ChildApp-2'))

const HostRouter = () => {
    return (
        <React.Suspense fallback="Loading">
            <Routes>
                {/* <Route index element={<HomePage />} /> */}
                <Route path="/child-2/*" element={<ChildApp2 />} />
            </Routes>
        </React.Suspense>
    )
}

export default HostRouter;