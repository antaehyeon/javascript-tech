
const firstBanner = document.querySelector('.banner');
const secondBanner = document.querySelector('.banner2');

const firstBtn = document.querySelector('.btn-1');
const secondBtn = document.querySelector('.btn-2');

firstBtn.addEventListener('click', () => {
    secondBanner.style.backgroundColor = 'BLACK';
});

secondBtn.addEventListener('click', () => {
    secondBanner.style.backgroundColor = 'WHITE';
});

document.querySelector('.banner2').addEventListener('click', () => {
    console.log('Click Event!')
    secondBanner.style.backgroundColor = 'BLACK';
});

console.log("SUCCESS JS");