let display = document.getElementById("display");
const calculationHistory = [];

// Basic functions
function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    let lastChar = display.value.slice(-1);
    if (["+", "-", "*", "/", "%"].includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }
    display.value += operator;
}

function appendDecimal() {
    let parts = display.value.split(/[\+\-\*\/%]/);
    let lastPart = parts[parts.length - 1];
    if (!lastPart.includes(".")) {
        display.value += ".";
    }
}

function appendDoubleZero() {
    display.value += "00";
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result and store in history
function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);
        display.value = result;
        addToHistory(expression, result); // Add to history
    } catch (error) {
        display.value = "Error";
    }
}

// History feature
function addToHistory(expression, result) {
    calculationHistory.push({
        expression: expression,
        result: result,
        timestamp: new Date()
    });

    // History of last 10 calculations
    if (calculationHistory.length > 10) {
        calculationHistory.shift();
    }

    displayHistory();
}

function displayHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = calculationHistory
        .map(calc => `<div>${calc.expression} = ${calc.result}</div>`)
        .join('');
}
