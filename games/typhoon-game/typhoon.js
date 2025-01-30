const BACK = [
    "https://illustgo.com/postsimgs/l/ig000828.png", //10
    "https://illustgo.com/postsimgs/l/ig000828.png", //10
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs714DMCC8cf82qM_lENBMAqFpwoK5DQunWQ&s", //20
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs714DMCC8cf82qM_lENBMAqFpwoK5DQunWQ&s", // 20
    "https://img.freepik.com/premium-photo/silver-3d-numbers-30-thirty-isolated-white-background-3d-illustration_394271-8497.jpg", //30
    "https://png.pngtree.com/png-vector/20231006/ourmid/pngtree-wooden-numeric-40-cipher-png-image_10081430.png", //40
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyZOubh2MCIDF2iKy6lUEccQnWLksxU1gLw&s", //switch
    "https://media.istockphoto.com/id/868927780/ja/%E3%83%99%E3%82%AF%E3%82%BF%E3%83%BC/%E9%9D%92%E8%89%B2%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB%E8%A8%98%E5%8F%B7%E5%B5%90%E3%81%AE%E3%83%8F%E3%83%AA%E3%82%B1%E3%83%BC%E3%83%B3.jpg?s=612x612&w=0&k=20&c=ZK5QiuamITrZ8ahdX97TEc6HLwaPIPLu495_3LO1qYE=", //typhoon
    "https://png.pngtree.com/png-clipart/20240208/original/pngtree-x2-3d-choice-photo-png-image_14262939.png" // x2
];

let cardSelect = document.querySelector('select');

cardSelect.addEventListener('change', (event) => {
console.log(event.target.value);
loadCards(event.target.value)
});


function loadCards(select) {

let cardCon = document.querySelector("#cardCon");

let list = [];

switch (select) {
    case "Fruit":
        list = FRUIT.sort(() => Math.random() - 0.5);
        break;
    case "Vegetable":
        list = VEGETABLE.sort(() => Math.random() - 0.5);
        break; // mix of 12 random
    case "Mix of nine":
        list = FRUIT.concat(VEGETABLE).sort(() => Math.random() - 0.5);
        list = list.slice(0, FRUIT.length);
        break;
    case "All cards": // cards
        list = FRUIT.concat(VEGETABLE).sort(() => Math.random() - 0.5);
        break;

}

let newBack = Array.from({ length: list.length }, () => BACK[Math.floor(Math.random() * BACK.length)]);

cardCon.innerHTML = "";

for (let i = 0; i < list.length; i++) {
    cardCon.innerHTML += '<div id="card' + i + '" class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img src="' + list[i] + '" alt="Avatar" style="width:300px;height:300px;"></div><div class="flip-card-back"><img src="' + newBack[i % BACK.length] + '"></div></div></div>';
}

for (let i = 0; i < list.length; i++) {

    let card = document.querySelector("#card" + i);
    card.addEventListener("click", () => {
        card.classList.add("flip");
        console.log("click");

    });
}

}