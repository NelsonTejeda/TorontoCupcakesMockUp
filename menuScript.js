const menu = [
  {
    name: "Chocolate Peanut Butter",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatepeanutbutter.webp",
  },
  {
    name: "Chocolate Hazelnut",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatehazelnut.webp",
  },
  {
    name: "Vanilla Coconut",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/vanillacoconut.webp",
  },
  {
    name: "Chocolate Coconut",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatecoconut.webp",
  },
  {
    name: "Chocolate Chocolate",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatechocolate.webp",
  },
  {
    name: "Chocolate Vanilla",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatevanilla.webp",
  },
  {
    name: "Red Velvet",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/redvelvet.webp",
  },
  {
    name: "Vanilla Vanilla",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/vanillavanilla.webp",
  },
  {
    name: "Vanilla Chocolate",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/vanillachocolate.webp",
  },
  {
    name: "Chocolate Carmel",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatecarmel2.webp",
  },
  {
    name: "Vanilla Chocolate Ganache",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/vanillachocolateganache.webp",
  },
  {
    name: "Chocolate Carmel",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatecarmel.webp",
  },
  {
    name: "Vanilla Carmel",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/vanillacarmel.webp",
  },
  {
    name: "Chocolate Carmel",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatecarmel2.webp",
  },
  {
    name: "Vanilla Lemon",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/lemon.webp",
  },
  {
    name: "Chocolate Toffee",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatetoffee.webp",
  },
  {
    name: "Chocolate Oreo",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolateoreo.webp",
  },
  {
    name: "Hummingbird",
    description: "this is a description",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/hummingbird.webp",
  },
];

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
      style="height: 225px"
    />
    <p style="text-align: center; font-size: 20px">${name}</p>
  </div>`;
}

function makeCupcakeObject(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function makeMenu() {
  menu.forEach((item, index) => {
    let temp = stringifyHTML(item.description, item.name, item.imageURL);
    const cupcake = makeCupcakeObject(temp);
    document.getElementById("cupcakeList").appendChild(cupcake);
  });
}

makeMenu();
