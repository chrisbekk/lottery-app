import React, { useEffect, useState } from 'react';

const LotteryNumber = ({
    lotteryNumbers,
    setStartLottery,
    startLottery,
}) => {
    const [currentNumber, setCurrentNumber] = useState(0);
    useEffect(() => {
        const timeoutId = setInterval(() => {
            console.log(currentNumber);
            // Check if currentNumber is null
            if (!currentNumber) {
                setCurrentNumber((prev) => (prev = 0));
            }
            // Check if loop has run through array
            if (currentNumber < lotteryNumbers.length - 1) {
                setCurrentNumber((prev) => prev + 1);
            }
            // Check if loop is finished
            if (
                currentNumber ===
                lotteryNumbers.length - 1
            ) {
                setStartLottery(false);
            }
        }, 4000);
        return () => clearInterval(timeoutId);
    }, [currentNumber]);

    return (
        <div>
            <span className="bg-slate-300 w-20 h-20 rounded-full flex items-center justify-center text-3xl">
                {lotteryNumbers[currentNumber]}
            </span>
        </div>
    );
};

export default LotteryNumber;
