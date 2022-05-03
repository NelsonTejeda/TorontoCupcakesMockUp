const toggleBTN = document.getElementsByClassName("toggleBTN")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleBTN.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function stringifyHTML(description, name, imageURL) {
  return `<div class="cupcakeObject">
    <div class="textScreen">${description}</div>
    <img
      class="slideImage"
      src="${imageURL}"
      alt="${name}"
    />
    <p style="text-align: center; font-size: 20px">${name}</p>
  </div>`;
}

function makeCupcakeMenu(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

let temp = stringifyHTML(
  "this is a description",
  "vanilla cupcake",
  "./assests/bestSellerCupcakes/vanillavanilla.webp"
);
const ans = makeCupcakeMenu(temp);
document.getElementById("cupcakeList").appendChild(ans);
