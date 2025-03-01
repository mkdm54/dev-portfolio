const display = document.getElementById('display-the-result');
const message = document.getElementById('message');

const appendToDisplay = (input) => {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    // Cegah dua operator berturut-turut
    if (operators.includes(input) && operators.includes(lastChar)) {
        return;
    }

    display.value += input;
};

const clearDisplay = () => {
    display.value = '';
};

const calculate = () => {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (display.value.trim() === '') {
        message.innerHTML = "Masukkan angka terlebih dahulu!";
        return;
    }

    // Cegah kalkulasi jika terakhir adalah operator
    if (operators.includes(lastChar)) {
        message.innerHTML = 'Ekspresi tidak valid! Periksa input Anda.'
        return;
    }

    try {
        display.value = eval(display.value);
    } catch (e) {
        message.innerHTML = 'Ekspresi tidak valid! Periksa input Anda.'
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
