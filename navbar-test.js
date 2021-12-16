
//--------------------------------------------------------------------------------
// HTML reference
const hamburgerModal = document.querySelector(".hamburger-modal");
const hamburger = document.querySelector(".fa-bars");
const closeModal = document.querySelector(".close-btn");

//--------------------------------------------------------------------------------
// Handle clicks
hamburger.addEventListener("click", openHamburger);
closeModal.addEventListener("click", closeHamburger);
document.addEventListener("click", outsideClick)

//--------------------------------------------------------------------------------
// Hamburger modal toggle functions
function openHamburger () {
    hamburgerModal.style.display = "flex";
}
function closeHamburger () {
    hamburgerModal.style.display = "none";
}
function outsideClick(click) {
    if (click.target === hamburgerModal) {
        hamburgerModal.style.display = "none";
    }
}