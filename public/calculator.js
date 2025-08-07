if (typeof display === 'undefined') {
  let display = document.getElementById("display");
}



if (typeof memory === 'undefined') {
let memory = 0;
}





function insert(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function del() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function memoryAdd() {
  memory = parseFloat(display.value) || 0;
}

function memoryRecall() {
  display.value += memory;
}

function toggleSign() {
  if (display.value.startsWith('-')) {
    display.value = display.value.slice(1);
  } else {
    display.value = '-' + display.value;
  }
}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function getValue() {
  return parseFloat(display.value) || 0;
}

function toBinary() {
  try {
    display.value = parseInt(display.value).toString(2);
  } catch {
    display.value = "Error";
  }
}

function toOctal() {
  try {
    display.value = parseInt(display.value).toString(8);
  } catch {
    display.value = "Error";
  }
}

function toHex() {
  try {
    display.value = parseInt(display.value).toString(16).toUpperCase();
  } catch {
    display.value = "Error";
  }
}






openCalculator();


function openCalculator() {
  document.getElementById("calculator-modal").style.display = "flex";
}
function closeCalculator() {
  document.getElementById("calculator-modal").style.display = "none";
}

















