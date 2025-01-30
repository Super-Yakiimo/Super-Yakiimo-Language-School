window.onload = function () {
    let base = document.querySelector("#base");
    let btx = base.getContext('2d', { willReadFrequently: true });

    base.width = 500;
    base.height = 500;

    let silCan = document.querySelector("#silowette");
    let stx = silCan.getContext('2d');

    silCan.width = 500;
    silCan.height = 500;

    setup();

    document.querySelector("#enterBtn")
    .addEventListener("click", () => {

        btx.clearRect(0, 0, innerWidth, innerHeight);
        stx.clearRect(0, 0, innerWidth, innerHeight);

        let selectList = getInputs();

        if(selectList.length == 0){
            return alert('nothing selected');
        }

        let pic = BASE + selectList[Math.floor(Math.random() * selectList.length)].link;
        let img = document.createElement('img');
        img.src = pic;

        img.onload = () => {
            btx.drawImage(img, 0, 0, silCan.width, silCan.height);

            let imgData = btx.getImageData(0, 0, silCan.width, silCan.height);
            let pixel = imgData.data;

            for (let i = 0; i < pixel.length; i += 4) {
                pixel[i] = 0;
                pixel[i + 1] = 0;
                pixel[i + 2] = 0;
            }

            stx.putImageData(imgData, 0, 0);

        };
    });
}