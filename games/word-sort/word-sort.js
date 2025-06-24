function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    if(ev.target.id.includes("word") || ev.target.id == null || ev.target.id == ""){
        return;
    }
    console.log(ev.target.id);
    ev.target.appendChild(document.getElementById(data));
}

const SENTANCE = [
    "What is the answer to this question",
    "What does Ken want to become?",
    "When does Ken play soccer?",
    "Where does the family live?",
    "Where does the family live?",
    "Why is the sky blue?",
    "How do you get to school?",
    "Which book do you want to read?",
]

window.onload = function () {
    const div1 = document.querySelector("#div1");
    const div2 = document.querySelector("#div2");

    let select = SENTANCE[0];
    let list = select.split(" ");
    console.log(list);
    for (let i = 0; i < 5; i++) {
        let div = document.createElement("div");
        let h1 = document.createElement("h1");

        h1.innerHTML = list[i];

        div.className = "drag";
        div.id = `word${i}`;
        div.draggable = true;

        div.addEventListener("dragstart", (ev) => {
            ev.dataTransfer.setData("text", ev.target.id);
        });

        div.appendChild(h1);
        div1.appendChild(div);


        console.log(div);
    }

}