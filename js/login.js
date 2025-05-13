document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');
    const errorMessage = document.querySelector('.text-danger');
    const loginButton = loginForm.querySelector('button[type="submit"]');
    const usernameInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    errorMessage.style.display = 'none';

    function validateForm() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        loginButton.disabled = username === '' || password === '' || password.length < 4;
    }

    usernameInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    // Initial validation check
    validateForm();

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (password === '1234' && username === 'admin') {
            // Redirect to admin panel
            window.location.href = './admin/panel.html';
        } else if (password === '1234' && username === 'user') {
            // Redirect to user dashboard or homepage
            window.location.href = './user/panel.html';
        } else {
            errorMessage.textContent = 'Wrong Username or Password';
            errorMessage.style.display = 'block';
        }
    });
});