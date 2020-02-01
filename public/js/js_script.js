function menuItem(name, kcal, desc1, desc2, image){
    this.name = name;
    this.kcal = kcal;
    this.desc1 = desc1;
    this.desc2 = desc2;
    this.image = image;
    this.getName = function(){
        return this.name + ' ' + this.kcal;
    };
}

let b1 = new menuItem('Burger1', '750 kCal', 'Super tasty', 'Contains dead animals', 'https://cdn-rdb.arla.com/Files/arla-se/1361781217/43b7c050-b61b-4baa-8eb6-5a8ebb896bc4.jpg?crop=(104,0,-152,0)&w=479&h=335&ak=f525e733&hm=72b785fb');
let b2 = new menuItem('Burger2', '1750 kCal', 'Super super tasty', 'Also contains dead animals', 'https://www.halsanskok.se//sites/default/files/2019-06/190227_GG_Care2share_Incredible%20Burger.jpg');
let b3 = new menuItem('Burger3', '11750 kCal', 'Super tasty', 'Contains dead animals', 'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/05/veggie-burger-recipe-5.jpg');


let boxes = ['a','b','c'];
let menu = [b1,b2,b3];

let myElement = document.getElementById("burgers");
let box = document.getElementById("table_wrapper");

for (var x in menu)
{
		var burger = menu[x];
    
    var boxItem = document.createElement("div");
    boxItem.setAttribute("class", "box " + boxes[x]);

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
