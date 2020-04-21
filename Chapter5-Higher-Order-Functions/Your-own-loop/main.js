// Your code here.
function loop(value, test, update, body){
    let currentValue = value;

    while(test(currentValue)){
        body(currentValue);
        currentValue = update(currentValue);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
