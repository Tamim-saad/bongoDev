const numberInput = document.getElementById('input-number');
const tableBody = document.getElementById('table-body');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', () => {
  const number = parseInt(numberInput.value);

  clearTable();

  generateTable(number);
});

function clearTable() {
  tableBody.innerHTML = '';
}

function generateTable(number) {
  for (let i = 1; i <= 10; i++) {
    const row = createRow(number, i);
    tableBody.appendChild(row);
  }
}

function createRow(number, i) {
  const cells = [];
  for (let i = 1; i <= 5; i++) {
    cells.push(document.createElement('td'));
  }

  cells[0].innerText = number;
  cells[1].innerText = ' x ';
  cells[2].innerText = i;
  cells[3].innerText = ' = ';
  cells[4].innerText = number * i;

  const row = document.createElement('tr');
  for (let i = 0; i < cells.length; i++) {
    row.appendChild(cells[i]);
  }
  // row.append(...cells); // shortcut

  return row;
}
