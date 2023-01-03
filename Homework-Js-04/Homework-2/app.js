function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

let result = sumNumbers([1, 2, 3, 4, 5]);
console.log(result);

function validateNumber(number) {
    if (typeof number !== "number") {
        return false;
    }
    return true;
}

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (!validateNumber(numbers[i])) {
            console.log("Error: Invalid number in array.");
            return;
        }
        sum += numbers[i];
    }
    return sum;
}