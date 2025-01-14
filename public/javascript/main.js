let body = document.querySelector('body');
let grid = document.createElement('div');
grid.classList.add('grid');
body.appendChild(grid);

for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 36; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
    }
  }