import sendToken from './backend/index.js';
import './render/index.js';

function saveMsg() {
  const send = document.querySelector('.send-button');
  send.addEventListener('click', () => {
    const input = document.querySelector('input');
    const msg = input.value;
    if (msg) {
      const msgArea = document.querySelector('.message-sect');
      msgArea.innerHTML += `<div class="user-message">${msg}</div>`
      input.value = '';
      msgArea.scrollTo({ top: msgArea.scrollHeight, behavior: 'smooth' });
    }
  }) 
}

sendToken();
saveMsg();



