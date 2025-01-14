let body = document.querySelector('body');
let grid = document.createElement('div');
let bar = document.createElement('div');
grid.classList.add('grid');
bar.classList.add('bar');
body.appendChild(grid);
body.appendChild(bar);

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
    }
}

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        const cell2 = document.createElement('div');
        cell2.classList.add('cell2');
        bar.appendChild(cell2);
    }
}


