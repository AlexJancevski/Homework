function sumMaxMin(array) {
    let max = Math.max(...array);
    let min = Math.min(...array);
    return max + min;
}

let array = [3, 5, 6, 8, 11];
let sum = sumMaxMin(array);

function sumMaxMin(array) {
    let numbers = array.filter(x => typeof x === 'number');
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    return max + min;
}