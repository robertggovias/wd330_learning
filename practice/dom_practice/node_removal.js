let booom = document.getElementById("bomba");
let i = 1;
function boom (sou_um_numero){
    for(i ; i < 153; i++){
        setTimeout(() => document.body.prepend(i), 1000);
    }
    setTimeout(() => liFirst.remove(), 2000);
    setTimeout(() => liLast.remove(), 3000);
    setTimeout(() => ol.firstElementChild.remove(), 4000);   
}
let magic = ol.firstElementChild;
setTimeout(()=> ol.lastElementChild.after(magic), 5000);    

//Un detalle interezante es que al insertar un lemento que yaexistia el desaparece de donde estaba, porque simplemente no fue clonado

