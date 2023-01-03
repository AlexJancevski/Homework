const body = document.querySelector('body');

const recipeName = prompt('What is the name of the recipe?');
const heading = document.createElement('h1');

heading.textContent = recipeName;

body.appendChild(heading);

const numIngredients = prompt('How many ingredients do we need for the recipe?');
const list = document.createElement('ul');

for (let i = 0; i < numIngredients; i++) {
    const ingredientName = prompt(`What is the name of ingredient #${i + 1}?`);
    const item = document.createElement('li');
    item.textContent = ingredientName;
    list.appendChild(item);
}

body.appendChild(list);

const table = document.createElement('table');

for (let i = 0; i < numIngredients; i++) {
    const ingredientName = prompt(`What is the name of ingredient #${i + 1}?`);
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = ingredientName;

    row.appendChild(nameCell);
    table.appendChild(row);
}

body.appendChild(table);