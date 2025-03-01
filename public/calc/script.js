const display = document.getElementById('display-the-result');

const appendToDisplay = (input) => {
    display.value += input;
};

const clearDisplay = () => {
    display.value = '';
};

const calculate = () => {
    display.value = eval(display.value);
};

function backspace() {
    var inputField = document.getElementById("display-the-result");
    inputField.value = inputField.value.slice(0, -1);
}