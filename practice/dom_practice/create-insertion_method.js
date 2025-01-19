// tag way - Step 1 -> create tag
let nameIgiveForNewTag = document.createElement('div');

// step 2 -> style tag, if is needed
nameIgiveForNewTag.className = "bold";

// step 3 -> content (text, api, etc ...)
nameIgiveForNewTag.innerHTML = "I love fresh air";

// step 4 -> insert in the dom (in the document html structure body)
document.body.append(nameIgiveForNewTag);

//_> text simple - step 1 -> createTextNode
let Im_text_node = document.createTextNode("I'm a text node");

// step 2 -> insert in the dom
document.body.append(Im_text_node);

/////// insertion methods instead of body, puedo utilizar cualquie  tag

let div_appended = document.createElement('div');
div_appended.innerHTML = "deep blue ocean";
document.body.prepend(div_appended);

/*
node.append(...nodes or strings) – append nodes or strings at the end of node,
node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
node.before(...nodes or strings) –- insert nodes or strings before node,
node.after(...nodes or strings) –- insert nodes or strings after node,
node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
*/

let a_prepend = document.createElement('a');
a_prepend.innerHTML = '<a href = "https://pt.aliexpress.com/?gatewayAdapt=glo2bra"> hellllllo sou uma a com link</a>';
document.body.prepend(a_prepend);


ol.before('before'); // insert string "before" before <ol>
ol.after('after'); // insert string "after" after <ol>

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst); // insert liFirst at the beginning of <ol>

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast); // insert liLast at the end of <ol>
