import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='flex flex-col fixed h-1/4 top-1/4 left-0 w-[3%]'>
            <nav>
                <NavLink to='/'>
                    <span className="material-symbols-outlined mb-3 text-neutral-500">subscriptions</span>
                </NavLink>
                <NavLink to='/login'>
                    <span className="material-symbols-outlined mb-3 text-neutral-500">video_camera_front</span>
                </NavLink>
                <NavLink to='/settings'>
                    <span className="material-symbols-outlined mb-3 text-neutral-500">settings</span>
                </NavLink>
            </nav>
        </div>
    );
}

export default SideMenu;

