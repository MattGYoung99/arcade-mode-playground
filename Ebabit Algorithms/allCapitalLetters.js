// Create a function that takes a single string as argument and returns an ordered list containing the indexes of all capital letters in the string.
// Examples:

//  "eDaBiT" ➞ [1, 3, 5]

//  "eQuINoX" ➞ [1, 3, 4, 6]

//  "determine" ➞ []

//  "STRIKE" ➞ [0, 1, 2, 3, 4, 5]

//  "sUn" ➞ [1]

// Notes

//     Return an empty array if no uppercase letters are found in the string.
//     Special characters ($#@%) and numbers will be included in some test cases.

const indexOfCaps = (str) => {
    const regex = /[A-Z]/g, indexOfAllCaps = [];
      str = str.split('');
    for (var x in str) {
      if (regex.test(str[x])) {
        indexOfAllCaps.push(parseInt(x))
      }
    }
    return indexOfAllCaps;
  }
