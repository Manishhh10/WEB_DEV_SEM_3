// const name = document.querySelector('.Name').value
// const email = document.querySelector('.Email').value

// const submit = document.querySelector('.submit')


function checkPassword(){
    const username = document.querySelector('.Username').value
    const password = document.querySelector('.Password').value
    const confirmPass = document.querySelector('.Confirm').value
    if (confirmPass != password) {
        alert("Password and Confirm Password must be same!")
    }else{
        console.log(username);
        console.log(password);
    }
}