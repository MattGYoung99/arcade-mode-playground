// Given an integer n, return the largest number that contains exactly n digits.

const largestNumber = (n) => {
    let largest = [];
    for (let x=0;x<n;x++) {
       largest.push(9);
    } 
    return (largest.length <= 0) ? 0 : parseInt(largest.join(''));
}