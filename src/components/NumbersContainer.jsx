import React from 'react';
import NumbersRow from './NumbersRow';

const NumbersContainer = ({ numbers }) => {
    return (
        <div className="p-2 bg-rose-800">
            {numbers.map((row, i) => (
                <NumbersRow row={row} key={i} />
            ))}
        </div>
    );
};

export default NumbersContainer;
