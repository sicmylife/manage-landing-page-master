
const hamburger = document.querySelector(".hamburger");
const close1 = document.querySelector(".close");
const nav = document.querySelector(".primary-navigation");
const msg = document.querySelector("#msg");
const email = document.querySelector("#email").value;
const form = document.querySelector("#form");

const btn = document.querySelector(".btn");
console.log(btn)

const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
btn.addEventListener('click',function(e){
e.preventDefault();
validation()
})


const validation = () => {
  if (email.match(regex)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    msg.innerHTML = 'Thank you';
  }
   
 

  else {
    form.classList.add("invalid");
    form.classList.remove("valid");
    msg.innerHTML = 'Enter correct email';
  }

   
  if (email === "") {
    form.classList.add("valid");
    form.classList.remove("invalid");
    msg.innerHTML = '';}
};



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
