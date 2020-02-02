/*
let boxes = ['a','b','c'];
let box = document.getElementById("table_wrapper");

for (var x in food)
{
		var burger = food[x];
    
    var boxItem = document.createElement("div");
    boxItem.setAttribute("class", "box " + boxes[x%3]);

    var pName = document.createElement("p");
    pName.textContent = burger.name;
    boxItem.appendChild(pName);

    var pImage = document.createElement("img");
    pImage.setAttribute("src", burger.image);
    pImage.setAttribute("width", "250");
    pImage.setAttribute("height", "175");
    boxItem.appendChild(pImage);

    var descs = document.createElement("ul");
    var kcal = document.createElement("li");
    kcal.textContent = burger.kcal;
    var desc1 = document.createElement("li");
    desc1.textContent = burger.desc1;
    var desc2 = document.createElement("li");
    desc2.textContent = burger.desc2;

    descs.appendChild(kcal);
    descs.appendChild(desc1);
    descs.appendChild(desc2);
    boxItem.appendChild(descs);

    box.appendChild(boxItem);
}

*/
