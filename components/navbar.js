

class NavBar extends HTMLElement {
    constructor() {
        super();

        this.innerHTML =
        `<header class="header">
        <div class="nav">
            <div class="navTop">
                <h1>
                    <a class="logoContainer" href="index.html"><img class="logo" src="./Bilder/wie2-svg.svg"></a>
                </h1>
                <div class="icons">
                    <a href="wishlistModal.html" class="iconNav"><i class="fas fa-heart"></i></a>
                    <a href="shoppingCartModal.html" class="iconNav"><i class="fas fa-shopping-cart"></i></a>
                </div>
            </div>

            <div class="navBot">
                <div class="hamburger"><i class="fas fa-bars"></i></div>
                <div class="hamburger-modal">
                        <div class="hamburger-modal-content">
                            <div class="hamburger-modal-header">
                                <span class="close-btn">&times;</span>
                                <h2>Produktkategorier</h2>
                            </div>

                            <section class="hamburger-modal-categories">
                                <ul class="modalMenu">
                                    <li class="liModal"><a href="products.html?category=Skärmar" class="aModal">Skärmar</a></li>
                                    <li class="liModal"><a href="products.html?category=Tangentbord" class="aModal">Tangentbord</a></li>
                                    <li class="liModal"><a href="products.html?category=Möss" class="aModal">Möss</a></li>
                                    <li class="liModal"><a href="products.html?category=Konsoler" class="aModal">Konsoler</a></li>
                                    <li class="liModal"><a href="products.html?category=Gamingstolar" class="aModal">Gamingstolar</a></li>
                                    <li class="liModal"><a href="products.html?category=Musmattor" class="aModal">Musmattor</a></li>
                                    <li class="liModal"><a href="products.html?category=Hörlurar" class="aModal">Hörlurar</a></li>
                                </ul>
                            </section>

                        </div>    
                </div>
                    <ul class="navMenu">
                        <li class="liNav"><a href="products.html?category=Skärmar" class="aNav">Skärmar</a></li>
                        <li class="liNav"><a href="products.html?category=Tangentbord" class="aNav">Tangentbord</a></li>
                        <li class="liNav"><a href="products.html?category=Möss" class="aNav">Möss</a></li>
                        <li class="liNav"><a href="products.html?category=Konsoler" class="aNav">Konsoler</a></li>
                        <li class="liNav"><a href="products.html?category=Gamingstolar" class="aNav">Gamingstolar</a></li>
                        <li class="liNav"><a href="products.html?category=Musmattor" class="aNav">Musmattor</a></li>
                        <li class="liNav"><a href="products.html?category=Hörlurar" class="aNav">Hörlurar</a></li>
                    </ul>        
            </div>
        </div>
    </header>`

        const hamburgerModal = document.querySelector(".hamburger-modal");
        const hamburger = document.querySelector(".fa-bars");
        const closeModal = document.querySelector(".close-btn");

        hamburger.addEventListener("click", openHamburger);
        closeModal.addEventListener("click", closeHamburger);
        document.addEventListener("click", outsideClick)


        function openHamburger() {
            hamburgerModal.style.display = "flex";
        }
        function closeHamburger() {
            hamburgerModal.style.display = "none";
        }
        function outsideClick(click) {
            if (click.target === hamburgerModal) {
                hamburgerModal.style.display = "none";
            }
        }
    }
}

//'nav-bar' blir html elementet, i exempelSida.html ska det alltså stå <nav-bar></nav-bar>
customElements.define('nav-bar', NavBar);