let isAuthN = sessionStorage.getItem('sessionAuthN');

let loginState = document.getElementById('loginState');

if (loginState) {
  if (isAuthN === 'true') {
    loginState.innerText = 'Hello, Barry.';
  } else {
    loginState.innerText = 'Please Login';
  }
}

let loginBtn = document.getElementById('loginBtn');

if (loginBtn) {
  loginBtn.addEventListener('click', checkLogin);
}

function checkLogin() {
  const passBox = document.getElementById('passBox').value;

  if (passBox === 'lasagna') {
    sessionStorage.setItem('sessionAuthN', 'true');
    window.location.assign('../index.html');
  } else {
    sessionStorage.setItem('sessionAuthN', 'false');

    document.getElementById('message').innerText =
      'Wrong password.';
  }
}
