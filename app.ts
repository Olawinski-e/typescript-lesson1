const userName = "estelle";
//userName = 3;

console.log(userName);

const button = document.querySelector("button");

function clickHandler() {
  console.log("Clicked!");
}

if (button) {
  button.addEventListener("click", clickHandler);
}
