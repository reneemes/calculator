const display = document.getElementById('display');
const miniDisplay = document.getElementById('mini-display');

function addToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = '';
  miniDisplay.value = '';
}

function calculate() {
  if (display.value.endsWith('/0')) {
    return display.value = 'undefined';
  }
  miniDisplay.value = display.value;
  display.value = eval(display.value);
}

display.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    calculate();
  }
})