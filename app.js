const hamburger = document.querySelector(".hamburger");
const close1 = document.querySelector(".close");
const nav = document.querySelector(".primary-navigation");
const msg = document.getElementById("msg");
const email = document.querySelector("#email");
const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const inputBox = document.querySelector(".inputBox");
console.log(email.value);

// Email validation
function validation() {
  const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(regex)) {
    inputBox.classList.add("invalid");
    msg.innerHTML = "Please enter a valid email address";
    console.log("no sirve");
  } else {
    inputBox.classList.remove("invalid");
    inputBox.classList.add("valid");
    msg.innerHTML = "Thank you";
    console.log(" sive");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(form);
  validation();
});

hamburger.onclick = function () {
  hamburger.classList.add("hide");
  nav.classList.add("show");
  close1.classList.add("show");
};

close1.addEventListener("click", function () {
  hamburger.classList.remove("hide");
  nav.classList.remove("show");
  close1.classList.remove("show");
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
