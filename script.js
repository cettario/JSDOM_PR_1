const numbers = Array.from({length: 30}, () => Math.floor(Math.random() * 100));
const tableBody = document.getElementById('numbersBody');

function renderTable() {
  tableBody.innerHTML = '';

  for (let i = 0; i < numbers.length; i += 6) {
    const row = document.createElement('tr');

    for (let j = 0; j < 6; j++) {
      const cell = document.createElement('td');
      const number = numbers[i + j];

      if (number !== undefined) {
        cell.textContent = number;

        if (number >= 50) {
          cell.classList.add('highlight');
        }
      }

      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }
}

function foo() {
  numbers.push(Math.floor(Math.random() * 100));
  renderTable();
}

renderTable();
