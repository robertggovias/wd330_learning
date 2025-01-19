//function to return
export function playSong(song){
    let div = document.createElement('div');
    div.innerHTML = "hello " + song;
    document.body.prepend(div);
}
playSong(song)