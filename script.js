const display = document.getElementById('display');
const miniDisplay = document.getElementById('mini-display');

function addToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  if (display.value.endsWith('/0')) {
    return display.value = 'undefined';
  }
  miniDisplay.value = display.value;
  display.value = eval(display.value);
}