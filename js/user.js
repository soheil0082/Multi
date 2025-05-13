function logout() {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = '../index.html';
}


function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // Reset borders
    [name, email, message].forEach(input => {
        input.style.borderColor = '';
    });

    // Validate each field
    if (!name.value.trim()) {
        name.style.borderColor = 'red';
        isValid = false;
    }
    if (!email.value.trim()) {
        email.style.borderColor = 'red';
        isValid = false;
    }
    if (!message.value.trim()) {
        message.style.borderColor = 'red';
        isValid = false;
    }

    // If all fields are filled, redirect to homepage
    if (isValid) {
        window.location.href = '../index.html';
    }

    return false;
}