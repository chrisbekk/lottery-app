import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NumbersContainer from '../components/NumbersContainer';
import LotteryNumber from '../components/LotteryNumber';
import CountDown from '../components/CountDown';
const Lottery = () => {
    const location = useLocation();
    const [playerNumbers, setPlayerNumbers] = useState([]);
    const [startLottery, setStartLottery] = useState(false);
    const [startCountdown, setStartCountdown] =
        useState(true);
    const [drawNumber, setDrawNumber] = useState([]);
    const lotteryNumbers = [1, 2, 3, 4, 5, 6, 7];

    useEffect(() => {
        setPlayerNumbers(location.state.playerCoupon);
    }, []);

    return (
        <div className="grid grid-rows-[1fr_0.2fr_1fr]">
            <div className="flex justify-center items-center">
                {startCountdown && (
                    <CountDown
                        setStartCountdown={
                            setStartCountdown
                        }
                        setStartLottery={setStartLottery}
                    />
                )}
                {startLottery && (
                    <LotteryNumber
                        lotteryNumbers={lotteryNumbers}
                        setStartLottery={setStartLottery}
                        startLottery={startLottery}
                    />
                )}
            </div>
            <div className="p-3 border">Draw Number</div>

            <NumbersContainer numbers={playerNumbers} />
        </div>
    );
};

export default Lottery;

// Two parent containers; one for the actual lottery, and one for displaying the player numbers.
