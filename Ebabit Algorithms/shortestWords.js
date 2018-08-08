// Create a function that accepts a string as an argument.
// Find its shortest word(s) and return them as an array sorted alphabetically (if there are multiple shortest words).

// Rules:

//     Periods, commas and other special characters don't count as part of a word's length.
//     Return words in lowercase only.
//     Sort words alphabetically.

// Examples:

//  "The quick brown fox jumped over the lazy dogs back." ➞ ['fox', 'the', 'the']

//  "I think the solution is fairly obvious." ➞ ['i']

//  "Chase two rabbits, catch none." ➞ ['two']

//  "We become what we think about." ➞ ['we', 'we']

// Notes:

// Remember to sort the array of words alphabetically before returning your result.


const findShortestWords = (str) => {
    const regex = /[a-z]+/gi
    const allWordLengths = [];
    str = str.split('').filter(item => {
      return item != ',' && item != '.'
    }).join('').split(' ')
    for (var x in str) allWordLengths.push(str[x].length)
    allWordLengths.sort((a,b) => a-b)
    return str.filter(x => x.length == allWordLengths[0] && x.match(regex)).join(' ').toLowerCase().split(' ').sort()
}
  
  
  findShortestWords("The quick brown fox jumped over the lazy dogs back.")
  //findShortestWords("I think the solution is fairly obvious.")
  //findShortestWords("Chase two rabbits, catch none.")
  //findShortestWords("We become what we think about.")