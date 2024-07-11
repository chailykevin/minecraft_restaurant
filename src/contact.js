const contact = function () {
  const buttons = document.querySelectorAll("button");
  for (var but of buttons) {
    but.classList.remove("active");
  }

  const content = document.getElementById("content");
  content.classList.remove("home");
  content.classList.remove("menu");
  content.classList.add("contact");
  content.innerHTML = `<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1015387.3466497943!2d105.45671684687498!3d-6.2165864999999965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffa59009f367%3A0x5c69a96c16edafa!2sNasi%20Goreng%20Minecraft!5e0!3m2!1sid!2sid!4v1720711338167!5m2!1sid!2sid"
  width="600"
  height="450"
  style="border: 0"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
<div class="info">
  <h3>Contact Us :</h3>
  <p>Phone : 08XX XXXX XXXX</p>
  <p>Email : XXXX@gmail.com</p>
</div>`;

  const button = document.getElementById("contact");
  button.classList.add("active");
};

export default contact;
