// Display element and initial variables
let display = document.getElementById("display");
let currentInput = "0";
let operator = null;
let previousInput = null;

// Select all buttons and add event listeners
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) =>
  btn.addEventListener("click", () => handleInput(btn.dataset.value))
);

// Capture and display button inputs
function handleInput(value) {
  if (!isNaN(value) || value === ".") {
    handleNumber(value);
  } else if (value === "AC") {
    currentInput = "0";
    previousInput = null;
    operator = null;
  } else if (value === "+/-") {
    currentInput = (parseFloat(currentInput) * -1).toString();
  } else if (value === "%") {
    currentInput = (parseFloat(currentInput) / 100).toString();
  } else if (value === "=") {
    if (operator && previousInput !== null) {
      currentInput = evaluate();
      operator = null;
      previousInput = null;
    }
  } else {
    // Handle operator inputs
    if (operator && previousInput !== null) {
      currentInput = evaluate();
    }
    operator = value;
    previousInput = currentInput;
    currentInput = "0";
  }

  updateDisplay();
}

// Handle number inputs and decimal point
function handleNumber(value) {
  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    if (!(value === "." && currentInput.includes("."))) {
      currentInput += value;
    }
  }
}

// Update the display
function updateDisplay() {
  display.textContent = currentInput;
}

// Perform the calculation
function evaluate() {
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);

  if (operator === "+") return (a + b).toString();
  if (operator === "-") return (a - b).toString();
  if (operator === "*") return (a * b).toString();
  if (operator === "/") return b === 0 ? "Error" : (a / b).toString();
}

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;
  
  // Handle number keys
  if (!isNaN(key) || key === ".") {
    handleNumber(key);
  } else if (key === "Enter") {
    handleInput("=");
  } else if (key === "Backspace") {
    handleInput("AC");
  } else if (key === "Delete") {
    handleInput("AC");
  } else {
    // Handle operators and special keys
    switch (key) {
      case "+":
      case "-":
      case "*":
      case "/":
        handleInput(key);
        break;
      case "%":
        handleInput("%");
        break;
      case "=":
        handleInput("=");
        break;
      case "ArrowUp":
        handleInput("+/-");
        break;
      default:
        break;
    }
  }
});

