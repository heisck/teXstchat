async function sendToken() {
  const token = localStorage.getItem('token');
  const req = await fetch('https://orange-animals-battle.loca.lt', {
    headers: {
      "authorization": token
    }
  })

  if (!req.ok) {
    window.location = 'pages/signup.html'
  }
}


export default sendToken;
