const numero = 55;

function sumMult (factor, exponencial){
    const resultado = factor ** exponencial;
    return resultado;

}

var pepe = sumMult(4,5); 
const insertarTexto = document.createElement('h1');
insertarTexto.textContent = pepe;

document.getElementById('pajarito').appendChild(insertarTexto);