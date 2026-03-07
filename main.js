const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');
const themeBtn = document.getElementById('theme-btn');
const htmlElement = document.documentElement;

const colors = [
    '#ff6b6b', '#f94d6e', '#f06595', '#a0c4ff', '#84a98c', '#52b788',
    '#f7a072', '#f6bd60', '#f5cac3', '#f28482', '#d4a373', '#a2d2ff'
];

// Theme Logic
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
themeBtn.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

themeBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeBtn.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});

// Generation Logic
generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const circle = document.createElement('div');
            circle.classList.add('number-circle');
            circle.textContent = number;
            circle.style.backgroundColor = colors[index % colors.length];
            circle.style.transform = 'scale(0)';
            numbersContainer.appendChild(circle);
            setTimeout(() => {
                circle.style.transform = 'scale(1)';
            }, 50);
        }, index * 100);
    });
});