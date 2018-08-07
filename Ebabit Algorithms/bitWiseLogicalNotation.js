// Given a number (positive, negative, or 0), return the logical negation (as a 1 or 0) of that number. Do so using only bitwise operators:

//          ~, &, |, ^, >>, <<, +

// Any of these characters / constructs are not allowed:

//          if, do, while, for, switch, -, ?, :, !, ||, &&, == , [,], functions

// Examples:

//      1  ➞ 0

//      5  ➞ 0

//      0  ➞ 1

//      3 ➞ 0

// Notes:
// Use as few operators as possible for more of a challenge.


const bitWiseLogicalNotation = (x) => (((x << 32) >> 31) + 1)