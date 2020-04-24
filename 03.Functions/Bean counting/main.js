// Your code here.
function countBs(str){
    return countChar(str, "B");
}

function countChar(strToCount, char){
    let counter = 0 ; 
    for (const e of strToCount){
        if (e == char){
            counter += 1;
        }
    }
    return counter;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4