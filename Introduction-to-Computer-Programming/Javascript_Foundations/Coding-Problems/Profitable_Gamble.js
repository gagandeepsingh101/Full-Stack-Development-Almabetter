function calculateExpectedValue(betAmount, probability) {
    const winAmount = betAmount * 2;
    const lossAmount = -betAmount;

    const expectedValue = (probability * winAmount) + ((1 - probability) * lossAmount);

    if (expectedValue > 0) {
        return "Profitable gamble!";
    } else {
        return "Not worth the risk.";
    }

    // This is my code
    // return probability >= 0.5 ? "Profitable gamble!" : "Not worth the risk.";
}
console.log(calculateExpectedValue(1000, 0.49));