const recommendBtn = document.getElementById('recommend-btn');
const recommendationContainer = document.getElementById('recommendation-container');
const themeBtn = document.getElementById('theme-btn');
const htmlElement = document.documentElement;

const dinnerMenus = [
    'Kimchi Stew (Kimchi-jjigae)',
    'Bulgogi',
    'Bibimbap',
    'Tteokbokki',
    'Korean Fried Chicken',
    'Samgyeopsal (Pork Belly)',
    'Jajangmyeon',
    'Pad Thai',
    'Sushi',
    'Ramen',
    'Pasta Carbonara',
    'Pizza Margherita',
    'Steak and Fries',
    'Tacos',
    'Burgers',
    'Butter Chicken',
    'Pho',
    'Dim Sum',
    'Fish and Chips',
    'Greek Salad & Gyro'
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

// Recommendation Logic
recommendBtn.addEventListener('click', () => {
    recommendBtn.disabled = true;
    recommendationContainer.innerHTML = '<p class="placeholder-text">Choosing something delicious...</p>';

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        const selectedMenu = dinnerMenus[randomIndex];

        recommendationContainer.innerHTML = '';
        const menuDisplay = document.createElement('div');
        menuDisplay.classList.add('menu-item');
        menuDisplay.textContent = selectedMenu;
        
        recommendationContainer.appendChild(menuDisplay);
        recommendBtn.disabled = false;
    }, 800);
});