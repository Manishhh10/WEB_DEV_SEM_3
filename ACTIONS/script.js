const Input = document.getElementById('input1')
const Input2 = document.getElementById('input2')
const Input3 = document.getElementById('input3')


function changeName(ev){
    console.log(ev);
    console.log(ev.target.value);
}

function validateName(e) {
    if (e.target.value == "r") {
        console.log("You have typeed r.");
    }
}

function changeBorder(e) {
    Input3.style.borderColor = "red";
}


Input.addEventListener("change", changeName);
Input2.addEventListener("change", validateName);
Input3.addEventListener("change", changeBorder);