const display = document.getElementById('display-the-result');

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
    const alertBox = document.getElementById('alert-message');

    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (display.value.trim() === '') {
        alertBox.innerHTML = "<h3>! Masukkan angka terlebih dahulu!</h3>";
        alertBox.classList.add('active');  // Tampilkan alert dari atas 
        setTimeout(() => {
            alertBox.classList.remove('active'); 
        }, 3000);
        return;
    }

    if (operators.includes(lastChar)) {
        alertBox.innerHTML = "<h3>! Ekspresi tidak valid! Periksa input Anda.</h3>";
        alertBox.classList.add('active');
        setTimeout(() => {
            alertBox.classList.remove('active'); 
        }, 3000);
        return;
    }

    try {
        display.value = eval(display.value);
        alertBox.classList.remove('active'); // Hilangkan alert setelah sukses
    } catch (e) {
        alertBox.innerHTML = "<h3>! Ekspresi tidak valid! Periksa input Anda.</h3>";
        setTimeout(() => {
            alertBox.classList.remove('active'); 
        }, 3000);
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
