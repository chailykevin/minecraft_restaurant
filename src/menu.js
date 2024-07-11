import Cookie from "./assets/cookie.png";
import Apple from "./assets/golden_apple.png";
import Potato from "./assets/baked_potato.png";
import Soup from "./assets/mushroom_soup.png";
import Steak from "./assets/steak.png";
import Pie from "./assets/pumpkin_pie.png";

const menu = function () {
  const buttons = document.querySelectorAll("button");
  for (var but of buttons) {
    but.classList.remove("active");
  }

  const content = document.getElementById("content");
  content.classList.remove("home");
  content.classList.remove("contact");
  content.classList.add("menu");
  content.innerHTML = `<div class="menu">
        <img src= '${Pie}'/>
          <h3>Pumpkin Pie</h3>
          <p class="price">5 Emerald</p>
          <p class="description">Made with pumpkin</p>
      </div>
      <div class="menu">
        <img src="${Soup}" alt="Mushroom Soup" />
        <h3>Mushroom Soup</h3>
        <p class="price">4 Emerald</p>
        <p class="description">Made with mushroom</p>
      </div>
      <div class="menu">
        <img src="${Potato}" alt="Baked Potato" />
        <h3>Baked Potato</h3>
        <p class="price">2 Emerald</p>
        <p class="description">Made with potato</p>
      </div>
      <div class="menu">
        <img src="${Cookie}" alt="Cookie" />
        <h3>Cookie</h3>
        <p class="price">1 Emerald</p>
        <p class="description">Made with chocolate</p>
      </div>
      <div class="menu">
        <img src="${Steak}" alt="Steak" />
        <h3>Steak</h3>
        <p class="price">7 Emerald</p>
        <p class="description">Made with cow's meat</p>
      </div>
      <div class="menu">
        <img src="${Apple}" alt="Enchanted Golden Apple" />
        <h3>Enchanted Golden Apple</h3>
        <p class="price">10 Emerald</p>
        <p class="description">Made with apple</p>
      </div>`;

  const button = document.getElementById("menu");
  button.classList.add("active");
};

export default menu;
