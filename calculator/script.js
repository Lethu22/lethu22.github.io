function appendToDisplay(value) {
    const display = document.getElementById('display');

    // Handle the +/- button
    if (value === '+/-') {
        if (display.value) {
            display.value = (parseFloat(display.value) * -1).toString();
        }
        return;
    }

    // Append value to display
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Handle percentage calculations
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');

        // Check if the last operator is a percentage
        if (expression.includes('%')) {
            // Split the expression at the percentage sign
            const parts = expression.split('%');
            if (parts.length > 1) {
                // Calculate percentage of the first part
                const percentageValue = eval(parts[0]) / 100; 
                // If there are more parts after the percentage sign, apply the rest of the expression
                expression = percentageValue + (parts[1] ? '*' + eval(parts[1]) : '');
            }
        }

        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
