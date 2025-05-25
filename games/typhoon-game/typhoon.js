const TEN = "typhoon/ten.png";
const TWENTY = "typhoon/twenty.png";
const THIRTY = "typhoon/thirty.png";
const FOURTY = "typhoon/fourty.png";
const SWITCH = "typhoon/switch.jpg";
const TIMES_TWO = "typhoon/timesTwo.png";
const TYPHOON = "typhoon/typhoon.jpg";

const WEIGHT_LIST = [
    TEN, TWENTY, THIRTY, FOURTY, SWITCH, TIMES_TWO, TYPHOON
];

function loadCards(number = 10) {
    let cardCon = document.querySelector("#cardCon");

    let sizeSelect = document.querySelector("#sizeSelect");
    let dim = Number(sizeSelect.value);

    let list = getInputs().sort(() => Math.random() - 0.5).slice(0, number);


    if (list == null || list.length == 0) {
        alert('select some cards');
    }

    let newBack = Array.from({ length: list.length }, () => WEIGHT_LIST[Math.floor(Math.random() * WEIGHT_LIST.length)]);

    cardCon.innerHTML = "";

    for (let i = 0; i < list.length; i++) {

        // create elements
        let flipCard = document.createElement("div");
        flipCard.id = `card${i}`;
        flipCard.className = "flip-card";
        flipCard.setAttribute('style', `width: ${dim}vw; height: ${dim}vw;`);

        // flip card inner 
        let flipInner = document.createElement("div");
        flipInner.className = "flip-card-inner";

        // front of card
        let flipFront = document.createElement("div");
        flipFront.className = "flip-card-front";

        // front image
        let frontImg = document.createElement("img");
        frontImg.src = BASE + list[i].link;
        frontImg.alt = "front image";

        // back of card
        let flipBack = document.createElement("div");
        flipBack.className = "flip-card-back";

        // back image
        let backImage = document.createElement("img");
        backImage.src = BASE + newBack[i % WEIGHT_LIST.length]
        backImage.alt = "back image";

        // add image to front
        flipFront.appendChild(frontImg);

        // add back image to back card
        flipBack.appendChild(backImage);

        // add to inner
        flipInner.appendChild(flipFront);
        flipInner.appendChild(flipBack);

        // add inner to outer
        flipCard.appendChild(flipInner);

        // add to board
        cardCon.appendChild(flipCard);
    }

    for (let i = 0; i < list.length; i++) {

        let card = document.querySelector("#card" + i);
        card.addEventListener("click", () => {
            card.classList.add("flip");
            console.log("click");

        });
    }

}


window.onload = function () {
    setup();

    let sizeSelect = document.querySelector("#sizeSelect");
    let output = document.querySelector("#output");
    output.innerHTML = sizeSelect.value;

    sizeSelect.addEventListener("change", () => {
        let number = Number(sizeSelect.value);
        let cards = document.querySelectorAll(".flip-card");
        output.innerHTML = number;
        console.log(cards.length);
        cards.forEach(card => {
            card.setAttribute('style', `width: ${number}vw; height: ${number}vw;`);
            console.log(card);
        });
    });
}