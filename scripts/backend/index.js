async function sendToken() {
  const token = localStorage.getItem('token');
  const req = await fetch('http://127.0.0.1:5405', {
    headers: {
      "authorization": token
    }
  })

  if (!req.ok) {
    window.location = 'pages/signup.html'
  }
}

export default sendToken;