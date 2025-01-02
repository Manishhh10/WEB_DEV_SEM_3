
const username = document.getElementById('username')
const password = document.getElementById('password')
const login = document.getElementById('login')

login.addEventListener('click',(e)=>{
    if (username.value!="" || password.value!="") {
        e.preventDefault()
        console.log(username.value);
        console.log(password.value);
    }
    username.value=""
    password.value=""
})
