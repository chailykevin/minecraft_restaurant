import "./style.css";
import minecraft from "./assets/minecraft.svg";
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const image = new Image();
image.src = minecraft;
image.classList.add("logo");

const header = document.querySelector("header");
header.insertBefore(image, header.firstChild);

const content = document.getElementById("content");
contact();

const buttons = document.querySelectorAll("button");
for (var button of buttons) {
  button.addEventListener("click", function () {
    content.innerHTML = "";
    if (this.id == "home") {
      home();
    } else if (this.id == "menu") {
      menu();
    } else if (this.id == "contact") {
      contact();
    }
  });
}
