"use strict";
var userName = "estelle";
//userName = 3;
console.log(userName);
var button = document.querySelector("button");
function clickHandler() {
    console.log("Clicked!");
}
if (button) {
    button.addEventListener("click", clickHandler);
}
