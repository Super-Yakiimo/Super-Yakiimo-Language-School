// function to gen one bingo card of selected dimensions
function genCard(dim, list) {
    // create copy list to prevent original from being edited
    let cpy = JSON.parse(JSON.stringify(list));

    // create empty array to add bingo
    let bingo = [];

    // loop and add x random elements
    for (let i = 0; i < dim * dim; i++) {
        let rnd = Math.floor(Math.random() * cpy.length);
        bingo.push(cpy.splice(rnd, 1)[0]);
    }

    // return bingo
    return bingo;
}

/*
start 
*/

window.onload = function () {
    let canvasCon = document.querySelector('#canvasCon');

    let btn = document.querySelector('button');

    let prntBtn = document.querySelector("#prntBtn");

    setup();

    let dimPx = document.querySelector("#dimPx");
    let dim = document.querySelector("#dim");
    let many = document.querySelector("#many");

    btn.addEventListener('click', () => {
        canvasCon.innerHTML = "";
        let words = getInputs();
        let dimPxVal = Number(dimPx.value);
        let dimVal = Number(dim.value);
        let manyVal = Number(many.value);

        // return alert if none selected
        if (words == null || words.length == 0) {
            return alert('select something to study');
        }

        if (dimVal * dimVal > words.length) {
            return alert('not enough terms to make this bingo sheet select more!');
        }

        // set picture width
        let picDimPx = dimPxVal / dimVal;

        for (let i = 0; i < manyVal; i++) {
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');

            // set canvas dimensions
            canvas.width = dimPxVal;
            canvas.height = dimPxVal;

            let card = genCard(dim.value, words);

            for (let i = 0; i < dimVal; i++) {
                for (let j = 0; j < dimVal; j++) {
                    let x = picDimPx * i;
                    let y = picDimPx * j;

                    //ctx.fillStyle = `rgba(0, 0, ${(i + j) * 40}, 0.9)`;
                    ctx.beginPath();
                    ctx.rect(x, y, picDimPx, picDimPx);
                    ctx.stroke();

                    let curr = card[j * dimVal + i];

                    let img = document.createElement('img');
                    img.src = BASE + curr.link;

                    img.onload = function () {
                        ctx.drawImage(img, x + picDimPx * 0.25, y, picDimPx / 2, picDimPx / 2);
                    }

                    ctx.font = `${picDimPx * 0.13}px Arial`;
                    ctx.textAlign = "center";
                    ctx.fillStyle = 'black';

                    let printText = curr.name;

                    if(printText.length > 8){
                        printText = printText.replace(" ", "\n");
                        console.log(printText);
                    }

                    ctx.fillText(curr.name, x + picDimPx / 2, y + picDimPx * 0.8);
                }
            }
            canvasCon.appendChild(canvas);
        }
    });


    prntBtn.addEventListener('click', ()=>{
        let copy = canvasCon.cloneNode(true);
        console.log(copy.children.item(0));

        Array.from(canvasCon.children).forEach((value, index)=>{
            
            let canvas = copy.children.item(index);
            canvas.width = value.width;
            canvas.height = value.height;
            let ctx = canvas.getContext('2d');
            ctx.drawImage(value, 0, 0, canvas.width, canvas.height, 
                0, 0, canvas.width, canvas.height);
        });
        
        let win = window.open();
        self.focus();
        win.document.open();
        win.document.append(copy);
        win.document.close();
        win.print();
        win.close();
    });
}