const submit = document.querySelector('.wrapper .submit');
const username = document.querySelector('.wrapper .username');
const email = document.querySelector('.wrapper .email');
const message = document.querySelector('.wrapper .message');
const file = document.querySelector('.wrapper .file');

const correctEmail = ['gmail.com', 'outlook.com'];
var domen;

function check() {
    if(file.value != 0){
        file.disabled = true;
        file.parentNode.style.opacity = .7;
    }
    domen = email.value.split('@');
    if(correctEmail.indexOf(domen[1]) == -1){
        email.style.border = '1px solid red';
    }else {
        email.style.borderColor = 'green';
    }
    if(username.value != 0 && email.value != 0  && message.value != 0 && file.value != 0 && correctEmail.indexOf(domen[1]) != -1) {
        submit.disabled = false;
    }else {
        submit.disabled = true;
    }
}
document.body.addEventListener('input', check);
document.body.addEventListener('change', check);

let usernameValue = username.value;
let emailValue = email.value;

username.addEventListener('input', onInput);
email.addEventListener('input', onInputEmail);

function onInput(e){
    var newValue = e.target.value;
    if( newValue.match(/[^a-zA-Zа-яА-Я-\s]/g)) {
        username.value = usernameValue;
        return;
    }
    usernameValue = newValue;
}

function onInputEmail(e){
    var newValueEmail = e.target.value;
    if( newValueEmail.match(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/g)){
        email.value = emailValue;
        return;
    }
    emailValue = newValueEmail;
}



