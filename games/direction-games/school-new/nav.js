/*
drawing the school map
*/
let tile = 50;

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
        { x: 0, y: 3, w: 2, h: 2, room: ENTRANCE },
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

const VERT = {
    width: 8,
    height: 15,
    layout: [
        // big room
        { x: 0, y: 0, w: 4, h: 4, room: GYM },
        { x: 4, y: 0, w: 4, h: 4, room: PLAYGROUND },

        // row one
        { x: 0, y: 4, w: 2, h: 2 },
        { x: 3, y: 4, w: 2, h: 2 },
        { x: 6, y: 4, w: 2, h: 2 },

        // row two
        { x: 0, y: 6, w: 2, h: 2 },
        { x: 3, y: 6, w: 2, h: 2 },
        { x: 6, y: 6, w: 2, h: 2 },

        // row three
        { x: 0, y: 9, w: 2, h: 2 },
        { x: 3, y: 9, w: 2, h: 2 },
        { x: 6, y: 9, w: 2, h: 2 },

        // row four
        { x: 0, y: 11, w: 2, h: 2 },
        { x: 3, y: 11, w: 2, h: 2 },
        { x: 6, y: 11, w: 2, h: 2 },

        // row five
        { x: 0, y: 13, w: 2, h: 2 },
        { x: 3, y: 13, w: 2, h: 2, room: ENTRANCE },
        { x: 6, y: 13, w: 2, h: 2 },
    ]
}

let select = BOARD;

const drawBoard = () => {
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

    // pos list
    let posList = [];
    let ht = tile / 2
    for(let i = 0; i < select.width; i++){
        for(let j = 0; j < select.height; j++){
            posList.push({x: i * tile + ht, y: j * tile + ht});
        }
    }

    console.log(posList);

    let pCan = document.querySelector('#player');
    let pxt = pCan.getContext('2d');
    let con = document.querySelector('#con');

    pCan.width = tile * select.width;
    pCan.height = tile * select.height;

    // player variable
    let player = {
        x: ht,
        y: ht,
        w: tile,
        h: tile,
        index: 0
    }

    console.log(player);

    // animation increment the index every step
    let animIndex = 0;
    let index = 0;

    const drawChar = () => {
        // draw position
        let xPos = player.x;
        let yPos = pCan.height - player.y;
        // slice width and height for cutting character sprite
        let SLICE_WIDTH = charImg.width / SWIDTH;
        let SLICE_HEIGHT = charImg.height / SHEIGHT;
        let sX = animIndex % SWIDTH * SLICE_WIDTH;
        let sY = Math.floor(animIndex / SWIDTH) * (charImg.height / SHEIGHT);
        pxt.drawImage(charImg, sX, sY, SLICE_WIDTH, SLICE_HEIGHT, xPos, yPos, tile, tile);
    }

    let playerDir = DIR.DOWN;
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
        console.log('move');
        // check postion before move
        let nextX = player.x;
        let nextY = player.y;

        switch (playerDir) {
            case DIR.UP:
                nextY+=tile;
                break;
            case DIR.RIGHT:
                nextX+=tile;
                break;
            case DIR.DOWN:
                nextY-=tile;
                break;
            case DIR.LEFT:
                nextX-=tile;
                break;
        }

        player.x = nextX;
        player.y = nextY;

        // if (nextX < 0 || nextX >= select.width || nextY < 0 || nextY >= select.height) {
        //     return;
        // }

        // // update the position
        // player.xIndex = nextX;
        // player.yIndex = nextY;

        // // get the target postion
        // let target = posList[player.yIndex * select.width + player.xIndex];

        // console.log(target.x, target.y);

        // // move to that position
        // let count = 0;
        // let handle = setInterval(() => {
        //     let xDif = target.x - player.x;
        //     let yDif = target.y - player.y;

        //     let hyp = Math.sqrt(xDif ** 2 + yDif ** 2);
        //     let dx = xDif / hyp;
        //     let dy = yDif / hyp;

        //     player.x += dx * SPEED;
        //     player.y += dy * SPEED;

        //     count++;

        //     if (count > 35 || (Math.abs(xDif) < 0.01 && Math.abs(yDif) < 0.01)) {
        //         console.log(xDif, yDif);
        //         clearInterval(handle);
        //         player.x = target.x;
        //         player.y = target.y;
        //         console.log('end');
        //     }
        // }, 20);
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


