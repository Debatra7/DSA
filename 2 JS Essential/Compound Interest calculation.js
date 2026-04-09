function calculateCompoundInterest(P, r, t, n) {
    // Write your logic here
    let A = P * (Math.pow((1 + r / n), (n * t)));
    let ans = A - P;
    return (ans.toFixed(2));
}

module.exports = { calculateCompoundInterest };