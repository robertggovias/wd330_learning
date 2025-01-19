const hiram = 4;

async function obtenDatos () {

    const url = "https://jsonplaceholder.typicode.com/posts";
    const salidaInfo = document.getElementById("datosFetch");
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        const htmlInfo = datos.map((post) => `<h1>el titulo</h1></br><p> ${post.title}</p></br>`).join(""); 

            salidaInfo.innerHTML = htmlInfo;

        //console.log(datos);        
    } catch (error){
        console.error("Houston SOS este es el problema",error);
        salidaInfo = "<p>error se daño la computdora</p>"
    }
}

obtenDatos();



const paraInsertar = document.createElement("h1");
paraInsertar.textContent = hiram;


