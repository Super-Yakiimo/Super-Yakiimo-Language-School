/* 

vocab stufy stuff learn screen 

*/

// vocab variables
const SOUND = "https://freesvg.org/storage/img/thumb/TC.png";

const CORRECT = "https://freesvg.org/storage/img/thumb/green-tick.png";

const INCORRECT = "https://freesvg.org/storage/img/thumb/milker_X_icon.png";


// create buttons for vocab words
// get list of vocab and create vocab buttons
function vocabWords(words) {
    let vocabBox = document.querySelector("#vocabBox");

    showVocab();
    hidePuzzle()

    vocabBox.innerHTML = "";

    words.forEach((obj) => {
        // vocab box
        let div = document.createElement("div");
        div.className = "vocab-card";

        // button
        let btn = document.createElement("button");


        // image
        let img = document.createElement("img");

        // add image to button
        btn.appendChild(img);

        // name text
        let nameText = document.createElement("h1");
        nameText.innerHTML = obj.name;

        img.src = obj.link;
        div.appendChild(nameText);
        div.appendChild(btn);
        vocabBox.appendChild(div);

        btn.addEventListener("click", () => {
            let utterance = new SpeechSynthesisUtterance(obj.name);
            speechSynthesis.speak(utterance);
        });
    });
}

function hideVocab() {
    let vocabOuter = document.querySelector("#vocabOuter");
    vocabOuter.style.display = 'none';
}

function showVocab() {
    let vocabOuter = document.querySelector("#vocabOuter");
    vocabOuter.style.display = 'block';
}


/*

vocab test stuff

*/

// control overall test functions 
// change question and use each vocab term once
function vocabTest(list) {
    // list of test questions and answers
    let testList = [];

    // create scamble copy of list to go through all vocab terms
    let copy = deepCopy(list).sort(() => Math.random() - 0.5);

    for (let i = 0; i < copy.length; i++) {
        // extract the current answser from the copy list
        let answer = copy[i];

        // create a temp copy to pull from so no image is shown twice
        let temp = deepCopy(copy);
        temp.splice(i, 1); // remove answer so only can be added once

        // options list is used to make the selectable answers for the test
        // first addiciton is the answer
        let option = [answer];

        // add three more to options so a total of four answers are selectable
        for (let i = 0; i < 3; i++) {
            option = option.concat(temp.splice(Math.floor(Math.random() * temp.length), 1));
        }

        // shuffle options so it is not obvios
        option = option.sort(() => Math.random() - 0.5);

        // add stuff to test list
        testList.push({ answer, option });
    }
    return testList;
}

// clear question screen and add new question buttons each round

/*
set puzzle 
options : pass in four options to set the anser buttons
answer passin the index of the answer 
*/
function setPuzzle(list) {
    // show screen
    showPuzzle();
    hideVocab();

    let current = 0;
    let score = 0;

    // create test question and answers
    let testList = vocabTest(list);

    // show user if answer was correct or incorrect
    let result = document.querySelector('#result');
    let resultImg = document.querySelector('#resultImg');

    // question select emements go in this box
    let puzzleBox = document.querySelector('#puzzleBox');


    // control function to loop through
    const control = () => {
        current++;

        if (current >= testList.length) {
            // end
            alert(`test end score ${score}/${current}`);
            return hidePuzzle();
        }

        setup(current);
    }

    // setup the puzzle
    const setup = () => {
        let questObj = testList[current];
        console.log(questObj);

        // clear box
        puzzleBox.innerHTML = '';

        // create question box
        let question = document.createElement('div');
        let qImg = document.createElement('img');
        question.id = 'question';
        qImg.src = SOUND;
        question.appendChild(qImg);
        puzzleBox.appendChild(question);

        // have the question box speek text
        question.addEventListener('click', () => {
            let utterance = new SpeechSynthesisUtterance(questObj.answer.name);
            speechSynthesis.speak(utterance);
        });

        // list of inputs to store checked state
        let anList = [];

        // create the boxes for selecting answer
        for (let i = 0; i < 4; i++) {
            // radio input
            let input = document.createElement('input');
            input.type = 'radio';
            input.name = 'vocab-test';
            input.id = questObj.option[i].name;
            // add input to anList array
            anList.push(input);

            // label for input
            let label = document.createElement('label');
            label.id = `label${i}`;
            label.htmlFor = questObj.option[i].name;

            // image to go in the label
            let img = document.createElement('img');
            img.src = questObj.option[i].link; // need to finish later

            // add elements to screen
            label.appendChild(img);
            puzzleBox.appendChild(input);
            puzzleBox.appendChild(label);
        }
        // create the enter button
        let enterBtn = document.createElement('button');
        enterBtn.id = 'enter';
        enterBtn.innerHTML = "ENTER";
        puzzleBox.appendChild(enterBtn);

        const getChecked = () => {
            for (let i = 0; i < anList.length; i++) {
                if (anList[i].checked) {
                    return anList[i].id;
                }
            }
            return null;
        }

        enterBtn.addEventListener("click", () => {
            let answer = getChecked();
            if (answer == null) {
                return alert('no answer is selected');
            }

            score += (answer == questObj.answer.name) ? 1 : 0;
            resultImg.src = (answer == questObj.answer.name) ? CORRECT : INCORRECT;
            result.style.visibility = 'revert';

            setTimeout(() => {
                result.style.visibility = 'hidden';
                console.log((answer == questObj.answer.name) ? 'CORRECT' : 'INCORRECT')
                control();
            }, 1000);

        });
    }

    setup();

}

function showPuzzle() {
    let questionBox = document.querySelector("#questionBox");
    questionBox.style.display = 'block';
}

function hidePuzzle() {
    let questionBox = document.querySelector("#questionBox");
    questionBox.style.display = 'none';
}


function deepCopy(array) {
    return JSON.parse(JSON.stringify(array));
}