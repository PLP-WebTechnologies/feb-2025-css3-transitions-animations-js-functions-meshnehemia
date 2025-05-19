// List of colors to cycle through on each click
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f39c12'];

const btn = document.getElementById('colorBtn');
const colorLabel = document.getElementById('currentColor');

// Load saved color from localStorage or default to first color
let currentColorIndex = 0;

function loadColor() {
  const savedColor = localStorage.getItem('btnColor');
  if (savedColor) {
    currentColorIndex = colors.indexOf(savedColor);
    if (currentColorIndex === -1) currentColorIndex = 0;
    applyColor(colors[currentColorIndex]);
  } else {
    applyColor(colors[0]);
  }
}

function applyColor(color) {
  btn.style.backgroundColor = color;
  colorLabel.textContent = color;
}

// Save the current color to localStorage
function saveColor(color) {
  localStorage.setItem('btnColor', color);
}

// Animation trigger
function triggerAnimation() {
  btn.classList.add('animate-scale');

  // Remove the class after animation ends to allow retrigger
  btn.addEventListener('animationend', () => {
    btn.classList.remove('animate-scale');
  }, { once: true });
}

// On button click: change color, save preference, and animate
btn.addEventListener('click', () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const newColor = colors[currentColorIndex];
  applyColor(newColor);
  saveColor(newColor);
  triggerAnimation();
});

// Initialize on page load
loadColor();
