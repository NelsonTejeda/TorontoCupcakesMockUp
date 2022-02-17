const toggleBTN = document.getElementsByClassName("toggleBTN")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleBTN.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});