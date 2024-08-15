// script.js

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

// Function to append values to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression
        display.innerText = eval(display.innerText) || '0';
    } catch {
        display.innerText = 'Error';
    }
}
