import React from 'react';

const Number = ({ number }) => {
    return (
        <div className="h-6 w-6 mx-auto text-sm bg-slate-300 rounded-full flex justify-center items-center">
            {number}
        </div>
    );
};

export default Number;
