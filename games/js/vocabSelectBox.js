/*
vocab select box partical to be incued in programs
by James Lehoe

how to use : 
add div tag with id : vocabBox to the body of the document
<div id="vocabBox"></div>

make sure to include this script 
bellow the div mentioned above

call this function to get the current 
state of the selected check boxes

make sure img-data.js is included before this is included in the document

############################################################

...

<div id="vocabBox"></div>

...

<script src="../js/img_database.js"></script>
<script src="../js/vocabSelectBox.js"></script>

###########################################################

*/

// list of category names
const CAT_LIST = ["Food", "Beverage", "Fruit", "Vegetables", "Colors", "Stationary", "Weather", "Days", "Shapes", "Dessert", "School", "Town"];

// array of vocab lists in same postion 
const VOCAB_LIST = [FOOD, BEVERAGE, FRUIT, VEGETABLE, COLOR, STATIONARY, WEATHER, DAYS, SHAPE, DESSERT, SCHOOL, TOWN];

/* start */
function setup(){
    let vocabBox = document.querySelector("#vocabBox");

    vocabBox.style = "border:1px solid black;padding:10px;margin:5px;border-radias:10%;";

    if(vocabBox == null){
        return console.error('vocab box not found please add div with id vocab box');
    }

    for(let i = 0; i < CAT_LIST.length; i++){
        // createinput
        let input = document.createElement("input");
        input.type = 'checkbox';
        input.id = CAT_LIST[i];

        // create tag
        let label = document.createElement("label");
        label.innerHTML = CAT_LIST[i];

        vocabBox.appendChild(input);
        vocabBox.appendChild(label);
    }
}

function getInputs(){
    let selectList = [];
    // check each input and add objects if checked
    for(let i = 0; i < CAT_LIST.length; i++){
        let input = document.getElementById(`${CAT_LIST[i]}`);
        if(input.checked){
            selectList = selectList.concat(VOCAB_LIST[i]);
        }
    }
    // return the list of selected vocab lists
    return selectList.sort(() => Math.random() - 0.5);
}
