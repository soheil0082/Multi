// Logout function
function logout() {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = '../index.html';
}

// Calculator functions
function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        const result = document.getElementById('result');
        result.value = eval(result.value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}