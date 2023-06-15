import React from "react";
import { Outlet } from "react-router";
import NavBar from "./components/nav/NavBar";

const Layout = () => {
    return(
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
};

export default Layout;