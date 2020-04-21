var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let newArr = arrays.reduce((a, b) => {return a.concat(b)},[]);
console.log(newArr);

// → [1, 2, 3, 4, 5, 6]
