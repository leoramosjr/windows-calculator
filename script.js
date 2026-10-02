const keyboard = document.querySelector("#keyboard");
const displayText = document.querySelector("#displayText");
const historyText = document.querySelector("#historyText");

let currentValue = "0";
let storedValue = null;
let pendingOperator = null;
let shouldStartNewValue = false;
let lastOperator = null;
let lastOperand = null;

function setHistory(text) {
  if (historyText) historyText.textContent = text;
}

function formatValue(value) {
  if (!Number.isFinite(value)) return "Erro";
  if (Object.is(value, -0)) value = 0;
  return String(value).replace(".", ",");
}

function updateDisplay() {
  displayText.textContent = currentValue.replace(".", ",");
  setHistory(pendingOperator && storedValue !== null
    ? `${formatValue(storedValue)} ${OPERATOR_SYMBOLS[pendingOperator]}`
    : "");
}

function readCurrent() {
  return Number(currentValue.replace(",", "."));
}

function setCurrent(value) {
  if (!Number.isFinite(value)) {
    currentValue = "0";
    storedValue = null;
    pendingOperator = null;
    setHistory("Não é possível dividir por zero");
    displayText.textContent = "Erro";
    shouldStartNewValue = true;
    return;
  }
  currentValue = String(value);
  shouldStartNewValue = true;
  updateDisplay();
}

function clearAll() {
  currentValue = "0";
  storedValue = null;
  pendingOperator = null;
  shouldStartNewValue = false;
  lastOperator = null;
  lastOperand = null;
  setHistory("");
  updateDisplay();
}

function calculate(left, right, operator) {
  switch (operator) {
    case "+": return left + right;
    case "-": return left - right;
    case "*": return left * right;
    case "/": return right === 0 ? NaN : left / right;
    default: return right;
  }
}

function inputDigit(digit) {
  if (shouldStartNewValue || currentValue === "Erro") {
    currentValue = digit;
    shouldStartNewValue = false;
  } else if (currentValue.replace("-", "").replace(",", "").length < 15) {
    currentValue = currentValue === "0" ? digit : currentValue + digit;
  }
  updateDisplay();
}

function inputDecimal() {
  if (shouldStartNewValue || currentValue === "Erro") {
    currentValue = "0,";
    shouldStartNewValue = false;
  } else if (!currentValue.includes(",")) {
    currentValue += ",";
  }
  updateDisplay();
}

function chooseOperator(operator) {
  const value = readCurrent();
  if (pendingOperator && !shouldStartNewValue && storedValue !== null) {
    const result = calculate(storedValue, value, pendingOperator);
    if (!Number.isFinite(result)) {
      setCurrent(result);
      return;
    }
    currentValue = String(result);
    storedValue = result;
  } else {
    storedValue = value;
  }
  pendingOperator = operator;
  shouldStartNewValue = true;
  lastOperator = null;
  lastOperand = null;
  updateDisplay();
}

function doEquals() {
  if (pendingOperator && storedValue !== null) {
    const right = readCurrent();
    const left = storedValue;
    const operator = pendingOperator;
    const expression = `${formatValue(left)} ${OPERATOR_SYMBOLS[operator]} ${formatValue(right)} =`;
    setCurrent(calculate(left, right, operator));
    lastOperator = operator;
    lastOperand = right;
    storedValue = null;
    pendingOperator = null;
    setHistory(expression);
  } else if (lastOperator && lastOperand !== null) {
    setCurrent(calculate(readCurrent(), lastOperand, lastOperator));
  }
}

function applyUnary(action) {
  const value = readCurrent();
  if (action === "percent") {
    const result = pendingOperator && ["+", "-"].includes(pendingOperator) && storedValue !== null
      ? storedValue * value / 100
      : value / 100;
    setCurrent(result);
    return;
  }
  if (action === "reciprocal") {
    if (value === 0) {
      setHistory("Não é possível dividir por zero");
      displayText.textContent = "Erro";
      shouldStartNewValue = true;
      return;
    }
    setCurrent(1 / value);
  } else if (action === "square") {
    setCurrent(value * value);
  } else if (action === "sqrt") {
    if (value < 0) {
      setHistory("Entrada inválida");
      displayText.textContent = "Erro";
      shouldStartNewValue = true;
      return;
    }
    setCurrent(Math.sqrt(value));
  } else if (action === "sign") {
    setCurrent(-value);
    shouldStartNewValue = false;
  }
}

function handleAction(action, value) {
  if (action === "digit") inputDigit(value);
  if (action === "decimal") inputDecimal();
  if (action === "operator") chooseOperator(value);
  if (action === "equals") doEquals();
  if (action === "clear") clearAll();
  if (action === "clear-entry") {
    currentValue = "0";
    shouldStartNewValue = false;
    updateDisplay();
  }
  if (action === "backspace") {
    if (!shouldStartNewValue && currentValue !== "Erro") {
      currentValue = currentValue.length > 1 ? currentValue.slice(0, -1) : "0";
      if (currentValue === "-") currentValue = "0";
      updateDisplay();
    }
  }
  if (["percent", "reciprocal", "square", "sqrt", "sign"].includes(action)) {
    applyUnary(action);
  }
}

if (keyboard) {
  CALCULATOR_KEYS.forEach(({ label, action, value, type, ariaLabel }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("padButtons");
    if (type) button.classList.add(`padButtons-${type}`);
    button.textContent = label;
    if (ariaLabel) button.setAttribute("aria-label", ariaLabel);
    button.addEventListener("click", () => handleAction(action, value));
    keyboard.appendChild(button);
  });

  document.addEventListener("keydown", (event) => {
    const { key } = event;
    if (/^\d$/.test(key)) handleAction("digit", key);
    else if (key === "." || key === ",") handleAction("decimal");
    else if (["+", "-", "*", "/"].includes(key)) handleAction("operator", key);
    else if (key === "Enter" || key === "=") handleAction("equals");
    else if (key === "Backspace") handleAction("backspace");
    else if (key === "Escape") handleAction("clear");
    else if (key === "%") handleAction("percent");
    else return;
    event.preventDefault();
  });
}

updateDisplay();
