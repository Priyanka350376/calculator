
let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = new Function('return ' + display.value)();
        if (!isFinite(result)) {
            throw new Error('Division by zero');
        }
        display.value = Math.round(result * 1e8) / 1e8;
    } catch (error) {
        display.value = 'Error';
    }
}

function squareRoot() {
    try {
        let value = parseFloat(display.value);
        if (value < 0) {
            throw new Error('Invalid input for square root');
        }
        display.value = Math.sqrt(value);
    } catch (error) {
        display.value = 'Error';
    }
}

function square() {
    try {
        let value = parseFloat(display.value);
        display.value = value * value;
    } catch (error) {
        display.value = 'Error';
    }
}

function percentage() {
    try {
        let value = parseFloat(display.value);
        display.value = value / 100;
    } catch (error) {
        display.value = 'Error';
    }
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
}

function memoryAdd() {
    try {
        let value = parseFloat(display.value);
        memory += value;
    } catch (error) {
        display.value = 'Error';
    }
}

function memorySubtract() {
    try {
        let value = parseFloat(display.value);
        memory -= value;
    } catch (error) {
        display.value = 'Error';
    }
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) {
        event.preventDefault();
        if (key === '=') {
            calculate();
        } else {
            appendToDisplay(key);
        }
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    }
});

// Create animated stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }
}

createStars();
