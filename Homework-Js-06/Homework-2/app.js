const numbers = [2, 4, 5];
const body = document.querySelector('body');
const list = document.createElement('ul');

numbers.forEach(number => {
    const item = document.createElement('li');
    item.textContent = number;
    list.appendChild(item);
});

body.appendChild(list);

let sum = 0;
numbers.forEach(number => {
    sum += number;
});

const sumParagraph = document.createElement('p');
sumParagraph.textContent = `The sum of the numbers is: ${sum}`;

body.appendChild(sumParagraph);

// Bonus: Print the whole equation
let equation = '';
numbers.forEach((number, index) => {
    equation += number;
    if (index < numbers.length - 1) {
        equation += ' + ';
    }
});
equation += ` = ${sum}`;

const equationParagraph = document.createElement('p');
equationParagraph.textContent = equation;

body.appendChild(equationParagraph);