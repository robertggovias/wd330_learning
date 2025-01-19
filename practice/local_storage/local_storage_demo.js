//mejor no intentar That’s allowed for historical reasons, and mostly works, but generally not recommended, because:
//If the key is user-generated, it can be anything, like length or toString, or another built-in method of localStorage. In that case getItem/setItem work fine, while object-like access fails:


let x = 45;
let y = 15;
let g = 23;
let h = 23;


localStorage.setItem('llave_1',x);
localStorage.setItem('llave_2',y);

var t = localStorage.getItem('llave_1')+localStorage.getItem('llave_2');
document.body.prepend(t);
setTimeout(() => document.body.prepend(t),3000)
localStorage.setItem('llave_1',g);
localStorage.setItem('llave_2',h);
var t = localStorage.getItem('llave_1')+localStorage.getItem('llave_2');

//let f = localStorage.getItem('cansado')+localStorage.getItem('sueño');

