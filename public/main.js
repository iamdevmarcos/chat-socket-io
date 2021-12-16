const socket = io();
let username = '';
let userList = [];

let loginPage = document.querySelector('#loginPage');
let chatPage = document.querySelector('#chatPage');

let loginInput = document.querySelector('#loginNameInput');
let textInput = document.querySelector('#chatTextInput');

loginPage.style.display = 'flex';
chatPage.style.display = 'none';

loginInput.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        let name = loginInput.value.trim();
        if(name !== '') {
            username = firstLetterUp(name);
            document.title = `Chat ${username}`;
        }
    }
})

const firstLetterUp = (string) => {
    const firstLetter = string.charAt(0).toUpperCase();
    return `${firstLetter}${string.substr(1)}`;
}