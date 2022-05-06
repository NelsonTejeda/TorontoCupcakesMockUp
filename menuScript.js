const menu = [
  {
    name: "Chocolate Peanut Butter",
    description:
      "chocolate cupcakes with peanut butter frosting, chocolate ganache, and peanut butter cups. These cupcakes are the ultimate chocolate and peanut butter dessert!",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatepeanutbutter.webp",
  },
  {
    name: "Chocolate Hazelnut",
    description:
      "Ever wish you could eat Nutella in cupcake form? Now you can with these chocolate hazelnut cupcakes with Nutella buttercream!",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatehazelnut.webp",
  },
  {
    name: "Vanilla Coconut",
    description:
      "These old-fashioned coconut cupcakes are tender and super coconut-y",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/vanillacoconut.webp",
  },
  {
    name: "Chocolate Coconut",
    description:
      "These super rich and totally indulgent chocolate coconut cupcakes are filled with coconut cream, topped with thick coconut buttercream and finished off with a hearty sprinkle of toasted coconut! These are sure to be any coconut lovers new best friend!",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatecoconut.webp",
  },
  {
    name: "Chocolate Chocolate",
    description:
      "These perfect Chocolate Cupcakes are paired with the most amazing Chocolate Frosting. These amazing moist chocolate cupcakes will be your new favorite!",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatechocolate.webp",
  },
  {
    name: "Chocolate Vanilla",
    description:
      "Vanilla and chocolate swirl together in these cupcakes to make a beautiful and delicious combination. Top them with pearlized sprinkles to complete the elegant look.",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatevanilla.webp",
  },
  {
    name: "Red Velvet",
    description:
      "fluffy red velvet cupcakes topped with a big dollop of cream cheese frosting are beyond delicious",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/redvelvet.webp",
  },
  {
    name: "Vanilla Vanilla",
    description:
      "A double-dose of vanilla extract—in the cake and in the buttercream frosting —gives these cupcakes great vanilla taste that's just the right amount of sweetness ",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/vanillavanilla.webp",
  },
  {
    name: "Vanilla Chocolate",
    description:
      "Moist, rich, and delicious vanilla chocolate cupcakes. They practically melt in your mouth. They are the perfect cupcake for vanilla and chocolate lover's",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/vanillachocolate.webp",
  },
  {
    name: "Chocolate Caramel",
    description:
      "Salted Caramel Chocolate Cupcakes combine rich, moist chocolate cupcakes with an easy salted caramel filling and salted caramel buttercream. This is the best kind of indulgence, right here.",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatecarmel2.webp",
  },
  {
    name: "Vanilla Chocolate Ganache",
    description:
      "Soft and fluffy Chocolate Cupcakes topped with a 2-ingredient chocolate ganache frosting ",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/vanillachocolateganache.webp",
  },
  {
    name: "Chocolate Caramel",
    description:
      "Salted Caramel Chocolate Cupcakes combine rich, moist chocolate cupcakes with an easy salted caramel filling and salted caramel buttercream. This is the best kind of indulgence, right here.",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatecarmel.webp",
  },
  {
    name: "Vanilla Caramel",
    description:
      "These caramel cupcakes are filled with buttery caramel, frosted with caramel buttercream, and drizzled with gooey caramel!",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/vanillacarmel.webp",
  },
  {
    name: "Hot Fudge Sundae",
    description:
      "These Hot Fudge Sundae Cupcakes are fluffy strawberry cupcakes topped with sweet swirls of vanilla buttercream, homemade chocolate ganache, sprinkles, and a cherry on top!",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/hotfudgesundae.webp",
  },
  {
    name: "Vanilla Lemon",
    description:
      "These lemon cupcakes are moist, fluffy, zingy and topped with an incredible lemon buttercream that's a lemon-lover's dream!",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/lemon.webp",
  },
  {
    name: "Chocolate Toffee",
    description:
      "Rich and delicious chocolate toffee cupcakes with salted caramel buttercream! These chocolate cupcakes are perfect for any occasion!",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolatetoffee.webp",
  },
  {
    name: "Chocolate Oreo",
    description:
      "Soft, moist chocolate cupcakes topped with an easy Oreo buttercream frosting. These Chocolate Oreo Cupcakes are perfect for Oreo lovers!",
    imageURL:
      "https://www.torontocupcake.com/images/cupcakes_flavours/chocolateoreo.webp",
  },
  {
    name: "Hummingbird",
    description:
      "Hummingbird cupcakes are a classic Southern dessert. Filled with fruit and nuts, these party-ready cupcakes will make everyone hum with excitement!",
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
