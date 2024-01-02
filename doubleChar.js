//question
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// answer:

const doubleChar = (str) => str.split("").map(c => c + c).join("");