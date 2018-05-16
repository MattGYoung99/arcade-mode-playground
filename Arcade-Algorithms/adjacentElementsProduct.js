// INSTRUCTIONS
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
    let product = Number.NEGATIVE_INFINITY;
        for (let x=0;x<inputArray.length-1;x++) {
            if (product < inputArray[x] * inputArray[x+1]) product = inputArray[x] * inputArray[x+1]
        }
    return product;
}
