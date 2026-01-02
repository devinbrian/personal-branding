const toggle = document.getElementById("toggleDark");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
