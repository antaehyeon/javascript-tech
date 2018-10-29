
const firstBanner = document.querySelector('.banner');
const secondBanner = document.querySelector('.banner2');

const firstBtn = document.querySelector('.btn-1');
const secondBtn = document.querySelector('.btn-2');

firstBtn.addEventListener('click', () => {
    // firstBanner.style.backgroundColor = 'BLACK';
    // secondBanner.style.backgroundColor = 'BLACK';
    firstBanner.style.opacity = 1;
    secondBanner.style.opacity = 0;
});

secondBtn.addEventListener('click', () => {
    // firstBanner.style.backgroundColor = 'WHITE';
    // secondBanner.style.backgroundColor = 'WHITE';
    firstBanner.style.opacity = 0;
    secondBanner.style.opacity = 1;
});

document.querySelector('.banner2').addEventListener('click', () => {
    console.log('Click Event!')
    secondBanner.style.backgroundColor = 'BLACK';
});

console.log("SUCCESS JS");