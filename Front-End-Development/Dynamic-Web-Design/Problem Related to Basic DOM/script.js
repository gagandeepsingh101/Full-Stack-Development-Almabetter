// DOM Selection and Text Manipulation
let h1=document.querySelector("#main-container h1");
let p=document.querySelector(".intro");
h1.textContent="DOM Manipulation Assignment";
p.textContent+="In this assignment, you will practice DOM manipulation techniques."

// Adding HTML Content and Inline Styles
let box=document.querySelector(".box");
box.innerHTML+="<h2>Box Content</h2> <p>This box is being dynamically generated and styled using JavaScript.</p>"

// Inline styles
box.style.backgroundColor="#f2f2f2";
box.style.border="1px solid #333";
box.style.padding="10px";

// Working with Classes
let button = document.querySelector('#btn');
button.addEventListener('click',()=>{
    p.classList.toggle("highlighted");
});
