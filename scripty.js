const button = document.getElementById("pet-button");

button.addEventListener("click", () => {
  document.body.classList.add("angry");
  button.textContent = "the cat didn't want to be pet";
});