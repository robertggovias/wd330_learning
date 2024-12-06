function array_push(anArray, instrucciones){
    let salida = [];
    let iterando = 0;

    for (iterando; iterando < anArray.length; iterando++){
        salida.push(instrucciones(anArray[iterando],5));
    }
    return salida
}
miArray = [3,2,5];
let resultado = array_push(miArray,dividir);
function dividir(input,valor){
    return input/valor;
}
console.log(resultado);

/* const insertarArrayHtml = document.createElement('h1');

insertarArrayHtml.textContent = resultado;

document.getElementById('pepe').appendChild(insertarArrayHtml); */