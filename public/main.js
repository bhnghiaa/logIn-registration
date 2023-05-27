const login_btn = document.getElementById('login');
const register_btn = document.getElementById('register');
const overlay = document.getElementById('container');



login_btn.addEventListener('click', () => {
    overlay.classList.add('right-panel-active');
});

register_btn.addEventListener('click', () => {
    overlay.classList.remove('right-panel-active');
})