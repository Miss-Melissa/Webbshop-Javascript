const cartModalTemplate = document.createElement('template');
cartModalTemplate.innerHTML = `
<div class="varukorg-modal">
  <div class="varukorg-modal-content">

    <div class="modal-header">
      <span class="close-btn">&times;</span>
      <h2>Varukorg</h2>
    </div>

    <div class="modal-products"></div>
    
    <div class="modal-summa">
      <h4>Totalsumma: <span>0</span> kr</h4>
    </div>

    <div class="to-checkout">
      <button class="btn-checkout">Till kassan</button>
    </div>

    <div class="wishlist-suggestions">
      <i>Psst! Du har väl inte glömt att lägga till dessa produkter från din
        wishlist..</i>
      <i class="far fa-grin-wink"></i>
    </div>

  </div>
</div>
`;


class CartModal extends HTMLElement {
    constructor() {
        super();

        //Lägger till några test items i cart
        /* cartHandler.addToCart("yDT4wCy");
        cartHandler.addToCart("e62OnJj");
        cartHandler.addToCart("1hmhMDv");
        cartHandler.addToCart("i3TyjjQ");
        cartHandler.addToCart("PSWXe90"); */

        //Skapar html element
        this.appendChild(cartModalTemplate.content.cloneNode(true));

        //Custom Event för att öppna varukorgsmodal kommer från navbaren
        document.addEventListener("open-modal", () => {
            modal.style.display = "block";
        });

        // selectors
        const modal = this.querySelector(".varukorg-modal");
        const closeVarukorgModal = this.querySelector(".close-btn");

        //addeventlistener för att öppna modalen
        closeVarukorgModal.addEventListener("click", closeVarukorg);

        // addeventlistener för att stänga om man klickar utanför
        this.addEventListener("click", outsideClick);

        //funktion för att stänga varukorgsmodal med stängknappen
        function closeVarukorg() {
            modal.style.display = "none";
        };

        //Funktion för att stänga varukorgsmodal om man klickar utanför varukorgen
        function outsideClick(click) {
            if (click.target === modal)
                closeVarukorg();
        };  

    }
}
customElements.define('cart-modal', CartModal);