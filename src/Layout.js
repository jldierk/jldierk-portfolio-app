import React from "react";
import { Outlet } from "react-router";
import NavBar from "./components/nav/NavBar";
import { ExternalLinkSVG } from "./components/svgs/commonSVGs";

const Layout = () => {
    return(
        <>
            {/* <NavBar/> */}
            <Outlet/>
            <div className='footer'>
                This website was created with React. View the source code <a className='external-link' href="https://github.com/jldierk/jldierk-portfolio-app" target='_blank'><b>here</b><ExternalLinkSVG/></a>                            
            </div>
        </>
    );
};

export default Layout;