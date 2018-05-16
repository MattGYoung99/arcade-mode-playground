// You are given a two-digit integer n. Return the sum of its digits.

const addTwoDigits = (n) => {
    let sum = 0;
    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
