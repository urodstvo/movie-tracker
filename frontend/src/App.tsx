import { useRoutes } from "react-router-dom";

import { AuthPage } from "@/pages/Auth";
import { LandingPage } from "@/pages/Landing";

import { Error404Page } from "./pages/404";

export default function App() {
    const router = useRoutes([
        {
            path: "/",
            index: true,
            element: <LandingPage />
        },
        {
            path: "/auth",
            element: <AuthPage />
        },
        {
            path: "*",
            element: <Error404Page />
        }
    ]);
    return router;
}
