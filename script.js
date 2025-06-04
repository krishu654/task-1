// Game variables
let score = 0;
let correctColor;

// DOM elements
const colorBoxes = document.querySelectorAll('.color-box');
const colorValueDisplay = document.getElementById('color-value');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset-btn');

// Initialize game
init();

// Event listeners
resetButton.addEventListener('click', init);
colorBoxes.forEach(box => {
    box.addEventListener('click', function() {
        if (this.style.backgroundColor === correctColor) {
            // Correct guess
            score++;
            scoreDisplay.textContent = score;
            messageDisplay.textContent = "Correct! 🎉";
            messageDisplay.style.color = "#27ae60";
            setAllColorsToCorrect();
            resetButton.textContent = "Play Again?";
        } else {
            // Wrong guess
            this.style.opacity = "0.2";
            messageDisplay.textContent = "Try Again!";
            messageDisplay.style.color = "#e74c3c";
        }
    });
});

// Functions
function init() {
    // Reset game state
    score = 0;
    scoreDisplay.textContent = score;
    messageDisplay.textContent = "Pick the correct color!";
    messageDisplay.style.color = "#2c3e50";
    resetButton.textContent = "New Colors";
    
    // Generate random colors
    const colors = [];
    for (let i = 0; i < 3; i++) {
        colors.push(generateRandomColor());
    }
    
    // Set correct color
    correctColor = colors[Math.floor(Math.random() * 3)];
    colorValueDisplay.textContent = rgbToText(correctColor);
    
    // Assign colors to boxes
    colorBoxes.forEach((box, index) => {
        box.style.backgroundColor = colors[index];
        box.style.opacity = "1";
    });
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function rgbToText(rgb) {
    return rgb.replace('rgb(', '(').replace(')', ')');
}

function setAllColorsToCorrect() {
    colorBoxes.forEach(box => {
        box.style.backgroundColor = correctColor;
        box.style.opacity = "1";
    });
}