import Steve from "./assets/steve.png";
import Alex from "./assets/alex.png";

const home = function () {
  const buttons = document.querySelectorAll("button");
  for (var but of buttons) {
    but.classList.remove("active");
  }

  console.log(Steve);

  const content = document.getElementById("content");
  content.classList.remove("menu");
  content.classList.remove("contact");
  content.classList.add("home");
  content.innerHTML = `
  <h1>Minecraft is a restaurant that Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente itaque consequuntur inventore debitis consequatur perferendis corrupti, corporis omnis pariatur architecto id saepe cumque. Necessitatibus quisquam dicta excepturi nulla nam?Expedita omnis iure perspiciatis consequuntur quae, vitae voluptas doloremque corrupti a odit illum animi laborum non aliquid. Autem incidunt, qui culpa modi, neque amet alias ullam illum placeat eos architecto! Dolorem modi officia eius nihil voluptatem veniam quae quidem illo ipsum incidunt molestiae sint ut non dolores tempore error repudiandae, fuga hic alias nulla id esse? Voluptates eveniet nesciunt deleniti.</h1>
  <div class="card">
    <img src="${Steve}" alt="Steve" class="userImage">
    <div class="info">
      <p class="rate">&#9733&#9733&#9733&#9733&#9733</p>
      <h2 class="message">" It was a fun experience to be able to eat at a Minecraft themed restaurant! "</h2>
      <p class="name">- Steve</p>
    </div>
  </div>
  <div class="card">
    <div class="info">
      <p class="rate">&#9733&#9733&#9733&#9733&#9733</p>
      <h2 class="message">" Everyone have to try the Enchanted Golden Apple! "</h2>
      <p class="name">- Alex</p>
    </div>
    <img src="${Alex}" alt="Alex" class="userImage">
  </div>`;

  const button = document.getElementById("home");
  button.classList.add("active");
};

export default home;
