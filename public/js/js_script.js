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

let buttonFunc = function () {
    console.log("Button clicked!")
};

let button = document.getElementById("button");

let inputFields = function () {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var street = document.getElementById("street").value;
    var house = document.getElementById("house").value;
    var recipient = document.getElementById("recipient").value;

    var gender;
    var radios = document.getElementsByName("gender");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }

    console.log([name, email, street, house, recipient, gender]);
    return [name, email, street, house, recipient, gender];
}

//button.addEventListener("click", inputFields);


