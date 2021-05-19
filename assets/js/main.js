const hamburgerIcon = document.querySelector(".fa-hamburger");
const nav = document.querySelector("nav");
hamburgerIcon.addEventListener("click", function () {
  this.classList.toggle("fa-times");
  nav.classList.toggle('nav-toggle')
});

