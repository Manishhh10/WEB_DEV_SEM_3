const title = document.querySelector('.welcome');
const paragraph = document.querySelector('.paragraph');
const highlight = document.querySelector('.Highlight_button');
const toggle = document.querySelector('.toggle_button')
const add = document.querySelector('.AddList_button');
const remove = document.querySelector('.RemoveList_button');
const list = document.querySelector('.list');

highlight.addEventListener('click',() => {
    title.style.color = "red";
    paragraph.style.color = "blue";
})

add.addEventListener('click',()=>{
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.childElementCount + 1}`
    // newItem.className = ""
    list.appendChild(newItem);
})

remove.addEventListener('click',()=>{
    // const lastchild = list.lastChild;
    if (list.lastElementChild) {
        list.lastChild.remove();
    }
})

toggle.addEventListener('click',()=>{
    title.style.color = "";
    paragraph.style.color = "";
})