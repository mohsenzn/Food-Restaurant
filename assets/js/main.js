const hamburgerIcon = document.querySelector(".fa-hamburger");
const nav = document.querySelector("nav");
const header = document.querySelector(".header")
hamburgerIcon.addEventListener("click", function () {
  this.classList.toggle("fa-times");
  nav.classList.toggle('nav-toggle')
});

window.addEventListener('scroll', () => {
  if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 ) {
    header.classList.add("active-header")
  } else {
    header.classList.remove("active-header")

  }
});