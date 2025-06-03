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

// use the vertical map if height > width
// set tile based on width 
const selectMap = (select) => {
    switch (select) {
        case "townh":
            return TOWN_H;
        case "townv":
            return TOWN_V;
        case "schoolh":
            return SCHOOL_H;
        case "schoolv":
            return SCHOOL_V;
        default:
            return TOWN_H;
    }
}

// select tiles to draw
const selectTiles = (select) => {
    if (select == "townh" || select == "townv") {
        return TOWN
    }
    return SCHOOL;
}

const getTileDim = (map) => {
    if (window.innerHeight > window.innerWidth) {
        return window.innerHeight / map.height * 0.9;
    }

    return window.innerWidth / map.width * 0.9;
}


/* entry point into the program */
window.onload = () => {

    // canvas referance
    const mapCan = document.querySelector("#map");
    const mapCtx = mapCan.getContext("2d");

    // the selected map
    let map, tile, mapTiles;

    // select input to select town or schol map
    let sInput = document.querySelector("#select");
    sInput.addEventListener("change", () => {
        map = selectMap(sInput.value);
        tile = getTileDim(map);
        mapTiles = selectTiles(select.value).sort(() => Math.random() - 0.5);
        drawBoard();

        // pos list
        let posList = [];
        map.layout.forEach((value, index) => {
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
        let init = posList[map.row * player.yIndex + player.xIndex];
        player.x = init.x;
        player.y = init.y;

        // animation increment the index every step
        let animIndex = 0;
        let index = 0;

        let playerDir = DIR.UP;
        let dirIndex = 2;
        let moving = false;

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
            if (nextX < 0 || nextX >= select.row || nextY < 0 || nextY >= map.col) {
                return console.log('stop!');
            }

            // check if the next room is a null room and should not be moved to
            if (map.layout[map.row * nextY + nextX].room.link == null) {
                return console.log('null');
            }

            player.xIndex = nextX;
            player.yIndex = nextY;

            let nextRaw = posList[map.row * player.yIndex + player.xIndex];
            player.x = nextRaw.x;
            player.y = nextRaw.y;
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

    });

    // draw board

    function drawBoard() {
        let canWidth = map.width * tile;
        let canHeight = map.height * tile;

        mapCan.width = canWidth;
        mapCan.height = canHeight;

        // draw tiles
        for (let i = 0; i < map.width; i++) {
            for (let j = 0; j < map.height; j++) {
                mapCtx.fillStyle = `rgb(${i * map.width}, 255, ${j * map.height})`;
                mapCtx.fillRect(i * tile, j * tile, tile, tile);
            }
        }

        // get list of tiles and give each tile on the map 
        // a picture and a image link and room
        let copyMapTiles = JSON.parse(JSON.stringify(mapTiles));
        let length = map.layout.length;
        for (let i = 0; i < length; i++) {
            if (map.layout[i].room) { // skip if room is const 
                continue;
            }
            // get zero index
            map.layout[i].room = copyMapTiles.splice(0, 1)[0];
        }

        map.layout.forEach((room, index) => {
            if (room.room.link == null) {
                return;
            }
            let img = document.createElement('img');
            img.onload = () => {
                mapCtx.drawImage(img, 0, 0, img.width, img.height, room.x * tile, room.y * tile, room.w * tile, room.h * tile);
            }
            img.src = "../../../resource/img/" + room.room.link;
        });
    }
}