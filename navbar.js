function toggleHamburger() {
    const toggle = document.querySelector(".navbar");
    if (toggle.style.display === "block") {
      toggle.style.display = "none";
    } else {
      toggle.style.display = "block";
    }
  }