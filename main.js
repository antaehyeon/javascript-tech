const firstBanner = document.querySelector(".banner");
const secondBanner = document.querySelector(".banner2");

const firstBtn = document.querySelector(".btn-1");
const secondBtn = document.querySelector(".btn-2");
const thirdBtn = document.querySelector(".btn-3");

let start = null;

// Transition
firstBtn.addEventListener("click", () => {
  // firstBanner.style.backgroundColor = 'BLACK';
  // secondBanner.style.backgroundColor = 'BLACK';
  // firstBanner.style.opacity = 1;
  // secondBanner.style.opacity = 0;
  firstBanner.classList.remove("banner1-active");
  secondBanner.classList.add("banner2-active");
});

secondBtn.addEventListener("click", () => {
  // firstBanner.style.backgroundColor = 'WHITE';
  // secondBanner.style.backgroundColor = 'WHITE';
  //   firstBanner.style.opacity = 0;
  //   secondBanner.style.opacity = 1;
  firstBanner.classList.add("banner1-active");
  secondBanner.classList.remove("banner2-active");
});

// request Animation Frame
thirdBtn.addEventListener("click", () => {
  window.requestAnimationFrame(step);
});

function step(timestamp) {
  if (!start) start = timestamp;

  var progress = timestamp - start;

  secondBanner.style.left = Math.min(progress / 10, 200) + "px";

  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

console.log("SUCCESS JS");
