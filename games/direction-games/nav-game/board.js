const SCHOOL_H = {
    width: 15,
    height: 8,
    row: 7,
    col: 5,
    layout: [
        // bottom row
        { x: 0, y: 6, w: 2, h: 2 },
        { x: 2, y: 6, w: 2, h: 2 },
        { x: 4, y: 6, w: 2, h: 2 },
        { x: 6, y: 6, w: 1, h: 2, room: HALL },
        { x: 7, y: 6, w: 2, h: 2 },
        { x: 9, y: 6, w: 2, h: 2 },

        // BIG ROOM
        { x: 11, y: 4, w: 4, h: 4, room: BLANK },

        // hall
        { x: 0, y: 5, w: 2, h: 1, room: HALL },
        { x: 2, y: 5, w: 2, h: 1, room: HALL },
        { x: 4, y: 5, w: 2, h: 1, room: HALL },
        { x: 6, y: 5, w: 1, h: 1, room: HALL },
        { x: 7, y: 5, w: 2, h: 1, room: HALL },
        { x: 9, y: 5, w: 2, h: 1, room: HALL },

        // BIG ROOM
        { x: 11, y: 4, w: 4, h: 4, room: PLAYGROUND },

        // middle row
        { x: 0, y: 3, w: 2, h: 2, room: ENTRANCE },
        { x: 2, y: 3, w: 2, h: 2 },
        { x: 4, y: 3, w: 2, h: 2 },
        { x: 6, y: 3, w: 1, h: 2, room: HALL },
        { x: 7, y: 3, w: 2, h: 2 },
        { x: 9, y: 3, w: 2, h: 2 },

        { x: 9, y: 3, w: 2, h: 2, room: BLANK },

        // hall
        { x: 0, y: 2, w: 2, h: 1, room: HALL },
        { x: 2, y: 2, w: 2, h: 1, room: HALL },
        { x: 4, y: 2, w: 2, h: 1, room: HALL },
        { x: 6, y: 2, w: 1, h: 1, room: HALL },
        { x: 7, y: 2, w: 2, h: 1, room: HALL },
        { x: 9, y: 2, w: 2, h: 1, room: HALL },

        // big room
        { x: 11, y: 0, w: 4, h: 4, room: GYM },

        // top row
        { x: 0, y: 0, w: 2, h: 2 },
        { x: 2, y: 0, w: 2, h: 2 },
        { x: 4, y: 0, w: 2, h: 2 },
        { x: 6, y: 0, w: 1, h: 2, room: HALL },
        { x: 7, y: 0, w: 2, h: 2 },
        { x: 9, y: 0, w: 2, h: 2 },

        // big room
        { x: 11, y: 0, w: 4, h: 4, room: BLANK },
    ]
}

const SCHOOL_V = {
    width: 8,
    height: 15,
    row: 5,
    col: 7,
    layout: [
        // row five
        { x: 0, y: 13, w: 2, h: 2 },
        { x: 2, y: 13, w: 1, h: 2, room: HALL }, // hall
        { x: 3, y: 13, w: 2, h: 2, room: ENTRANCE },
        { x: 5, y: 13, w: 1, h: 2, room: HALL }, // hall
        { x: 6, y: 13, w: 2, h: 2 },

        // row four
        { x: 0, y: 11, w: 2, h: 2 },
        { x: 2, y: 11, w: 1, h: 2, room: HALL }, // hall
        { x: 3, y: 11, w: 2, h: 2 },
        { x: 5, y: 11, w: 1, h: 2, room: HALL }, // hall
        { x: 6, y: 11, w: 2, h: 2 },

        // row three
        { x: 0, y: 9, w: 2, h: 2 },
        { x: 2, y: 9, w: 1, h: 2, room: HALL }, // hall
        { x: 3, y: 9, w: 2, h: 2 },
        { x: 5, y: 9, w: 1, h: 2, room: HALL }, // hall
        { x: 6, y: 9, w: 2, h: 2 },

        // hall row
        { x: 0, y: 8, w: 2, h: 1, room: HALL },
        { x: 2, y: 8, w: 1, h: 1, room: HALL },
        { x: 3, y: 8, w: 2, h: 1, room: HALL },
        { x: 5, y: 8, w: 1, h: 1, room: HALL },
        { x: 6, y: 8, w: 2, h: 1, room: HALL },

        // row two
        { x: 0, y: 6, w: 2, h: 2 },
        { x: 2, y: 6, w: 1, h: 2, room: HALL }, // hall
        { x: 3, y: 6, w: 2, h: 2 },
        { x: 5, y: 6, w: 1, h: 2, room: HALL }, // hall
        { x: 6, y: 6, w: 2, h: 2 },

        // row one
        { x: 0, y: 4, w: 2, h: 2 },
        { x: 2, y: 4, w: 1, h: 2, room: HALL }, // hall
        { x: 3, y: 4, w: 2, h: 2 },
        { x: 5, y: 4, w: 1, h: 2, room: HALL }, // hall
        { x: 6, y: 4, w: 2, h: 2 },


        // top row big rooms
        { x: 11, y: 4, w: 4, h: 4, room: BLANK },
        { x: 0, y: 0, w: 4, h: 4, room: GYM },
        { x: 11, y: 4, w: 4, h: 4, room: BLANK },
        { x: 4, y: 0, w: 4, h: 4, room: PLAYGROUND },
        { x: 11, y: 4, w: 4, h: 4, room: BLANK },



    ],
    points: [
        // bottom row // row five
        { x: 1.5, y: 1.5 }, { x: 2.5, y: 1.5 }, { x: 3.5, y: 1.5 }, { x: 7.5, y: 1.5 },
    ]
}

const TOWN_H = {
    width: 15,
    height: 8,
    row: 7,
    col: 5,
    layout: [

    ]
}

const TOWN_V = {
    width: 8,
    height: 15,
    row: 5,
    col: 7,
    layout: [

    ]
}