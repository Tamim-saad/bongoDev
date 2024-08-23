const tableBody = document.getElementById('table-container');
const numberInput = document.getElementById('input-number');
const generateButton = document.getElementById('generate');

generateButton.addEventListener('click', () => {
  const number = parseInt(numberInput.value);
  clearTable();
  generateTable(number);
});

function generateTable(number) {
  for (let i = 1; i < 10; i++) {
    // const cell = document.createElement('td');
    // cell.innerText = `${number}*${i} = ${number * i}`;

    const row = createRow(number, i);
    // document.createElement('tr');
    // row.appendChild(cell);

    tableBody.appendChild(row);
  }
}

function clearTable() {
  tableBody.innerHTML = '';
}

function createRow(number, i) {
  const cells = [];
  for (let i = 0; i < 5; i++) {
    cells.push(document.createElement('td'));
  }

  cells[0].innerText = number;
  cells[1].innerText = '*';
  cells[2].innerText = i;
  cells[3].innerText = '=';
  cells[4].innerText = number * i;

  const row = document.createElement('tr');

  row.append(...cells);
  // for (let i = 0; i < 5; i++) {
  //   row.appendChild(cells[i]);
  // }

  return row;
}
