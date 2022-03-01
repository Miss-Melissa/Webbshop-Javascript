//Skapar template med html 
const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
<footer class="footerContainer">
<section class="social-media">
  <div class="text-social-media">
    <span>Get connected with us on social networks:</span>
  </div>

  <div>
    <a href="" class="icon-design">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="" class="icon-design">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="" class="icon-design">
      <i class="fab fa-google"></i>
    </a>
    <a href="" class="icon-design">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="" class="icon-design">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="" class="icon-design">
      <i class="fab fa-github"></i>
    </a>
  </div>
</section>

<section class="">
  <div class="footer-infotext-row">
    <div class="footer-text-column">
      <div class="footer-text-content">
        <h6 class="design-h6">
          <i class="fas fa-gem me-3"></i>Beauty Store
        </h6>
        <p>
        Beauty Store är ett svenskt kosmetikaföretag som grundades 1996 av 
        Melissa Zarinnegar. Våra produkter är cruelty-free och inom kort är vi ett av de första 
        kosmetikamärken som gjort om vårt sortiment till fullt veganskt. Vi erbjuder ett brett spektrum av 
        färger från klassiska nyanser till dom senaste färgtrenderna.
        <br>
        <br>

Från vår unika färgkosmetik till våra innovativa hudvårdsprodukter tar vi 

din makeupupplevelse till en ny nivå.
        </p>
      </div>

      <div class="footer-link">
        <h6 class="design-h6">
          Products
        </h6>
        <p>
          <a href="#!" class="textlinkcolor">Angular</a>
        </p>
        <p>
          <a href="#!" class="textlinkcolor">React</a>
        </p>
        <p>
          <a href="#!" class="textlinkcolor">Vue</a>
        </p>
        <p>
          <a href="#!" class="textlinkcolor">Laravel</a>
        </p>
      </div>

      <div class="footer-link">
        <h6 class="design-h6">
          Contact
        </h6>
        <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
        <p>
          <i class="fas fa-envelope me-3"></i>
          info@example.com
        </p>
        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
      </div>
    </div>
  </div>
</section>
`

class Footer extends HTMLElement {
  constructor() {
    super();

    this.appendChild(footerTemplate.content.cloneNode(true));
  }
}
//definerar vad html elemetet ska heta för att kunna använda i html
customElements.define('footer-comp', Footer);

