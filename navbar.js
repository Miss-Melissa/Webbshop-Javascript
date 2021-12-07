function toggleHamburger() {
  const mainMenu = document.querySelector(".mainMenu");
  if (mainMenu.style.display === "block") {
      mainMenu.style.display = "none";
  } else {
      mainMenu.style.display = "block";
  }
}

document.querySelector(".hamburger").addEventListener("click", toggleHamburger)