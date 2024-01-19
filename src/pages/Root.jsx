import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
const Root = () => {
    return (
        <div className="bg-neutral-800 h-screen w-full flex justify-center items-center">
            <div className="w-full h-full sm:w-[500px] sm:rounded-2xl sm:border-2 sm:border-black bg-backgroundImage bg-center bg-cover bg-no-repeat drop-shadow-2xl">
                <div className="grid grid-rows-[0.1fr,_0.8fr,_0.1fr] h-full">
                    <Header />
                    <Outlet />

                    <Navbar />
                </div>
            </div>
        </div>
    );
};

export default Root;
