const header = document.querySelector("nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 120);
});

document.querySelector("#date").innerHTML = new Date().getFullYear();

document.querySelector("#hero-social-user").addEventListener("click", () => {
  document.querySelector("hero-links").classList.toggle("show-links");
});
