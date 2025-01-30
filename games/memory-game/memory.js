// images 
const QUEST = BASE + "/mono-gnome-question.png";

// dimensions of cards
const DIM = 200;

// create game
function createGame(width, height) {
    // add cards based on select
    let cards = getInputs();

    // return if nothing selected 
    if (cards.length == 0) {
        return alert('nothing selected');
    }

    // get number of cards based on width and height
    let length = width * height;

    // get the number of unique cards length / 2
    let uniqueNumber = length / 2;

    // check if there are not enough selected cards for this board size
    if (uniqueNumber > cards.length) {
        return alert(`please select more cards if you want to make a ${width} by ${height} board`);
    }

    let randCards = cards.sort(() => Math.random() < 0.5);

    // create copy of cat data for number of cats being used
    let slicedCards = randCards.slice(0, length / 2);

    // create an array with two of each card
    // crate array of  cat cards two each
    let ls = Array.from({ length: slicedCards.length * 2 }, (value, index) => index % slicedCards.length).sort(() => Math.random() < 0.5);

    // make randomm again!!!
    for (let i = 0; i < ls.length; i++) {
        let a = Math.floor(Math.random() * ls.length);
        let c = ls[i];
        ls[i] = ls[a];
        ls[a] = c;
    }

    /*
    making cards time to add to the screen
    */

    // set board px w and h based on puzzle dimensions
    let cardParent = document.querySelector("#cardParent");
    cardParent.style.width = `${DIM * width}px`;
    cardParent.style.width = `${DIM * height}px`;

    // clear cardParent
    cardParent.innerHTML = "";

    let cardList = [];

    let last = null;

    let wait = false;

    // loop through all the cards
    ls.forEach((value, index) => {

        let card = slicedCards[value];

        // get the 
        let link = card.link;

        let memoryCard = document.createElement('div');
        memoryCard.className = "memory-card";

        let memoryCardInner = document.createElement('div');
        memoryCardInner.className = "memory-card-inner";

        let memoryCardFront = document.createElement('div');
        memoryCardFront.className = "memory-card-front";

        let memoryCardBack = document.createElement('div');
        memoryCardBack.className = "memory-card-back";

        // back image
        let back = document.createElement('img');
        back.width = DIM;
        back.height = DIM;
        back.src = BASE + link;

        // front image 
        let front = document.createElement("img");
        front.width = DIM;
        front.height = DIM;
        front.src = QUEST;

        // add canvas to back
        memoryCardBack.appendChild(back);

        // add image to front
        memoryCardFront.appendChild(front);

        // add back and front to inner
        memoryCardInner.appendChild(memoryCardBack);
        memoryCardInner.appendChild(memoryCardFront);

        // add inner to outer
        memoryCard.appendChild(memoryCardInner);

        // add card to canvas
        cardParent.appendChild(memoryCard);

        // add to card list
        cardList.push(memoryCard);

        // add onclick listener
        memoryCard.addEventListener("click", () => {

            // already flipped 
            if (wait || cardList[index].classList.contains("flip")) {
                return;
            }

            speak(card.name);

            memoryCard.classList.add('flip');

            const flipBack = () => {
                memoryCard.classList.remove('flip');
                cardList[last.index].classList.remove('flip');
                last = null;
                wait = false;
            }

            if (last != null && last.value == value) {
                last = null;
            }
            else if (last != null) {
                wait = true;
                setTimeout(flipBack, 2000);
            }
            else {
                last = { value, index };
            }
        });
    });

}


window.onload = function(){
    setup();
    genVoiceControl();
}