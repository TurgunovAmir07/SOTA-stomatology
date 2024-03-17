const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
});

const dropdownBtn = document.querySelector(".img-close");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
  dropdownBtn.classList.toggle("rotate-[90deg]");
  dropdownContent.classList.toggle("block");
});

const dropdownBtn2 = document.querySelector(".img-close2");
const dropdownContent2 = document.querySelector(".dropdown-content2");

dropdownBtn2.addEventListener("click", () => {
  dropdownBtn2.classList.toggle("rotate-[90deg]");
  dropdownContent2.classList.toggle("block");
});

// TEST
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
}

let textOptions = {
  threshold: [0.5],
};
let textObserver = new IntersectionObserver(onEntry, textOptions);
let textElements = document.querySelectorAll(".element-animation");

textElements.forEach((elm) => {
  textObserver.observe(elm);
});

function onButtonEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("button-show");
    } else {
      change.target.classList.remove("button-show");
    }
  });
}

let buttonOptions = {
  threshold: [0.5],
};
let buttonObserver = new IntersectionObserver(onButtonEntry, buttonOptions);
let buttons = document.querySelectorAll(".button-animation");

buttons.forEach((elm) => {
  buttonObserver.observe(elm);
});

function onBgEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("bg-show");
    }
  });
}

let bgOptions = {
  threshold: [0.5],
};
let bgObserver = new IntersectionObserver(onBgEntry, bgOptions);
let background = document.querySelectorAll(".bg-animation");

background.forEach((elm) => {
  bgObserver.observe(elm);
});
