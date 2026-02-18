// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../context/Theme";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Layout() {
    return (
        <>
            <ThemeProvider>
                <Header />
                <Outlet />
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default Layout;