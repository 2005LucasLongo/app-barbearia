var isLoggedIn = false;
const sidebar = document.getElementById('sidebar');
const logout_btn = document.getElementById('logout-btn');


if (isLoggedIn) {
  sidebar.classList.add('logged-in');
} else {
  sidebar.classList.add('logged-out');
}

// log-out event
logout_btn.addEventListener('click', () => {
    isLoggedIn = false;
    sidebar.classList.remove('logged-in');
    sidebar.classList.add('logged-out');
})

// log-in event
window.addEventListener('DOMContentLoaded', () => {
  const loginSucceded = localStorage.getItem('isLoggedIn');
  if (loginSucceded === 'true') {
    sidebar.classList.remove('logged-out');
    sidebar.classList.add('logged-in');
  }
});

// this is the reason why the toggle password button works
function togglePasswordVisibility(field, button) {
  const passwordField = document.getElementById(field);
  const toggleButton = document.getElementById(button);

  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleButton.textContent = '🙊';
  } else {
    passwordField.type = 'password';
    toggleButton.textContent = '🙈';
  }
}

// this is the reason why the register button works
function registerNewUser() {
  const usernameField = document.getElementById('username');
  const passwordField = document.getElementById('password');
  const confirmPasswordField = document.getElementById('confirm-password');
  const alertText = document.getElementById('alerta');
  var usernameAlreadyTaken = false;

  // searchs on the db to see if a username was already taken
  // ...
  
  // checks if the passwords are equal
  if (usernameAlreadyTaken) {
      alertText.textContent = 'Alguém já possui este nome de usuário!';
  } else if (passwordField.value === confirmPasswordField.value && passwordField.value !== '' && !usernameAlreadyTaken) {
      alertText.textContent = 'Conta criada com sucesso!';
      // redirects to index.html
      setTimeout(() => {
          window.location.href = 'index.html';
      }, 2000);
  } else if ((passwordField.value || confirmPasswordField.value) === '') {
      alertText.textContent = 'Digite uma senha!';
  } else {
      alertText.textContent = 'As senhas devem ser iguais!';
  }

}

// login page functions