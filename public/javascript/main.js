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
        
        // Gérer le clic sur la cellule pour appliquer la couleur et la rotation
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = selectedColor;
            cell.classList.add('rotated-right');
            cell.classList.remove('rotated-left');
        });

        // Gérer le double-clic pour enlever la couleur et appliquer la rotation à gauche
        cell.addEventListener('dblclick', () => {
            cell.style.backgroundColor = ''; // Enlever la couleur
            cell.classList.add('rotated-left');
            cell.classList.remove('rotated-right', 'normal-size');
        });

        // Réinitialiser la taille après la rotation
        cell.addEventListener('transitionend', () => {
            if (cell.classList.contains('rotated-right') || cell.classList.contains('rotated-left')) {
                cell.classList.add('normal-size');
                cell.classList.remove('rotated-right', 'rotated-left');
            }
        });

        grid.appendChild(cell);
    }
}


for (let i = 0; i < 9; i++) {
    const cell2 = document.createElement('div');
    cell2.classList.add('cell2');
    cell2.style.backgroundColor = colors[i];
    cell2.addEventListener('click', () => {
        selectedColor = colors[i];
    });
    bar.appendChild(cell2);
}

let clearbttn = document.createElement('button');
clearbttn.textContent = "Clear";
body.appendChild(clearbttn);

clearbttn.addEventListener('click', () => {
    // Appliquer à toutes les cellules
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = ''; // Enlever la couleur
        cell.classList.remove('rotated-right', 'normal-size');
        cell.classList.add('rotated-left');
      
        
        // Réinitialiser la taille après la rotation
        cell.addEventListener('transitionend', function onTransitionEnd() {
            cell.classList.add('normal-size');
            cell.classList.remove('rotated-left');
            cell.removeEventListener('transitionend', onTransitionEnd);
        });
    });
});
