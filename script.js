var isLoggedIn = false;
const sidebar = document.getElementById('sidebar');
const logout_btn = document.getElementById('logout-btn');
const login_btn = document.getElementById('login-btn');

if (isLoggedIn) {
  sidebar.classList.add('logged-in');
} else {
  sidebar.classList.add('logged-out');
}

logout_btn.addEventListener('click', () => {
    isLoggedIn = false;
    sidebar.classList.remove('logged-in');
    sidebar.classList.add('logged-out');
})

login_btn.addEventListener('click', () => {
    isLoggedIn = true;
    sidebar.classList.remove('logged-out');
    sidebar.classList.add('logged-in');
})