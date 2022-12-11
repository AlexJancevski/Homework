let phonePrice = 119.95;

let phoneQuantity = 30;

let taxOne = 100;

let taxTwo = 5;

let tax = (phonePrice / taxOne) * taxTwo;

let phoneResult = (phonePrice + tax) * phoneQuantity;

console.log(phoneResult);