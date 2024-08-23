const employeeData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'Engineering',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Product Manager',
    department: 'Product',
  },
  { id: 3, name: 'Sam Johnson', position: 'Designer', department: 'Design' },
  {
    id: 4,
    name: 'Chris Lee',
    position: 'Data Scientist',
    department: 'Data',
  },
];

const createEmployeeRow = (employee) => {
  const cells = [];
  for (let i = 1; i <= 4; i++) {
    const cell = document.createElement('td');
    cell.className = 'border px-4 py-2';
    cells.push(cell);
  }

  cells[0].innerText = employee.id;
  cells[1].innerText = employee.name;
  cells[2].innerText = employee.position;
  cells[3].innerText = employee.department;

  const employeeRow = document.createElement('tr');
  employeeRow.className = 'hover:bg-gray-100';
  employeeRow.append(...cells);

  return employeeRow;
};

const renderEmployeeTable = () => {
  const tableBody = document.getElementById('employeeTableBody');

  employeeData.forEach((employee) => {
    const employeeRow = createEmployeeRow(employee);
    tableBody.appendChild(employeeRow);
  })
};

renderEmployeeTable();
