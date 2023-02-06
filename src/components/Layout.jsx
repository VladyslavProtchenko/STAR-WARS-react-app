import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu/SideMenu';
//style
const box = 'flex flex-col items-center min-h-screen w-screen'
const Layout = () => {
    return (
        <div className={box}>
            <SideMenu/>
            <Outlet/>
        </div>
    );
}

export default Layout;