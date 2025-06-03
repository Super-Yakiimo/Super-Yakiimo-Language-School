const COLORS = ["red", "green", "blue", "orange", "yellow", "purple", "pink", "gold"];

let markers = document.querySelectorAll(".marker");

let mover;

let pick = false;
let selectMarker = null;


COLORS.forEach((color) => {
    let input = document.querySelector("#input" + color);
    let marker = document.querySelector("#marker" + color);

    input.addEventListener("change", () => {
        console.log(input.value);
        console.log(input.value);
        marker.innerHTML = input.value;

    });
});

document.addEventListener('mousemove', (event) => {
    if (pick) {
        selectMarker.style.left = (event.clientX - 25) + 'px';
        selectMarker.style.top = (event.clientY - 25) + 'px';
    }
})

markers.forEach((marker) => {
    marker.addEventListener('mousedown', (event) => {
        pick = true;
        selectMarker = marker;
    });

    marker.addEventListener('mouseup', (event) => {
        pick = false;
        selectMarker = null;
    });
});