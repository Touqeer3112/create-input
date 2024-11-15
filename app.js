var input = document.getElementById("input");
var texts = document.getElementById("texts");

function add() {
    var inputValue = input.value;
    if (inputValue == ""){
        alert("Enter your Value");
    }
    else{
        var Element = document.createElement("li");
        Element.textContent = inputValue;
        texts.appendChild(Element);
        texts.style.display = "block";
        input.value ="";
    }
    // console.log(Element);
}



