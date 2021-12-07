// selectors
const modal = document.querySelector(".varukorg-modal");
const testBtn = document.querySelector("#modal-btn");
const closeVarukorgModal = document.querySelector(".close-btn");

//addeventlistener för att öppna modalen
testBtn.addEventListener("click", openVarukorg);
closeVarukorgModal.addEventListener("click", closeVarukorg);

// addeventlistener för att stänga om man klickar utanför
document.addEventListener("click", outsideClick)


//funktion för att öppna varukorgsmodal
function openVarukorg () {
    modal.style.display = "block";
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