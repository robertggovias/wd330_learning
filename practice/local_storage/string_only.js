localStorage.miMemoria = JSON.stringify({soy: "genial-localStorage"});

let nuevaVariable = JSON.parse(localStorage.miMemoria);
document.body.prepend(nuevaVariable.soy)

