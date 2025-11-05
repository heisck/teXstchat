async function signup(givenName, email, username, password) {
  const req = await fetch('https://orange-animals-battle.loca.lt/auth/register', {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      givenName,
      email,
      username,
      password
    })
  })

  const res = await req.json();

  const { token } = res;
  saveToLocalstorage(token);
}

async function signin(username, password) {
  const req = await fetch('https://orange-animals-battle.loca.lt', {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  })

  const res = await req.json();

  const { token } = res.body;
  saveToLocalstorage(token);
}

async function resetPassword(email) {
  
}

function sendInfo() {
  const authArea = document.querySelector('#auth-area');
  authArea.addEventListener('click', (e) => {
    if (e.target.matches('.js-send-btn')) {

      e.preventDefault()
      const option = document.querySelector('.js-sign-option').id;
      if (option === 'up') {

        const givenName = document.querySelectorAll('input')[0].value;
        const email = document.querySelectorAll('input')[1].value;
        const username = document.querySelectorAll('input')[2].value;
        const password = document.querySelectorAll('input')[3].value;


        signup(givenName, email, username, password)
      } else if (option === 'in') {

        const username = document.querySelectorAll('input')[0].value;
        const password = document.querySelectorAll('input')[1].value;
    
        signin(username, password)
      } else {
        const email = document.querySelectorAll('input')[0].value;

        resetPassword(email);
      }
    }
  })
}


function saveToLocalstorage(token) {
  localStorage.setItem('token', token);
  if (token) {
    window.location = '../index.html';
  };
}


sendInfo();
