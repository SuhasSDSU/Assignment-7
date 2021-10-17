/*eslint-env browser*/

// Old Way
function displayMessage() {
    window.alert("I have been clicked.");
}

// Element Property
var myElement = document.getElementById("myButton")
myElement.onclick = function () {
    window.alert("I have been clicked.");
}

// User Defined
function btnOnClick() {
    window.alert("I have been clicked.")
}
var myOtherButton = window.document.getElementById("myOtherButton")
myOtherButton.addEventListener("click", btnOnClick);

// Call-Back Function
var myOtherButton2 = window.document.getElementById("myOtherButton2")
myOtherButton2.addEventListener("click", function() {
    window.alert("I have been clicked.")
});

// Event Listners
function init() {
    "use strict";
    var myOtherButton3 = window.document.getElementById("myOtherButton3")
    myOtherButton3.addEventListener("click", function() {
        window.alert("I have been clicked.")
    });
}

window.addEventListener("load", init);