// Task 1 : DOM Manipulation

let container = document.querySelector(".container");
let changeColor = document.querySelector(".changeColor");
let appendParagraph = document.querySelector(".appendParagraph");

changeColor.addEventListener("click", function (e) {
  container.classList.toggle("addColor");
});

appendParagraph.addEventListener("click", function (e) {
  if (container.children.length > 0) {
    container.querySelector("p").remove();
  } else {
    let paragraph = document.createElement("p");
    paragraph.textContent = "Sample text for the new paragraph";
    container.appendChild(paragraph);
  }
});

// Task 2: Event Listeners and Event Object
let btnClick = document.querySelector(".btnClick");
let countClick = document.querySelector(".countClick span");
btnClick.addEventListener("click", function () {
  countClick.textContent = Number(countClick.textContent) + 1;
});

// Task 3: Event Propagation and Event Delegation
let buttonClick = document.querySelector(".btnContainer");
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.textContent);
  });
});

buttonClick.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "button") {
    alert(event.target.textContent);
  }
});
