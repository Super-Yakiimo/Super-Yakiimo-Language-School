













/*
board : the selcted map to draw
tilePx: the dimension of each block in pixels
*/

// draw the map based on the selected board
const drawMap = (board, tilePx) => {
    const boardCan = document.querySelector("#map");
    const ctx = boardCan.getContext("2d");
}

// use the vertical map if height > width
// set tile based on width 
const selectMap = () => {
    if(window.innerHeight > window.innerWidth){

    }
}

const getTileDim = () => {

}


/* entry point into the program */
window.onload = () => {

    // temporary select variable to test maps
    let select = BOARD_H;


    const mapCan = document.querySelector("#map");
    const mapCtx = mapCan.getContext("2d");

    let canWidth = select.width * tile;
}