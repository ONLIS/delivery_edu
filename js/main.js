const buttonAuth = document.querySelector(".button-auth");
const buttonOut = document.querySelector(".button-out");
const userName = document.querySelector(".user-name");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.getElementById("logInForm");
const inputLogin = document.getElementById("login");
const inputPassword = document.getElementById("password");

let badLogin = false;
let badPas = false;

const login = (user) => {
    buttonAuth.style.display = 'none';

    buttonOut.style.display = 'flex';
    userName.textContent = user.login;
    userName.style.display = 'flex';
    modalAuth.style.display = 'none';
}

const logout = () => {
    buttonAuth.style.display = 'flex';

    buttonOut.style.display = 'none';
    userName.textContent = '';
    userName.style.display = 'none';

    localStorage.removeItem('user');
}

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
});
buttonOut.addEventListener('click', () => {
   logout();
});
closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none';
});

logInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if(inputLogin.textLength == 0){
        badLogin = true;
        alert("Please enter your login.");
    }
    else{
        badLogin = false;
    }
    if(inputPassword.textLength == 0){
        badPas = true;
        alert("Please enter your password.");
    }
    else{
        badPas = false;
    }

    if(!badLogin && !badPas){
        const user = {
            login: inputLogin.value,
            password: inputPassword.value
        }
        localStorage.setItem('user', JSON.stringify(user));
        login(user);
    }
})

if(localStorage.getItem('user')){
    login(JSON.parse(localStorage.getItem('user')));
}