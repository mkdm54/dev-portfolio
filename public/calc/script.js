const display = document.getElementById('display-the-result');

const appendToDisplay = (input) => {
    display.value += input;
};

const clearDisplay = () => {
    display.value = '';
};

const calculate = () => {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
};

function backspace() {
    display.value = display.value.slice(0, -1);
}

// Fungsi untuk ± (toggle sign)
function toggleSign() {
    if (display.value !== '') {
        display.value = String(-1 * parseFloat(display.value));
    }
}

// Fungsi untuk % (percentage)
function calculatePercentage() {
    if (display.value !== '') {
        display.value = String(parseFloat(display.value) / 100);
    }
}
