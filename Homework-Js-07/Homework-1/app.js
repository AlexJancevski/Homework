function createTable() {
    const numColumns = prompt('How many columns do you want in the table?');
    const numRows = prompt('How many rows do you want in the table?');
    const table = document.createElement('table');

    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < numColumns; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row: ${i + 1} Column: ${j + 1}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    document.querySelector('body').appendChild(table);
}

createTable()