const generateButton = document.getElementById('generate');
const tableContainerTopRow = document.getElementById('top-row');
const tableContainerBottomRow = document.getElementById('bottom-row');


generateButton.addEventListener('click',() => {
  clearAllTables();
  renderNumberTables();
});


const clearAllTables=()=>
{
  tableContainerBottomRow.innerHTML = '';
  tableContainerTopRow.innerHTML = '';
}

const renderNumberTables = ()=>{
  for(let i=1; i<=10; i++){
    const table = createTable(i);

    if(i<=5) tableContainerTopRow.appendChild(table);
    else tableContainerBottomRow.appendChild(table);
  }
}


const createTable = (number)=>{
  const table = document.createElement('table');
  for(let i=1; i<=10; i++)
  {
    const tableRow = createTableRow(number,i);
    table.appendChild(tableRow);
  }
  return table;
}

const createTableRow = (number,i)=>{
  const row = document.createElement('tr');
  const cells=[];
  for(let j=0; j<5;j++)
  {
    cells.push(document.createElement('td'));
  }
  cells[0].innerText=number;
  cells[1].innerText='*';
  cells[2].innerText=i;
  cells[3].innerText='=';
  cells[4].innerText=number*i;

  row.append(...cells);
  return row;
}