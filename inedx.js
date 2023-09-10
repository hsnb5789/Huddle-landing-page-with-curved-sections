const inputValue = document.querySelector("form .input input");
const input = document.querySelector("form .input");
const active = document.querySelector(".input p");

inputValue.addEventListener("mouseover", () => {
  inputValue.value = "john#main.com";
  active.style.display = "block";
});
inputValue.addEventListener("mouseout", () => {
  inputValue.value = "";
  active.style.display = "none";
});
