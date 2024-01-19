function generatePlayerNumbers() {
    const playerCoupon = [];
    for (let i = 0; i < 10; i++) {
        const playerRow = [];
        while (playerRow.length < 7) {
            const randomNumber = Math.floor(
                Math.random() * (34 - 1 + 1) + 1,
            );
            if (!playerRow.includes(randomNumber)) {
                playerRow.push(randomNumber);
            }
        }
        playerCoupon.push(playerRow);
    }

    return playerCoupon;
}

export default generatePlayerNumbers;
