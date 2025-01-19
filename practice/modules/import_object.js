/* import {admin} from './export_object'; */
//debo entender porqu eno funcion al importar desde admin el objeto
let admin = {
    name:"raul"
}


let objetado = document.getElementById("objeto_importado");

objetado.innerHTML = admin.name;