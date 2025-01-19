let clonazo = ol.cloneNode(true); //with childres
let clonizo = ol.cloneNode(false);//without children
let clonner = ol.lastElementChild.cloneNode(true);
ol.prepend(clonner);
setTimeout(()=>ol.prepend(clonner),7000);
setTimeout(()=>ol.prepend(clonazo),8000);
setTimeout(()=>ol.prepend(clonizo),9000);