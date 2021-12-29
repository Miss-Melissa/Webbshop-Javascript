//Skapar template med html 
const navbarTemplate = document.createElement("template");

navbarTemplate.innerHTML = `
<nav>
  <div class="nav-top">
    <div class="nav-container">
      <a class="nav-link home-logo" href="/"><img width="50" src="./Bilder/wie2-svg.svg"><span>WIE GAMING</span></a>
      <span>
        <a id="nav-wishlist-btn" class="nav-link" href="#"><i class="bi bi-suit-heart-fill"></i></a>
        <a id="nav-cart-btn" class="nav-link" href="#"><i class="bi bi-cart3"></i></a>
        <a class="nav-link nav-burger" href="#"><i class="bi bi-justify"></i></a>
      </span>
    </div>
  </div>

  <div class="nav-bot">
    <div class="nav-container">
      <a class="nav-link" category="Skärmar" href="products.html?category=Skärmar">SKÄRMAR</a>
      <a class="nav-link" category="Tangentbord" href="products.html?category=Tangentbord">TANGENTBORD</a>
      <a class="nav-link" category="Möss" href="products.html?category=Möss">MÖSS</a>
      <a class="nav-link" category="Konsoler" href="products.html?category=Konsoler">KONSOLER</a>
      <a class="nav-link" category="Gamingstolar" href="products.html?category=Gamingstolar">GAMINGSTOLAR</a>
      <a class="nav-link" category="Musmattor" href="products.html?category=Musmattor">MUSMATTOR</a>
      <a class="nav-link" category="Hörlurar" href="products.html?category=Hörlurar">HÖRLURAR</a>
    </div>
  </div>
</nav>
<wishlist-modal></wishlist-modal>
<cart-modal></cart-modal>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();

    this.appendChild(navbarTemplate.content.cloneNode(true));

    this.querySelector('.nav-burger').addEventListener('click', (e) => {
      let navBot = this.querySelector('.nav-bot');
      navBot.style.display = navBot.style.display ? '' : 'block';
    });

    const url = new URL(location.href);
    const productCategory = url.searchParams.get('category');
    if (productCategory) {
      let activeElement = this.querySelector(`a[category="${productCategory}"]`);

      if (activeElement)
        activeElement.className += " link-active";
    }

  }

  connectedCallback() {
    const openCart = new Event('open-cart');
    const openWishlist = new Event('open-wishlist');

    this.querySelector('#nav-cart-btn').addEventListener('click', () => {
      document.dispatchEvent(openCart);
    });

    this.querySelector('#nav-wishlist-btn').addEventListener('click', () => {

      document.dispatchEvent(openWishlist);
    });
  }
}

//definerar vad html elemetet ska heta för att kunna använda i html
customElements.define('nav-bar', NavBar);