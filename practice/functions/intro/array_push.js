function array_push(anArray){
    let salida = [];
    let iterando = 0;

    for (iterando; iterando < anArray.length; iterando++){
        salida.push(anArray[iterando]*2);
    }
    return salida
}
miArray = [3,2,5];
let resultado = array_push(miArray);

console.log(resultado);

const insertarArrayHtml = document.createElement('h1');

insertarArrayHtml.textContent = resultado;

document.getElementById('pepino').appendChild(insertarArrayHtml);