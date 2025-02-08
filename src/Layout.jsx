import React from 'react';
import { Header } from './components/NavBar/Header';
import  Footer  from './components/Footer/Footer';
import { Outlet } from "react-router";

function Layout() {
    return (
        <>
            <Header />
            <div className="mx-lg-5 px-lg-5 py-lg-3">  
                <Outlet />  
            </div>
            <Footer />
        </>
    );
}

export default Layout;
