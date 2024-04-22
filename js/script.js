const header = document.querySelector("nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 120);
});
