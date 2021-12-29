//Skapar template med html 
const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
<footer class="big-container">

        <div class="footer-row">
    
          <div>
            <span>Kontakta oss genom:</span>
          </div>
    
          <div>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-github"></i>
            </a>
            <a href="#">
              <i class="fas fa-envelope-square"></i>
            </a>
            <a href="#">
              <i class="fas fa-phone-square-alt"></i>
            </a>
    
          </div>
        </div>
    
        <hr>

        <div class="footer-row">
          
          <div class="footer-company-info">
            <h4>
              <i class="fas fa-gamepad"></i> WIEGAMING
            </h4>
            <p>
              WIEGaming är en av Nordens bästa spelbutiker med över 100.000
              olika produkter inom spel, film, prylar och elektronik.
            </p>
          </div>

          <div>
            <h4>
              Kundservice
            </h4>
            <p>
              <a href="#">Jobba hos oss</a>
            </p>
            <p>
              <a href="#">Leveranstid</a>
            </p>
            <p>
              <a href="#">Köpvillkor</a>
            </p>
            <p>
              <a href="#">Byte och retur</a>
            </p>
          </div>

          <div>
            <h4>
              Kontakt
            </h4>
            <p>Gustavslundsvägen 151 D,<br> 167 51 Bromma</p>

            <p>
              <i class="fas fa-envelope"></i>
              info@WIEGaming.com
            </p>

            <p><i class="fas fa-phone"></i> + 46 702 567 88</p>
            <p><i class="fas fa-print"></i> + 46 702 567 89</p>

          </div> 
        </div>

        

        <div class="footer-row-last">
          <span>© 2021 Copyright:</span>
          <a href="https://WIEGAMING.com/">WIEGaming.com</a>
        </div>
    
      </footer>
`

class Footer extends HTMLElement {
  constructor() {
    super();

    this.appendChild(footerTemplate.content.cloneNode(true));
  }
}
//definerar vad html elemetet ska heta för att kunna använda i html
customElements.define('footer-comp', Footer);

