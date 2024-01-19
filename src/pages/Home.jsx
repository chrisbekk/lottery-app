import React, { useState } from 'react';
import {
    useNavigate,
    useSearchParams,
} from 'react-router-dom';
import generatePlayerNumbers from '../hooks/generatePlayerNumbers';
const Home = () => {
    const navigate = useNavigate();
    function handleClick() {
        const playerCoupon = generatePlayerNumbers();

        navigate('/lottery', {
            state: { playerCoupon },
        });
    }
    return (
        <div className="flex items-center justify-center">
            <button
                onClick={handleClick}
                className="bg-amber-400 border-2 border-white px-12 py-6 rounded-2xl drop-shadow-lg hover:bg-amber-500 transition-colors"
            >
                <p className="text-xl tracking-wider">
                    Spill
                </p>
            </button>
        </div>
    );
};

export default Home;
