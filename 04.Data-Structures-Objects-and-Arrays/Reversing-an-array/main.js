function reverseArray(myArray){
    let newArray = [] ;

    for (let i = myArray.length - 1 ; i >= 0 ; i--){
        newArray.push(myArray[i]);
    }

    return newArray;

}
function reverseArrayInPlace(myArray){
    let start = 0;
    let end = myArray.length - 1;
    for (let i = 0 ; i <= myArray.length / 2 ; i++){
        let temp = myArray[start];
        myArray[start] = myArray[end];
        myArray[end] = temp;
        start++;
        end-- ;
    }
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]