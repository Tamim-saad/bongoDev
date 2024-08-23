const generateButton = document.getElementById('generate');
const tableContainerTopRow = document.getElementById('top-row');
const tableContainerBottomRow = document.getElementById('bottom-row');

generateButton.addEventListener('click', () => {
  clearAllTables();
  renderNumberTables();
});

const clearAllTables = () => {
  tableContainerBottomRow.innerHTML = '';
  tableContainerTopRow.innerHTML = '';
};

const renderNumberTables = () => {
  for (let number = 1; number <= 10; number++) {
    const table = generateTable(number);

    if (number <= 5) {
      tableContainerTopRow.appendChild(table);
    } else {
      tableContainerBottomRow.appendChild(table);
    }
  }
};

const generateTable = (number) => {
  const table = document.createElement('table');
  table.className = 'table-auto border border-slate-700 w-full';

  const tableBody = document.createElement('tbody');

  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const row = generateRow(number, rowNo);
    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);

  return table;
};

const generateRow = (number, rowNo) => {
  const row = document.createElement('tr');

  const cells = [];
  for (let cellCount = 1; cellCount <= 5; cellCount++) {
    const cell = document.createElement('td');
    cells.push(cell);
  }

  cells[0].innerText = number;
  cells[1].innerText = ' x ';
  cells[2].innerText = rowNo;
  cells[3].innerText = ' = ';
  cells[4].innerText = number * rowNo;

  row.append(...cells);

  return row;
};
