//  <meta charset="UTF-8">
charsetMeta = document.createElement('meta');       //create meta tag
charsetMeta.setAttribute('charset', 'UTF-8');       //set charset to utf-8
document.head.appendChild(charsetMeta);             //append to head

//  <meta name="viewport" content="width=device-width, initial-scale=1.0">
viewportMeta = document.createElement('meta');
viewportMeta.setAttribute('name', 'viewport');
viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.head.appendChild(viewportMeta);

//  <link rel="icon" type="image/png" href="favicon.png">
let link = document.createElement("link");
link.rel = "icon";                  // set this link to icon
link.type = "image/png";            // or image/x-icon for .ico files
link.href = "favicon.png";          // specify the path to your favicon image
document.head.appendChild(link);    // Append the link element to the head of the document

//  <title>Create Simple Pages using js only</title>
document.title = "Create Simple Pages using js only";

//  <p>...</p>
let p = document.createElement("p");
p.textContent = "This is a website which built purely from JavaScript. Add '#' to change the box color, and pure numbers to change the border radius. \n Do you know how to create a blue circle from this website? \n (Hint: Blue is #0000ff, circle is 100px)";
p.style.whiteSpace = "pre-line";
document.body.appendChild(p);

//  <div id="box"></div>
let div = document.createElement("div");
div.id = "box"; // Adding id attribute
div.style.cssText = "height: 200px; \
                     width: 200px; \
                     background-color: white; \
                     border: 2px solid black; \
                     position: absolute; \
                     top: 105px; \
                     left: 25%;";
document.body.appendChild(div);

//  <input id=Ins, type="text">
let input = document.createElement("input");
input.id = "Ins"; // Adding id attribute
input.style.cssText = "background-color: white; \
                       height: 25px; \
                       width: 195px; \
                       position: absolute; \
                       top: 60px; \
                       left: 25%; \
                       border: 2px dashed black; \
                       border-radius: 5.5px;";
document.body.appendChild(input);


// Logics
let box = document.getElementById("box");
let Ins = document.getElementById("Ins");
Ins.addEventListener("input", function () {
    box.style.backgroundColor = Ins.value;
    box.style.borderRadius = Ins.value + "px";
})