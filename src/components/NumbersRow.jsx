import React from 'react';
import Number from './Number';

const NumbersRow = ({ row }) => {
    return (
        <div className="grid grid-cols-7 my-1">
            {row.map((number) => (
                <Number
                    number={number}
                    key={crypto.randomUUID()}
                />
            ))}
        </div>
    );
};

export default NumbersRow;
