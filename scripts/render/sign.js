class AuthPage {
  sign = 'up';
  image = `
  <div class="logo-div">
    <img src="../images/logo (2).png" alt="logo of the page">
  </div>
  `;
  signIn = `
  ${this.image}
  <h1>
    Sign in
  </h1>
  <form>
    <input placeholder="enter username" type="text" name="username" autocomplete="username" required>
    <input placeholder="enter password" type="password" name="current-password" autocomplete="current-password" required>
    <div>
      <input class="input-btn js-send-btn" type="submit">
      <input class="input-btn" type="reset">
    </div>
  </form>
  <div>
    <p>
      Don't have an account? 
      <span class="js-sign-option" id="in">Sign Up</span>
    </p>
    <span class="reset-password">
      Reset password
    </span>
  </div>
  `
  signUp = `
  ${this.image}
  <h1>
    Sign up
  </h1>
  <form>
    <input placeholder="enter your name" type="text" name="name" autocomplete="name" required>
    <input placeholder="enter your email address" type="email" name="email" autocomplete="email" required>
    <input placeholder="enter username" type="text" name="username" autocomplete="username" required>
    <input placeholder="enter password" type="password" name="new-password" autocomplete="new-password" required>
    <div>
      <input class="input-btn js-send-btn" type="submit">
      <input class="input-btn" type="reset">
    </div>
  </form>
  <div>
    <p>
      Have an account? 
      <span class="js-sign-option" id="up">Sign in</span>
    </p>
    <span class="reset-password">
      Reset password
    </span>
  </div>
  `

  inputs() {
    if (this.sign === 'up') {
      return this.signUp;
    }
    return this.signIn;
  }

  resetPassword() {
    return `
  ${this.image}
  </div>
  <h1>
    Sign in
  </h1>
  <form>
    <input placeholder="enter your email address" type="email" name="email" autocomplete="email" required>
    <div>
      <input class="input-btn js-send-btn" type="submit">
      <input class="input-btn" type="reset">
    </div>
  </form>
  <div>
    <p>
      Don't have an account? 
      <span class="js-sign-option" id="in">Sign Up</span>
    </p>
  </div>
    `
  }
}

const auth = new AuthPage();


function sign() {
  const authArea = document.querySelector('#auth-area');
  authArea.addEventListener('click', (e) => {
    if (e.target.matches('.js-sign-option')) {
      const authArea = document.querySelector('#auth-area');
      sign.id === 'up' ? sign.id = 'in' : sign.id = 'up';
      auth.sign = sign.id;
      authArea.innerHTML = auth.inputs();
      return;
    } else if (e.target.matches('.reset-password')) {
      authArea.innerHTML = auth.resetPassword();
    }
  })
  authArea.addEventListener('dblclick', (e) => {
    if (e.target.name === 'new-password' || e.target.name === 'current-password') {
      e.target.type === 'password' ? e.target.type = 'text' : e.target.type = 'password';
    }
  })
}

function renderPage() {
  const authArea = document.querySelector('#auth-area');
  authArea.innerHTML = auth.inputs();
  sign();
}

renderPage();