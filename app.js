const imgs = document.getElementById("img-baixos");
const img = document.querySelectorAll("#img-baixos img");

let id_indice_img = 0;

function carrossel() {
    id_indice_img++;

    if (id_indice_img > img.length - 1) {
        id_indice_img = 0;
    }

    imgs.style.transform = `translateX(${-id_indice_img * 300}px)`;

}

setInterval(carrossel,2000);