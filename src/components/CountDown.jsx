import React, { useEffect, useState } from 'react';

const CountDown = ({
    setStartCountdown,
    setStartLottery,
}) => {
    const [countDown, setCountDown] = useState(3);
    useEffect(() => {
        const countdownId = setInterval(() => {
            if (countDown !== 0) {
                setCountDown((prev) => prev - 1);
            }
            if (countDown === 0) {
                setStartCountdown(false);
                setStartLottery(true);
            }
        }, 1000);
        return () => clearInterval(countdownId);
    });
    return (
        <div>
            <div className="text-amber-400">
                <p className="text-xl font-medium">
                    Lottery starts in:
                </p>
                <p className="text-center text-4xl font-bold">
                    {countDown}
                </p>
            </div>
        </div>
    );
};

export default CountDown;
