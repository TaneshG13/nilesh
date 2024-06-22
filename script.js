const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

window.onscroll = function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Adjust the scroll distance as needed
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};