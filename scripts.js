function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteChar() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
    const display = document.getElementById('result');
    display.value += char;
}

function calculate() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
