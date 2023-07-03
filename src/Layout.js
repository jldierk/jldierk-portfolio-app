import React from "react";
import { Outlet } from "react-router";
import NavBar from "./components/nav/NavBar";

const Layout = () => {
    return(
        <>
            {/* <NavBar/> */}
            <Outlet/>
            <div className='footer'>
                Created with React, and hosted on AWS using a static S3 bucket.
            </div>
        </>
    );
};

export default Layout;