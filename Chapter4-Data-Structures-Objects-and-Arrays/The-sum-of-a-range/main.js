// Your code here.
function myRange(start, end, step = 1){
    let myResult = [];
    if (step > 0 ){
        for (let i = start; i <= end ; i += step){
            myResult.push(i);
        }
    } else {
        for (let i = start; i >= end ; i += step){
            myResult.push(i);
        }
    }
   
    return myResult;
}
function sumOfArray(arr){
    let sum = 0 ; 
    for (let i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(myRange(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myRange(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sumOfArray(myRange(1, 10)));
// → 55