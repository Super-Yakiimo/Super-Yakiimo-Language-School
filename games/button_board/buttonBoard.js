/* 

vocab stufy stuff learn screen 

*/

// vocab container
const VOCAB_ID = "#vocabCardBox";

// create buttons for vocab words
// get list of vocab and create vocab buttons
function vocabWords() {
    let words = getInputs();
    let vocabBox = document.querySelector(VOCAB_ID);

    // return alert if none selected
    if(words == null || words.length == 0){
        return alert('select something to study');
    }

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

        img.src = BASE + obj.link;
        div.appendChild(nameText);
        div.appendChild(btn);
        vocabBox.appendChild(div);

        btn.addEventListener("click", () => {
            speak(obj.name);
        });
    });
}

window.onload = function(){
    setup();
}