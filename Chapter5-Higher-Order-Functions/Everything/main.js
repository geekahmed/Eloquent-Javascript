

// Version 1
function every(array, test) {
    // Your code here.
        for (let e of array){
          if (!test(e))
              return false;
      }
      return true;
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

//Version 2

function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  }
  


