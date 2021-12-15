// function toggleHamburger() {
//   const mainMenu = document.querySelector(".mainMenu");
//   if (mainMenu.style.display === "flex") {
//       mainMenu.style.display = "none";
//   } else {
//       mainMenu.style.display = "flex";
//   }
// }

// document.querySelector(".hamburger").addEventListener("click", toggleHamburger)

// selectors
const modal = document.querySelector(".varukorg-modal");
const varukorgKnapp = document.querySelector(".fa-bars");
const closeVarukorgModal = document.querySelector(".close-btn");

//addeventlistener för att öppna modalen
varukorgKnapp.addEventListener("click", openVarukorg);
closeVarukorgModal.addEventListener("click", closeVarukorg);

// addeventlistener för att stänga om man klickar utanför
document.addEventListener("click", outsideClick)

//funktion för att öppna varukorgsmodal
function openVarukorg () {
    modal.style.display = "flex";
}

//funktion för att stänga varukorgsmodal med stängknappen
function closeVarukorg () {
    modal.style.display = "none";
}

//Funktion för att stänga varukorgsmodal om man klickar utanför varukorgen
function outsideClick(click) {
    if (click.target === modal) {
        modal.style.display = "none";
    }
}