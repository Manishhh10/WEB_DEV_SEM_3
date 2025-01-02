const title = document.getElementById("hello")
const paragraph = document.getElementById("para")
const button = document.getElementById("btn")
console.log(title);
console.log(button);


button.addEventListener('click', () => {
    paragraph.style.color = "red";
    paragraph.style.fontWeight = "normal";
})


document.createElement(li)