

let buttonFunc = function () {
    console.log("Button clicked!")
};

let button = document.getElementById("button");

let inputFields = function () {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    //var street = document.getElementById("street").value;
    //var house = document.getElementById("house").value;
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


