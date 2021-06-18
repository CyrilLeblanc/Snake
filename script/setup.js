
/**
 *  Mise en place de la GRID
 */

var grid = document.getElementById('grid');
var grid_height = 640;
var grid_width = 640;

var size = 16;

// on met en place la grid
var grid_content  = "";
for (let i = 1 ; i < size ; i++)
{
    grid_content += '<div class="row">';
    for (let j = 1 ; j < size ; j++)
    {
        coord = i + "x" + j;
        grid_content += '<div class="cell" id="' + coord + '"></div>';
    }
    grid_content += "</div>";
}
grid.innerHTML = grid_content;

// on met à jour la taille de chaque cellule
let cells = Array.prototype.slice.call(document.getElementsByClassName('cell'));

cells.forEach(element => {
    element.style.height = grid_height / 15 + "px";
    element.style.width = grid_width / 15 + "px";
}); 


