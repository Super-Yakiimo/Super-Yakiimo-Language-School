/*
drawing the school map
*/
let tile = 100;
let width = 15;
let height = 8;

const BOARD = {
    width: 15,
    height: 8,
    layout: [
        // big room
        { x: 11, y: 0, w: 4, h: 4, room: GYM },
        { x: 11, y: 4, w: 4, h: 4, room: PLAYGROUND },

        // top row
        { x: 0, y: 0, w: 2, h: 2 },
        { x: 2, y: 0, w: 2, h: 2 },
        { x: 4, y: 0, w: 2, h: 2 },
        { x: 7, y: 0, w: 2, h: 2 },
        { x: 9, y: 0, w: 2, h: 2 },

        // middle row
        { x: 0, y: 3, w: 2, h: 2 },
        { x: 2, y: 3, w: 2, h: 2 },
        { x: 4, y: 3, w: 2, h: 2 },
        { x: 7, y: 3, w: 2, h: 2 },
        { x: 9, y: 3, w: 2, h: 2 },

        // bottom row
        { x: 0, y: 6, w: 2, h: 2 },
        { x: 2, y: 6, w: 2, h: 2 },
        { x: 4, y: 6, w: 2, h: 2 },
        { x: 7, y: 6, w: 2, h: 2 },
        { x: 9, y: 6, w: 2, h: 2 },
    ]
}

let select = BOARD;

const drawBoard = () => {
    let map = document.querySelector('#map');
    let mCtx = map.getContext('2d');

    map.width = tile * select.width;
    map.height = tile * select.height;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            mCtx.fillStyle = `rgb(${i * width}, ${j * height}, 0)`;
            mCtx.fillRect(i * tile, j * tile, tile, tile);
        }
    }

    let copySchool = JSON.parse(JSON.stringify(SCHOOL)).sort(() => Math.random() - 0.5);
    select.layout.forEach((room, index) => {
        if (room.room == null) {
            // get zero index
            room.room = copySchool.splice(0, 1)[0];
        }
    });

    let randSchool = SCHOOL.sort(() => Math.random() - 0.5);
    select.layout.forEach((room, index) => {
        let img = document.createElement('img');
        img.onload = () => {
            mCtx.drawImage(img, 0, 0, img.width, img.height, room.x * tile, room.y * tile, room.w * tile, room.h * tile);
        }
        img.src = "../../../resource/img/" + room.room.link;
    });
}

/*
player variables
*/


// player move speed
const SPEED = 0.005;

// animation control variables

// sprite dimensions
const SWIDTH = 4;
const SHEIGHT = 4;

// directions
const DIR = {
    DOWN: [0, 1, 2, 3],
    RIGHT: [4, 5, 6, 7],
    LEFT: [8, 9, 10, 11],
    UP: [12, 13, 14, 15]
};
const ORDER = [DIR.DOWN, DIR.LEFT, DIR.UP, DIR.RIGHT];



/*
entry point
when window loads start here
*/

window.onload = () => {
    drawBoard();

    let player = document.querySelector('#player');
    let con = document.querySelector('#con');

    player.width = tile * select.width;
    player.height = tile * select.height;

    // player variable
    let avatar = {
        xIndex: 0,
        yIndex: 0,
        x: BOARD.layout[0].x,
        y: BOARD.layout[0].y,
        w: tile,
        h: tile,
        index: 0
    }

    
}


