const submit = document.querySelector('.wrapper .submit');
const username = document.querySelector('.wrapper .username');
const email = document.querySelector('.wrapper .email');
const message = document.querySelector('.wrapper .message');

// function check() {
//     if(username.value != 0 && email.value != 0 && message.value != 0) {
//         submit.disabled = false;
//     }else {
//         submit.disabled = true;
//     }
//     if(username.value == 0){
//         username.style.border = '1px solid red';
//     }else {
//         username.style.border = '';
//     }
//     if(email.value == 0){
//         email.style.border = '1px solid red';
//     }else {
//         email.style.border = '';
//     }
// }
// document.body.addEventListener('input', check);

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

