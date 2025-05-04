//your JS code here. If required.
const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

document.getElementById("C").addEventListener("click", clearDisplay);
document.getElementById("back").addEventListener("click", backspace);
document.getElementById("equal").addEventListener("click", calculate);

["0","1","2","3","4","5","6","7","8","9"].forEach(id => {
  document.getElementById(id).addEventListener("click", () => appendToDisplay(id));
});

document.getElementById("plus").addEventListener("click", () => appendToDisplay("+"));
document.getElementById("-").addEventListener("click", () => appendToDisplay("-"));
document.getElementById("divi").addEventListener("click", () => appendToDisplay("/"));
document.getElementById("*").addEventListener("click", () => appendToDisplay("*"));
document.getElementById("op").addEventListener("click", () => appendToDisplay("("));
document.getElementById("cl").addEventListener("click", () => appendToDisplay(")"));
