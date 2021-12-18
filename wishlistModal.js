// selectors
const modal = document.querySelector(".wishlist-modal");
const wishlistKnapp = document.querySelector(".fa-heart");
const closeWishlistModal = document.querySelector(".close-btn");

//addeventlistener för att öppna modalen
wishlistKnapp.addEventListener("click", openWishlist);
closeWishlistModal.addEventListener("click", closeWishlist);

// addeventlistener för att stänga om man klickar utanför
document.addEventListener("click", outsideClick)


//funktion för att öppna varukorgsmodal
function openWishlist () {
    modal.style.display = "block";
}

//funktion för att stänga varukorgsmodal med stängknappen
function closeWishlist () {
    modal.style.display = "none";
}

//Funktion för att stänga varukorgsmodal om man klickar utanför varukorgen
function outsideClick(click) {
    if (click.target === modal) {
        modal.style.display = "none";
    }
}