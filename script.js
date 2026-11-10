
const button = document.getElementById("colorBtn");
const message = document.getElementById("message");
const greenColor = "green";


function turnGreen() {
  document.body.style.backgroundColor = greenColor;
  message.textContent = "ITS NOW GREEN YAYY";
}


button.addEventListener("click", turnGreen);