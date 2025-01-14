let body = document.querySelector('body');
let grid = document.createElement('div');
let bar = document.createElement('div');

let Titre = document.createElement('h1');
let texteTitre = document.createTextNode('Colorpicker du Swag');
Titre.appendChild(texteTitre);
body.appendChild(Titre);

grid.classList.add('grid');
bar.classList.add('bar');
body.appendChild(grid);
body.appendChild(bar);




let selectedColor = 0;
const colors = [
    "AliceBlue",
    "AntiqueWhite",
    "CornflowerBlue", 
    "DarkSeaGreen", 
    "SkyBlue", 
    "MediumTurquoise", 
    "PaleTurquoise", 
    "lavender", 
    "PowderBlue",
];

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = selectedColor;
        });
        cell.addEventListener('dblclick', () => {
            cell.style.backgroundColor = '';
        });
        grid.appendChild(cell);
    }
}

// Création de la barre de couleurs
for (let i = 0; i < 9; i++) {
    const cell2 = document.createElement('div');
    cell2.classList.add('cell2');
    cell2.style.backgroundColor = colors[i];
    cell2.addEventListener('click', () => {
        selectedColor = colors[i];
    });
    bar.appendChild(cell2);
}

let clearbttn = document.createElement('button')
clearbttn.textContent = "Clear"
body.appendChild(clearbttn);


clearbttn.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor ='';})

})