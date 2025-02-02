// question path
const PLAY = "../../resource/img/icon/player_button_blue01_saisei.png";
const DEFAULT = "../../resource/img/icon/blackbox_question_open.png";


function createBtn(path) {
    let btn = document.createElement("btn");
    let img = document.createElement("img");
    img.src = path;
    btn.appendChild(img);
    return btn;
}

function listenTest() {
    // get container and clear contents
    let testCon = document.querySelector("#test-con");

    // get words and pictures
    let list = getInputs().sort(() => Math.random() - 0.5);

    // return alert if none selected
    if (list == null || list.length == 0) {
        return alert('select something to study');
    }

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

    // start test
    let index = 0;

    const selectImage = () => {
        // clear test question screen
        testCon.innerHTML = "";

        // get the current question
        let quest = testList[index];

        // question button and set image
        let qstBtn = createBtn(PLAY);
        // speek when clicked
        qstBtn.addEventListener("click", () => {
            speak(quest.answer.name);
        });
        // add button to screen
        testCon.appendChild(qstBtn);

        // answer select buttons
        for (let i = 0; i < 4; i++) {
            // create button and add img
            let path = BASE + quest.option[i].link;
            let btn = createBtn(path);
            testCon.appendChild(btn);
            btn.addEventListener('click', () => {
                console.log(`${quest.option[i].name} == ${quest.answer.name} : ${quest.option[i].name == quest.answer.name}`);
                //speak(quest.option[i].name);
                if (quest.option[i].name == quest.answer.name) {
                    speak("correct");
                    setTimeout(() => {
                        index++;
                        selectSound();
                    }, 1000);
                }
                else {
                    speak("incorrect");
                }
            });
        }
    }

    const selectSound = () => {
        // clear test question screen
        testCon.innerHTML = "";

        // get the current question
        let quest = testList[index];

        // question button and set image
        let aPath = BASE + quest.answer.link;
        let qstBtn = createBtn(aPath);
        // add button to screen
        testCon.appendChild(qstBtn);

        // remeber the checked answer
        let checked;

        // answer select buttons
        for (let i = 0; i < 4; i++) {
            // create input
            let input = document.createElement("input");
            input.className = 'vocab-input';
            input.type = 'radio';
            input.name = 'vocab-test';
            input.id = `input${i}`;
            // create label
            let label = document.createElement("label");
            label.htmlFor = `input${i}`;
            label.innerHTML = `<img src="${PLAY}">`;
            // add to screen
            testCon.appendChild(input);
            testCon.appendChild(label);
            label.addEventListener('click', () => {
                speak(quest.option[i].name);
                checked = quest.option[i];
            });
        }

        // enter button
        let enterBtn = document.createElement('button');
        // enter answer
        enterBtn.addEventListener("click", ()=>{
            console.log(checked, quest.answer);
            if(checked.name == quest.answer.name){
                speak("correct");
                setTimeout(() => {
                    index++;
                    selectImage();
                }, 1000);
            }
        });
        enterBtn.innerHTML = "enter";
        testCon.appendChild(enterBtn);
    }

    if(Math.random() > 0.5){
        selectImage();
    }
    else {
         selectSound(); 
    }
   
}


function spellTest() {

    let list = getInputs();
    list = list.sort(() => Math.random() - 0.5);

    // return alert if none selected
    if (list == null || list.length == 0) {
        return alert('select something to study');
    }

    let index = 0;
    let item = list[index];

    let testCon = document.querySelector("#test-con");
    testCon.innerHTML = "";

    let qstBtn = createBtn(BASE + item.link);
    let input = document.createElement("input");
    input.type = "text";

    let entrBtn = createBtn(DEFAULT);

    entrBtn.addEventListener("click", () => {
        console.log(input.value, item.name);
        if (input.value == item.name) {
            index++;
            if (index >= list.length) {
                testCon.innerHTML = "";
                return alert('test finished');
            }
            item = list[index];
            qstBtn.innerHTML = `<img src=${BASE + item.link}>`;
        }
    });

    testCon.appendChild(qstBtn);
    testCon.appendChild(input);

    testCon.appendChild(entrBtn);

}

onload = function () {
    setup();
}
