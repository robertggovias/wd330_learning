/*why is needed to specify thata the element is HTML? */

document.body.before('<p>Hello</p>')


/* "beforebegin" – insert html immediately before elem,
"afterbegin" – insert html into elem, at the beginning,
"beforeend" – insert html into elem, at the end,
"afterend" – insert html immediately after elem. */

document.body.insertAdjacentHTML('beforebegin', '<strong class="rojo">e ai beforebegin</strong>')
document.body.insertAdjacentHTML('afterbegin', '<strong>e ai afterbegin</strong>')
ol.insertAdjacentHTML('beforeend', '<strong>e ai beforeend</strong>')
ol.insertAdjacentHTML('afterend', '<strong>e ai afterend</strong>')

