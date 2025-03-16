// question path
const PLAY = "../../resource/img/icon/player_button_blue01_saisei.png";
const QUEST = "../../resource/img/icon/blackbox_close_question.png";
const SOUND = "../../resource/img/icon/TC.png";
const ENTER = "../../resource/img/icon/enter.png";

// types of questions enum
const TYPE = Object.freeze({
    SELECT_SOUND: "#selectSound",
    SELECT_IMG: "#selectImage",
    READ: "#reading",
    SPELL: "#spelling"
});

function createBtn(path) {
    let btn = document.createElement("btn");
    let img = document.createElement("img");
    img.src = path;
    img.alt = path;
    btn.appendChild(img);
    return btn;
}

/*
generate questions and selection options
*/
function createTest(list) {
    // create test questions
    let testList = [];

    // loop through words and get one answer and three other options
    for (let i = 0; i < list.length; i++) {
        let temp = JSON.parse(JSON.stringify(list)); // deep copy
        // slice off curent index and store it as answer
        let answer = temp.splice(i, 1)[0];
        // pick three more random images
        let option = [answer];
        for (let i = 0; i < 3; i++) {
            let rnd = Math.random() * temp.length;
            option.push(temp.splice(rnd, 1)[0]);
        }
        option.sort(() => Math.random() - 0.5); // shuffle
        testList.push({ answer, option });
    }

    return testList;
}


/*
check which types are selected and retun a list 
of user selected question types
*/

const getChecked = () => {
    // check boxes
    let sound = document.querySelector(TYPE.SELECT_SOUND);
    let img = document.querySelector(TYPE.SELECT_IMG);
    let read = document.querySelector(TYPE.READ);
    let spell = document.querySelector(TYPE.SPELL);

    // list of selected
    let list = [];


    if (sound.checked) {
        list.push(TYPE.SELECT_SOUND);
    }

    if (img.checked) {
        list.push(TYPE.SELECT_IMG);
    }

    if (read.checked) {
        list.push(TYPE.READ);
    }

    if (spell.checked) {
        list.push(TYPE.SPELL);
    }

    return list;
}

/*
main function for test
*/

const startTest = () => {

    // html handlers
    let testCon = document.querySelector("#test-con");
    let questCon = document.querySelector("#quest-con");
    let enterCon = document.querySelector("#enter-con");

    /*
    checking user input and validating response
    */

    // get use input question types
    let list = getChecked();

    // check if none selected
    if (list == null || list.length == 0) {
        return alert('select question type please');
    }

    // get words and pictures
    let words = getInputs().sort(() => Math.random() - 0.5);

    // return alert if none selected
    if (words == null || words.length == 0) {
        return alert('select something to study');
    }

    /*
    test setup
    */
    // create test questions
    let testList = createTest(words);
    let index = 0;

    const createQuestion = () => {

        // clear the qeustion containers
        questCon.innerHTML = "";
        enterCon.innerHTML = "";
        testCon.innerHTML = "";

        // select one of the question types
        let select = list[Math.floor(Math.random() * list.length)];

        console.log(select);

        let quest = testList[index];
        let qstBtn;
        let path;
        let userSelect = "";

        /*
        create buttons to select answer
        TYPE OF BUTTON 
        true : picture 
        false : audio
        testCon : container for questions
        */

        function createSelect(type) {
            // answer select buttons
            for (let i = 0; i < 4; i++) {
                // select the image based on the type of question
                let imgLink = (type) ? BASE + quest.option[i].link : SOUND;
                // create input
                let input = document.createElement("input");
                input.className = 'vocab-input';
                input.type = 'radio';
                input.name = 'vocab-test';
                input.id = `input${i}`;
                // create label
                let label = document.createElement("label");
                label.htmlFor = `input${i}`;
                label.innerHTML = `<img src="${imgLink}">`;
                label.className = 'select-img';
                // add to screen
                testCon.appendChild(input);
                testCon.appendChild(label);

                // create onclick to set the selected answer
                input.addEventListener("click", () => {
                    userSelect = quest.option[i].name;
                });

                // play audio if play image 
                if (type == false) {
                    label.addEventListener('click', () => {
                        speak(quest.option[i].name);
                        checked = quest.option[i];
                    });
                }
            }
        }

        // based on the type do stuff
        switch (select) {
            case TYPE.SELECT_IMG:

                // question button and set image
                qstBtn = createBtn(SOUND);
                qstBtn.className = "quest-btn";
                // add button to screen
                questCon.appendChild(qstBtn);

                createSelect(true);

                // speek when clicked
                qstBtn.addEventListener("click", () => {
                    speak(quest.answer.name);
                });

                break;
            case TYPE.SELECT_SOUND:

                // question button and set image
                qstBtn = createBtn(BASE + quest.answer.link);
                qstBtn.className = "quest-btn";
                // add button to screen
                questCon.appendChild(qstBtn);

                createSelect(false);

                break;
            case TYPE.SPELL:

                // question button and set image
                qstBtn = createBtn(BASE + quest.answer.link);
                qstBtn.className = "quest-btn";
                // add button to screen
                questCon.appendChild(qstBtn);

                // speek when clicked
                qstBtn.addEventListener("click", () => {
                    speak(quest.answer.name);
                });

                let input = document.createElement("input");
                input.type = "text";

                input.addEventListener("change", () => {
                    userSelect = input.value;
                });

                testCon.appendChild(input);

                break;
            case TYPE.READ:

                let text = document.createElement('h1');
                text.innerHTML = quest.answer.name;
                questCon.appendChild(text);
                createSelect(true);

                break;
            default:
                break;
        }

        // enter button
        let enterBtn = createBtn(ENTER);

        enterBtn.addEventListener("click", () => {
            if (userSelect === quest.answer.name) {
                speak('correct');
                setTimeout(() => {
                    index++;
                    createQuestion();
                }, 1000);
            }
            else {
                speak('incorrect');
            }
            console.log(userSelect);
            console.log(quest.answer.name);


        });

        enterCon.appendChild(enterBtn);
    }

    createQuestion();
}

onload = function () {
    setup();
}
