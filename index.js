/**
* This program is a boilerplate code for the standard tic tac toe game
* Here the “box” represents one placeholder for either a “X” or a “0”
* We have a 2D array to represent the arrangement of X or O is a grid
* 0 -> empty box
* 1 -> box with X
* 2 -> box with O
*
* Below are the tasks which needs to be completed:
* Imagine you are playing with the computer so every alternate move should be done by the computer
* X -> player
* O -> Computer
*
* Winner needs to be decided and has to be flashed
*
* Extra points will be given for approaching the problem more creatively
* 
*/

const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';
    
    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if(gridValue === 1) {
            content = '<span class="cross">X</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="cross">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
    let newValue = 1
    grid[colIdx][rowIdx] = newValue;
    computerTurn(parseInt(rowIdx),parseInt(colIdx));
    renderMainGrid();
    addClickHandlers();
    checkWinner();
}

function computerTurn(rowIdx,colIdx,){
    var newRowValue = Math.floor(Math.random() * 2)
    var newColValue = Math.floor(Math.random() * 2)
    let newValue = 2;
    if(grid[newRowValue][newColValue] == 0){
        grid[newColValue][newRowValue] = newValue
    }
    else{
        let x = 0;
        for(let row = 0;row<GRID_LENGTH; row++){
            for(let col = 0; col<GRID_LENGTH; col++){
                if(grid[row][col] == 0){
                    grid[row][col] = newValue
                    x++;
                    break
                }
            }
            if(x !=0){
                break;
            }
        }
    }

}

function checkWinner(){
    if(grid[0][0] == 1 && grid[0][1]== 1 && grid[0][2] ==1){
        alert("you won")
    }
    else if(grid[1][0] == 1 && grid[1][1]== 1 && grid[1][2] ==1){
        alert("you won")
    }
    else if(grid[2][0] == 1 && grid[2][1]== 1 && grid[2][2] ==1){
        alert("you won")
    }
    else if(grid[0][0] == 1 && grid[1][0]== 1 && grid[2][0] ==1){
        alert("you won")
    }
    else if(grid[0][1] == 1 && grid[1][1]== 1 && grid[2][1] ==1){
        alert("you won")
    }
    else if(grid[0][2] == 1 && grid[1][2]== 1 && grid[2][2] ==1){
        alert("you won")
    }
    else if(grid[0][0] == 1 && grid[1][1]== 1 && grid[2][2] ==1){
        alert("you won")
    }
    else if(grid[0][2] == 1 && grid[0][1]== 1 && grid[2][0] ==1){
        alert("you won")
    }
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}

initializeGrid();
renderMainGrid();
addClickHandlers();
