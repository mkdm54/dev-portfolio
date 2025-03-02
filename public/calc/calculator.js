const display = document.getElementById('display-the-result');
const historyDisplay = document.getElementById('history-display');
let historyEquation = "";

const appendToDisplay = (input) => {
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(input)) {
        // Jika sebelumnya ada angka, pindahkan ke history
        if (display.value !== "") {
            historyEquation = display.value + " " + input;
            historyDisplay.value = historyEquation; // Menampilkan ke input history
            display.value = ""; // Kosongkan display utama
        }
    } else {
        display.value += input;
    }
};

const clearDisplay = () => {
    display.value = '';
    historyDisplay.value = '';
    historyEquation = '';
};

const calculate = () => {
    const alertBox = document.getElementById('alert-message');
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (display.value.trim() === '') {
        alertBox.classList.remove('default');
        alertBox.innerHTML = "<h3>Masukkan angka terlebih dahulu</h3>";
        alertBox.classList.add('active');
        setTimeout(() => {
            alertBox.classList.add('default'); 
        }, 3000);
        return;
    }

    if (operators.includes(lastChar)) {
        alertBox.classList.remove('default');
        alertBox.innerHTML = "<h3>Input tidak valid!</h3>";
        alertBox.classList.add('active');
        setTimeout(() => {
            alertBox.classList.add('default'); 
        }, 3000);
        return;
    }

    try {
        let result = eval(historyEquation + " " + display.value); // Hitung hasil
        historyEquation += " " + display.value + " ="; // Update history
        historyDisplay.value = historyEquation; // Tampilkan history di input
        display.value = result; // Tampilkan hasil di display utama
    } catch (e) {
        alertBox.classList.remove('default');
        alertBox.innerHTML = "<h3>Input tidak valid!</h3>";
        setTimeout(() => {
            alertBox.classList.add('default'); 
        }, 3000);
    }
};

function backspace() {
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    if (display.value !== '') {
        display.value = String(-1 * parseFloat(display.value));
    }
}

function calculatePercentage() {
    if (display.value !== '') {
        display.value = String(parseFloat(display.value) / 100);
    }
}
