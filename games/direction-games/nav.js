/* 
const variables
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

// ids
const MAP_IMG = "#mapImg";
const CHAR_IMG = "#charImg";

// map grid dimensions 
const WIDTH = 9;
const HEIGHT = 6;

// enum of tile types
const ROOM = {
    HALL: "HALL",
    LUNCH: "LUNCH",
    MUSIC: "MUSIC",
    SCIENCE: "SCIENCE",
    ART: "ART",
    PRINCIPAL: "PRINCIPAL",
    LIBRARY: "LIBRARY",
    COMPUTER: "COMPUTER",
    COOKING: "COOKING",
    TEACHERS: "TEACHERS",
    OFFICE: "OFFICE",
    GYM: "GYM",
    PLAYGROUND: "PLAYGROUND",
    ENTRANCE: "ENTRANCE",
    CLASSROOM: "CLASSROOM",
    RESTROOM: "RESTROOM"
}

// map 
const MAP_VERT = [{ "x": 0.08, "y": 0.93, room: ROOM.HALL }, { "x": 0.25, "y": 0.93, room: ROOM.HALL }, { "x": 0.37, "y": 0.94, room: ROOM.HALL }, { "x": 0.49, "y": 0.93, room: ROOM.HALL }, { "x": 0.63, "y": 0.93, room: ROOM.HALL }, { "x": 0.75, "y": 0.93, room: ROOM.HALL }, { "x": 0.91, "y": 0.93, room: ROOM.HALL }, { "x": 0.07, "y": 0.82, room: ROOM.HALL }, { "x": 0.24, "y": 0.82, room: ROOM.HALL }, { "x": 0.37, "y": 0.82, room: ROOM.HALL }, { "x": 0.5, "y": 0.82, room: ROOM.HALL }, { "x": 0.62, "y": 0.82, room: ROOM.HALL }, { "x": 0.75, "y": 0.82, room: ROOM.HALL }, { "x": 0.92, "y": 0.82, room: ROOM.HALL }, { "x": 0.07, "y": 0.71, room: ROOM.HALL }, { "x": 0.24, "y": 0.71, room: ROOM.HALL }, { "x": 0.37, "y": 0.72, room: ROOM.HALL }, { "x": 0.49, "y": 0.71, room: ROOM.HALL }, { "x": 0.63, "y": 0.71, room: ROOM.HALL }, { "x": 0.74, "y": 0.71, room: ROOM.HALL }, { "x": 0.91, "y": 0.71, room: ROOM.HALL }, { "x": 0.07, "y": 0.57, room: ROOM.HALL }, { "x": 0.24, "y": 0.57, room: ROOM.HALL }, { "x": 0.37, "y": 0.57, room: ROOM.HALL }, { "x": 0.5, "y": 0.57, room: ROOM.HALL }, { "x": 0.62, "y": 0.58, room: ROOM.HALL }, { "x": 0.76, "y": 0.57, room: ROOM.HALL }, { "x": 0.92, "y": 0.57, room: ROOM.HALL }, { "x": 0.08, "y": 0.47, room: ROOM.HALL }, { "x": 0.25, "y": 0.47, room: ROOM.HALL }, { "x": 0.38, "y": 0.47, room: ROOM.HALL }, { "x": 0.5, "y": 0.47, room: ROOM.HALL }, { "x": 0.63, "y": 0.47, room: ROOM.HALL }, { "x": 0.75, "y": 0.47, room: ROOM.HALL }, { "x": 0.91, "y": 0.47, room: ROOM.HALL }, { "x": 0.08, "y": 0.36, room: ROOM.HALL }, { "x": 0.25, "y": 0.36, room: ROOM.HALL }, { "x": 0.37, "y": 0.36, room: ROOM.HALL }, { "x": 0.5, "y": 0.35, room: ROOM.HALL }, { "x": 0.62, "y": 0.36, room: ROOM.HALL }, { "x": 0.75, "y": 0.35, room: ROOM.HALL }, { "x": 0.91, "y": 0.35, room: ROOM.HALL }, { "x": 0.08, "y": 0.24, room: ROOM.HALL }, { "x": 0.24, "y": 0.23, room: ROOM.HALL }, { "x": 0.38, "y": 0.24, room: ROOM.HALL }, { "x": 0.49, "y": 0.24, room: ROOM.HALL }, { "x": 0.62, "y": 0.23, room: ROOM.HALL }, { "x": 0.75, "y": 0.23, room: ROOM.HALL }, { "x": 0.92, "y": 0.24, room: ROOM.HALL }, { "x": 0.08, "y": 0.08, room: ROOM.HALL }, { "x": 0.23, "y": 0.08, room: ROOM.HALL }, { "x": 0.37, "y": 0.09, room: ROOM.HALL }, { "x": 0.49, "y": 0.08, room: ROOM.HALL }, { "x": 0.62, "y": 0.08, room: ROOM.HALL }, { "x": 0.73, "y": 0.08, room: ROOM.HALL }, { "x": 0.92, "y": 0.07, room: ROOM.HALL }];
const POST_LIST =
    [
        {
            "x": 0.06,
            "y": 0.88,
            room: ROOM.CLASSROOM
        },
        {
            "x": 0.18,
            "y": 0.88,
            room: ROOM.CLASSROOM
        },
        {
            "x": 0.28,
            "y": 0.89,
            room: ROOM.HALL
        },
        {
            "x": 0.37,
            "y": 0.9,
            room: ROOM.ENTRANCE
        },
        {
            "x": 0.47,
            "y": 0.9,
            room: ROOM.HALL
        },
        {
            "x": 0.56,
            "y": 0.9,
            room: ROOM.TEACHERS
        },
        {
            "x": 0.68,
            "y": 0.9,
            room: ROOM.OFFICE
        },
        {
            "x": 0.79,
            "y": 0.91,
            room: ROOM.PLAYGROUND
        },
        {
            "x": 0.95,
            "y": 0.9,
            room: ROOM.PLAYGROUND
        },
        {
            "x": 0.05,
            "y": 0.74,
            room: ROOM.HALL
        },
        {
            "x": 0.19,
            "y": 0.74,
            room: ROOM.HALL
        },
        {
            "x": 0.28,
            "y": 0.75,
            room: ROOM.HALL
        },
        {
            "x": 0.37,
            "y": 0.74,
            room: ROOM.HALL
        },
        {
            "x": 0.46,
            "y": 0.75,
            room: ROOM.HALL
        },
        {
            "x": 0.55,
            "y": 0.74,
            room: ROOM.HALL
        },
        {
            "x": 0.68,
            "y": 0.75,
            room: ROOM.HALL
        },
        {
            "x": 0.8,
            "y": 0.75,
            room: ROOM.PLAYGROUND
        },
        {
            "x": 0.94,
            "y": 0.76,
            room: ROOM.PLAYGROUND
        },
        {
            "x": 0.05,
            "y": 0.6,
            room: ROOM.SCIENCE
        },
        {
            "x": 0.19,
            "y": 0.6,
            room: ROOM.ART
        },
        {
            "x": 0.28,
            "y": 0.6,
            room: ROOM.HALL
        },
        {
            "x": 0.37,
            "y": 0.58,
            room: ROOM.LUNCH
        },
        {
            "x": 0.47,
            "y": 0.59,
            room: ROOM.HALL
        },
        {
            "x": 0.56,
            "y": 0.59,
            room: ROOM.PRINCIPAL
        },
        {
            "x": 0.67,
            "y": 0.58,
            room: ROOM.COOKING
        },
        {
            "x": 0.79,
            "y": 0.58,
            room: ROOM.PLAYGROUND
        },
        {
            "x": 0.94,
            "y": 0.59,
            room: ROOM.PLAYGROUND
        },
        {
            "x": 0.05,
            "y": 0.38,
            room: ROOM.MUSIC
        },
        {
            "x": 0.19,
            "y": 0.38,
            room: ROOM.ART
        },
        {
            "x": 0.28,
            "y": 0.39,
            room: ROOM.HALL
        },
        {
            "x": 0.37,
            "y": 0.39,
            room: ROOM.COOKING
        },
        {
            "x": 0.47,
            "y": 0.4,
            room: ROOM.HALL
        },
        {
            "x": 0.56,
            "y": 0.39,
            room: ROOM.CLASSROOM
        },
        {
            "x": 0.69,
            "y": 0.39,
            room: ROOM.CLASSROOM
        },
        {
            "x": 0.82,
            "y": 0.38,
            room: ROOM.GYM
        },
        {
            "x": 0.94,
            "y": 0.39,
            room: ROOM.HALL
        },
        {
            "x": 0.05,
            "y": 0.24,
            room: ROOM.HALL
        },
        {
            "x": 0.18,
            "y": 0.24,
            room: ROOM.HALL
        },
        {
            "x": 0.28,
            "y": 0.24,
            room: ROOM.HALL
        },
        {
            "x": 0.37,
            "y": 0.24,
            room: ROOM.HALL
        },
        {
            "x": 0.47,
            "y": 0.24,
            room: ROOM.HALL
        },
        {
            "x": 0.57,
            "y": 0.25,
            room: ROOM.HALL
        },
        {
            "x": 0.69,
            "y": 0.25,
            room: ROOM.HALL
        },
        {
            "x": 0.81,
            "y": 0.24,
            room: ROOM.GYM
        },
        {
            "x": 0.94,
            "y": 0.24,
            room: ROOM.GYM
        },
        {
            "x": 0.05,
            "y": 0.07,
            room: ROOM.LIBRARY
        },
        {
            "x": 0.18,
            "y": 0.08,
            room: ROOM.COMPUTER
        },
        {
            "x": 0.28,
            "y": 0.09,
            room: ROOM.HALL
        },
        {
            "x": 0.37,
            "y": 0.09,
            room: ROOM.RESTROOM
        },
        {
            "x": 0.47,
            "y": 0.09,
            room: ROOM.HALL
        },
        {
            "x": 0.56,
            "y": 0.09,
            room: ROOM.CLASSROOM
        },
        {
            "x": 0.67,
            "y": 0.09,
            room: ROOM.CLASSROOM
        },
        {
            "x": 0.8,
            "y": 0.09,
            room: ROOM.GYM
        },
        {
            "x": 0.94,
            "y": 0.09,
            room: ROOM.GYM
        }
    ]

window.onload = function () {

    /*
    varaibles
    */

    // info box 
    let infoBox = document.querySelector("#infoBox");

    // player variable
    let player = {
        xIndex: 0,
        yIndex: 0,
        x: POST_LIST[0].x,
        y: POST_LIST[0].y,
        w: 0,
        h: 0,
        index: 0
    }

    let playerDir = DIR.UP;
    let dirIndex = 2;

    let moving = false;

    // source images for maps and character
    let mapImg = document.querySelector(MAP_IMG);
    let charImg = document.querySelector(CHAR_IMG);

    // slice width and height for cutting character sprite
    let SLICE_WIDTH = charImg.width / SWIDTH;
    let SLICE_HEIGHT = charImg.height / SHEIGHT;

    // ratio for scaling map and keeping ratio
    let mapRatio = mapImg.width / mapImg.height;
    let charRatio = charImg.width / charImg.height;

    // map canvas
    let mapCan = document.querySelector("#mapCan");
    let mapCtx = mapCan.getContext("2d");

    // character canvas
    let charCan = document.querySelector("#charCan");
    let charCtx = charCan.getContext("2d");

    /*
    setup
    */

    // set canvas dimeions
    mapCan.height = window.innerHeight * 0.90;
    mapCan.width = mapCan.height * mapRatio;

    // char canvas same as mapcanvas
    charCan.width = mapCan.width;
    charCan.height = mapCan.height;

    // player draw dimensions
    player.w = mapCan.height * 0.1;
    player.h = player.w * charRatio;

    // draw map
    mapCtx.drawImage(mapImg, 0, 0, mapImg.width, mapImg.height, 0, 0, mapCan.width, mapCan.height);

    // animation increment the index every step
    let animIndex = 0;
    let index = 0;
    setInterval(() => {
        animIndex = playerDir[index]
        index += 1;
        if (index >= 4) { index = 0; }
    }, 400);

    /*
    button clicks
    */

    // turn function 

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
        // check postion before move
        let nextX = player.xIndex;
        let nextY = player.yIndex;

        switch (playerDir) {
            case DIR.UP:
                nextY++;
                break;
            case DIR.RIGHT:
                nextX++;
                break;
            case DIR.DOWN:
                nextY--;
                break;
            case DIR.LEFT:
                nextX--;
                break;
        }

        if (nextX < 0 || nextX >= WIDTH || nextY < 0 || nextY >= HEIGHT) {
            return;
        }

        // update the position
        player.xIndex = nextX;
        player.yIndex = nextY;

        // get the target postion
        let target = POST_LIST[player.yIndex * WIDTH + player.xIndex];

        // move to that position
        let count = 0;
        let handle = setInterval(() => {
            let xDif = target.x - player.x;
            let yDif = target.y - player.y;

            let hyp = Math.sqrt(xDif ** 2 + yDif ** 2);
            let dx = xDif / hyp;
            let dy = yDif / hyp;

            player.x += dx * SPEED;
            player.y += dy * SPEED;

            count++;

            if (count > 35 || (Math.abs(xDif) < 0.01 && Math.abs(yDif) < 0.01)) {
                console.log(xDif, yDif);
                clearInterval(handle);
                player.x = target.x;
                player.y = target.y;
                console.log('end');
            }
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
        move()
    });


    /*

    start anim

    */

    function anim() {
        charCtx.clearRect(0, 0, innerWidth, innerHeight);

        let xPos = player.x * mapCan.width - player.w / 2;
        let yPos = player.y * mapCan.height - player.h / 2;

        // get copy position
        let sX = animIndex % SWIDTH * SLICE_WIDTH;
        let sY = Math.floor(animIndex / SWIDTH) * (charImg.height / SHEIGHT);

        // draw image onto the canvas
        charCtx.drawImage(charImg, sX, sY, SLICE_WIDTH - 5, SLICE_HEIGHT - 10,
            xPos, yPos, player.w, player.h);
        window.requestAnimationFrame(anim);

        charCtx.fillText(`x:${xPos.toFixed(2)} y:${yPos.toFixed(2)}`, 100, 100);

        let tile = POST_LIST[player.xIndex + player.yIndex * WIDTH];
        infoBox.innerHTML = `x:${xPos.toFixed(2)} y:${yPos.toFixed(2)} tile: ${POST_LIST[player.xIndex + player.yIndex * WIDTH].room}`;
    }

    window.requestAnimationFrame(anim);

    POST_LIST.forEach((pos) => {
        mapCtx.fillRect(pos.x * mapCan.width, pos.y * mapCan.height, 10, 10);
        mapCtx.fillText(pos.room, pos.x * mapCan.width, pos.y * mapCan.height);
    })

}

// only used once to generate list of positions
// function getPos(){
// GET POSITION LIST START
// let list = [];
// charCan.addEventListener("mousemove", (e) => {
//     // set position
//     player.x = e.offsetX;
//     player.y = e.offsetY;
// });
// charCan.addEventListener("click", (e) => {
//     let x = Number((e.offsetX / mapCan.width).toFixed(2));
//     let y = Number((e.offsetY / mapCan.height).toFixed(2));
//     console.log(x, y);
//     list.push({ x, y });
// });
// window.addEventListener("keydown", () => {
//     console.log(list);
// });
// GET POSITION LIST END
//     });
// }