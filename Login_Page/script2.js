const email = document.querySelector('#email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const signup = document.getElementById('sign-up')

signup.addEventListener('click',(e)=>{
    if (username.value!="" && password.value!="" && email.value!="") {
        e.preventDefault()
        console.log(email.value);
        console.log(username.value);
        console.log(password.value);

        localStorage.setItem("email", email.value);
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
    }
    username.value=""
    password.value=""
    email.value=""
})
