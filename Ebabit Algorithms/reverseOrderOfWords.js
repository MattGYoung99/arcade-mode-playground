
// Write a function that takes a string of one or more words as an argument and returns the same string
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.


// Examples
// ================================================================
// "Reverse" ➞ "esreveR"

// "This is a typical sentence." ➞ "This is a lacipyt .ecnetnes"

// "The dog is big." ➞ "The dog is big."
//  ===============================================================

const reverseStr = (str) => {
    str = str.split(' ')
    for (var x in str) {
      if (str[x].length >= 5) {
        str[x] = str[x].split('').reverse().join('')
      }
    }
    return str
  }