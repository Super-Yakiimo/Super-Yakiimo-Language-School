/*
drawing the school map
*/

const BOARD = {
    width: 15,
    height: 8,
    row: 8,
    col: 5,
    layout: [
        // bottom row
        { x: 0, y: 6, w: 2, h: 2 },
        { x: 2, y: 6, w: 2, h: 2 },
        { x: 4, y: 6, w: 2, h: 2 },
        { x: 6, y: 6, w: 1, h: 2, room: ROAD_VERT },
        { x: 7, y: 6, w: 2, h: 2 },
        { x: 9, y: 6, w: 2, h: 2 },
        { x: 11, y: 6, w: 2, h: 2 },
        { x: 13, y: 6, w: 2, h: 2 },

        // hall
        { x: 0, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 2, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 4, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 6, y: 5, w: 1, h: 1, room: ROAD },
        { x: 7, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 9, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 11, y: 5, w: 2, h: 1, room: ROAD_HOR },
        { x: 13, y: 5, w: 2, h: 1, room: ROAD_HOR },

        // middle row
        { x: 0, y: 3, w: 2, h: 2 },
        { x: 2, y: 3, w: 2, h: 2 },
        { x: 4, y: 3, w: 2, h: 2 },
        { x: 6, y: 3, w: 1, h: 2, room: ROAD_VERT },
        { x: 7, y: 3, w: 2, h: 2 },
        { x: 9, y: 3, w: 2, h: 2 },
        { x: 11, y: 3, w: 2, h: 2 },
        { x: 13, y: 3, w: 2, h: 2 },

        // hall
        { x: 0, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 2, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 4, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 6, y: 2, w: 1, h: 1, room: ROAD },
        { x: 7, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 9, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 11, y: 2, w: 2, h: 1, room: ROAD_HOR },
        { x: 13, y: 2, w: 2, h: 1, room: ROAD_HOR },

        // top row
        { x: 0, y: 0, w: 2, h: 2 },
        { x: 2, y: 0, w: 2, h: 2 },
        { x: 4, y: 0, w: 2, h: 2 },
        { x: 6, y: 0, w: 1, h: 2, room: ROAD_VERT },
        { x: 7, y: 0, w: 2, h: 2 },
        { x: 9, y: 0, w: 2, h: 2 },
        { x: 11, y: 0, w: 2, h: 2 },
        { x: 13, y: 0, w: 2, h: 2 },
    ]
}

const VERT = {
    width: 8,
    height: 15,
    row: 5,
    col: 8,
    layout: [
        // row five
        { x: 0, y: 13, w: 2, h: 2 },
        { x: 2, y: 13, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 13, w: 2, h: 2, },
        { x: 5, y: 13, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 13, w: 2, h: 2 },

        // row four
        { x: 0, y: 11, w: 2, h: 2 },
        { x: 2, y: 11, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 11, w: 2, h: 2 },
        { x: 5, y: 11, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 11, w: 2, h: 2 },

        // row three
        { x: 0, y: 9, w: 2, h: 2 },
        { x: 2, y: 9, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 9, w: 2, h: 2 },
        { x: 5, y: 9, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 9, w: 2, h: 2 },

        // hall row
        { x: 0, y: 8, w: 2, h: 1, room: ROAD_HOR },
        { x: 2, y: 8, w: 1, h: 1, room: ROAD },
        { x: 3, y: 8, w: 2, h: 1, room: ROAD_HOR },
        { x: 5, y: 8, w: 1, h: 1, room: ROAD },
        { x: 6, y: 8, w: 2, h: 1, room: ROAD_HOR },

        // row two
        { x: 0, y: 6, w: 2, h: 2 },
        { x: 2, y: 6, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 6, w: 2, h: 2 },
        { x: 5, y: 6, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 6, w: 2, h: 2 },

        // row one
        { x: 0, y: 4, w: 2, h: 2 },
        { x: 2, y: 4, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 4, w: 2, h: 2 },
        { x: 5, y: 4, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 4, w: 2, h: 2 },

        // row minus one
        { x: 0, y: 2, w: 2, h: 2 },
        { x: 2, y: 2, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 2, w: 2, h: 2 },
        { x: 5, y: 2, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 2, w: 2, h: 2 },

        // row minus two
        { x: 0, y: 0, w: 2, h: 2 },
        { x: 2, y: 0, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 3, y: 0, w: 2, h: 2 },
        { x: 5, y: 0, w: 1, h: 2, room: ROAD_VERT }, // hall
        { x: 6, y: 0, w: 2, h: 2 },

    ]
}

