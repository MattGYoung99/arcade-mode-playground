
// Purge and Organize

// Given an array of numbers, write a function that returns an array that...

//     Has all duplicate elements removed.
//     Is sorted from least to greatest value.

const uniqueSort = (arr) => {
    arr = arr.sort((a,b) => {
        return a-b;	
    });
    return arr.filter((item, index, arr) => {
        if (arr[index+1] || arr[index-1]) {
         return arr[index] !== arr[index+1];
        }
  })
}