function createBigString(strings) {
    return strings.join(' ');
}

let array = ["Hello", "there", "students", "of", "SEDC", "!"];
let bigString = createBigString(array);

console.log(bigString); // "Hello there students of SEDC !"