const drawBoard = (select, tile) => {
    let map = document.querySelector('#map');
    let mCtx = map.getContext('2d');

    map.width = tile * select.width;
    map.height = tile * select.height;

    for (let i = 0; i < select.width; i++) {
        for (let j = 0; j < select.height; j++) {
            mCtx.fillStyle = `rgb(${i * select.width}, ${j * select.height}, 0)`;
            mCtx.fillRect(i * tile, j * tile, tile, tile);
        }
    }

    let copySchool = JSON.parse(JSON.stringify(TOWN)).sort(() => Math.random() - 0.5);
    select.layout.forEach((room, index) => {
        if (room.room == null) {
            // get zero index
            room.room = copySchool.splice(0, 1)[0];
        }
    });

    let randSchool = SCHOOL.sort(() => Math.random() - 0.5);
    select.layout.forEach((room, index) => {
        if (room.room.link == null) {
            return;
        }
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

    let select = BOARD;

    let tile = window.innerWidth / select.width * 0.9;

    // vert 
    if (window.innerHeight > window.innerWidth) {
        select = VERT;
        tile = window.innerHeight / select.height;
    }


    drawBoard(select, tile);

    // pos list
    let posList = [];
    select.layout.forEach((value, index) => {
        let x = (value.x + value.w / 2) * tile - tile / 2;
        let y = (value.y + value.h / 2) * tile - tile / 2;
        posList.push({ x, y });
    });

    console.log(posList);

    let pCan = document.querySelector('#player');
    let pxt = pCan.getContext('2d');
    let con = document.querySelector('#con');

    pCan.width = tile * select.width;
    pCan.height = tile * select.height;

    // player variable
    let player = {
        x: 0,
        y: 0,
        xIndex: 0,
        yIndex: 0,
        w: tile / 2,
        h: tile / 2,
    }

    // put player on initial position
    let init = posList[select.row * player.yIndex + player.xIndex];
    player.x = init.x;
    player.y = init.y;


    // animation increment the index every step
    let animIndex = 0;
    let index = 0;

    const drawChar = () => {
        // draw position
        let xPos = player.x;
        let yPos = player.y;
        // slice width and height for cutting character sprite
        let SLICE_WIDTH = charImg.width / SWIDTH;
        let SLICE_HEIGHT = charImg.height / SHEIGHT;
        let sX = animIndex % SWIDTH * SLICE_WIDTH;
        let sY = Math.floor(animIndex / SWIDTH) * (charImg.height / SHEIGHT);
        pxt.drawImage(charImg, sX, sY, SLICE_WIDTH, SLICE_HEIGHT, xPos, yPos, tile, tile);

        pxt.font = `20px Arial`;
        pxt.fillText(`x: ${player.xIndex} y: ${player.yIndex}`, 10, 50);
    }

    let playerDir = DIR.UP;
    let dirIndex = 2;
    let moving = false;

    // /*
    // button clicks
    // */

    // // turn function 

    const turn = (turn) => {
        // dont turn if moving
        if (moving == true) {
            console.log('stop');
            return;
        }

        dirIndex += turn;

        if (dirIndex < 0) {
            dirIndex = 3;
        }
        if (dirIndex >= 4) {
            dirIndex = 0;
        }

        playerDir = ORDER[dirIndex];
    }

    const move = () => {

        // store current postion before move
        let nextX = player.xIndex;
        let nextY = player.yIndex;

        switch (playerDir) {
            case DIR.UP:
                console.log('up');
                nextY += 1;
                break;
            case DIR.RIGHT:
                console.log('right');
                nextX += 1;
                break;
            case DIR.DOWN:
                console.log('down');
                nextY -= 1;
                break;
            case DIR.LEFT:
                console.log('left');
                nextX -= 1;
                break;
        }

        // check boundaries stop if about to move out of bounds
        if (nextX < 0 || nextX >= select.row || nextY < 0 || nextY >= select.col) {
            return console.log('stop!');
        }

        // check if the next room is a null room and should not be moved to
        if (select.layout[select.row * nextY + nextX].room.link == null) {
            return console.log('null');
        }

        // update the player index
        player.xIndex = nextX;
        player.yIndex = nextY;

        // get the raw position in px space
        let nextRaw = posList[select.row * player.yIndex + player.xIndex];

        // get the dist to next spot
        let distX = nextRaw.x - player.x;
        let distY = nextRaw.y - player.y;

        // number of steps to go from start to end
        let step = 20;

        // step counter
        let count = 0;

        let xStep = distX / step;
        let yStep = distY / step;

        let handle = setInterval(() => {
            if (count > step) {
                clearInterval(handle);
                player.x = nextRaw.x;
                player.y = nextRaw.y;
            }
            player.x += xStep;
            player.y += yStep;
            count++;
        }, 20);
    }

    // button handlers
    let leftBtn = document.querySelector("#leftBuffon");
    let rightBtn = document.querySelector("#rightBuffon");
    let moveBtn = document.querySelector("#straightBuffon");

    // onclick 
    leftBtn.addEventListener("click", () => {
        turn(-1);
    });

    rightBtn.addEventListener("click", () => {
        turn(1);
    });

    moveBtn.addEventListener("click", () => {
        move();
    });

    let charImg = document.createElement('img');
    charImg.onload = () => {
        setInterval(() => {
            animIndex = playerDir[index]
            index += 1;
            if (index >= 4) { index = 0; }
            pxt.clearRect(0, 0, innerWidth, innerHeight);
            drawChar();
        }, 300);
    }
    charImg.src = src = "../../../resource/img/map/character.png";

    function anim() {
        pxt.clearRect(0, 0, innerWidth, innerHeight);

        drawChar();

        window.requestAnimationFrame(anim);
    }

    window.requestAnimationFrame(anim);
}


