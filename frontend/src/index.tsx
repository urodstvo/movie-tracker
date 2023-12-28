import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

import App from "./App.tsx";
import "./index.css";

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <BrowserRouter basename="/">
                <App />
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>
);
