const pinturinha = document.getElementById("pintura");
const cuadro = pinturinha.getContext("2d");

cuadro.fillStyle ="rgb(200, 0, 20)";
cuadro.fillRect(45,45,32,35);

function dibujar() {
    const pinturaMicro = document.getElementById("pinturita");
    if (pinturaMicro.getContext){
        const pincel = pinturaMicro.getContext("2d");
        pincel.fillStyle= "rgb(0, 0, 200 / 51%)";
        pincel.fillRect(50,80,40,20);
    }
}

dibujar()