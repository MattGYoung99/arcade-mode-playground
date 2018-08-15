
//Product of all other numbers
// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function that takes an array of integers and returns an array of the products.

const getProducts = (arr) => {
    const products = [];
    for (var x in arr) {
      let number = 1;
      arr.map((item,index,array) => {
        if (arr[x] !== item) {
          number *= item
        }
      })
      products.push(number)
    }
    return products
  }