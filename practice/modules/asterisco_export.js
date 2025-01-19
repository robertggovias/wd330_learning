function golpeFuerte(parteGolpeda) {
    let div = document.createElement('div');
    div.innerHTML = "protege con fuerza " + parteGolpeda;
    document.body.prepend(div);
    /* document.body.prepend(parteGolpeda); */
    /* let golpe = "cuidado con " + parteGolpeda;
    return golpe */
}

function golpeSuave(parteGolpeda){
    let div = document.createElement('div');
    div.innerHTML = "cuidado en la " + parteGolpeda;
    document.body.prepend(div);
    /* document.body.prepend(parteGolpeda); */
/*     let golpe = "cuidado con " + parteGolpeda;
    return golpe */
}

golpeSuave(parteGolpeda)
golpeFuerte(parteGolpeda)

export {golpeFuerte, golpeSuave};
