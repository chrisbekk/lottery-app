import React from 'react';
import { FaCircleDollarToSlot } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div className="bg-neutral-200 sm:rounded-b-2xl grid grid-cols-3">
            <div className="w-full h-full flex items-center justify-center py-2">
                <button className="h-full w-full flex flex-col justify-center items-center border-r border-neutral-400 hover:bg-neutral-300 transition">
                    <FaCircleDollarToSlot className="text-neutral-700" />
                    <p className="text-neutral-700 text-sm tracking-wide mt-1">
                        Mine Spill
                    </p>
                </button>
            </div>
            <div className="w-full h-full flex items-center justify-center py-2">
                <button className="h-full w-full flex flex-col justify-center items-center border-r border-neutral-400 hover:bg-neutral-300 transition">
                    <FaCircleDollarToSlot className="text-neutral-700" />
                    <p className="text-neutral-700 text-sm tracking-wide mt-1">
                        Mine Spill
                    </p>
                </button>
            </div>
            <div className="w-full h-full flex items-center justify-center py-2">
                <button className="h-full w-full flex flex-col justify-center items-center border-r border-neutral-400 hover:bg-neutral-300 transition">
                    <FaCircleDollarToSlot className="text-neutral-700" />
                    <p className="text-neutral-700 text-sm tracking-wide mt-1">
                        Mine Spill
                    </p>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
