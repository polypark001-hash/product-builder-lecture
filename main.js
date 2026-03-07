const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');

const colors = [
    '#ff6b6b', '#f94d6e', '#f06595', '#a0c4ff', '#84a98c', '#52b788',
    '#f7a072', '#f6bd60', '#f5cac3', '#f28482', '#d4a373', '#a2d2ff'
];

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