function cash(x) {
    let result = 10000 - x;
    return result;
}

let personChoice = prompt("Enter the amount of money you would like to withdraw:");

if(personChoice < 10000) {
    console.log(`${personChoice}$ Withdrawn Amount`);
    console.log(`${cash(personChoice)}$ Balance`);
} else if(personChoice > 10000) {
    console.log("Not enough money on your credit card");
} else {
    console.log("Enter valid number");
}