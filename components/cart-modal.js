//Skapar template med html 
const cartModalTemplate = document.createElement('template');
cartModalTemplate.innerHTML = `
<div class="varukorg-modal">
        <div class="varukorg-modal-content">
            <div class="modal-header">
                <span class="close-btn">&times;</span>
                <h2>Varukorg</h2>
            </div>
            <div class="modal-products">
                <div class="product-qty">
                    <!-- total amount of products in cart -->
                </div>
                <div class="product-list">
                    <!-- cart products  -->
                </div>
                <div class="cart-total">
                    <!-- cart total -->
                </div>
                <div class="to-checkout-btn">
                    <a href="checkout.html">
                        <button type="submit" class="purchase-button btn btn-primary">Till kassan</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
`;

//Skapar class CartModal
class CartModal extends HTMLElement {
    constructor() {
        super();

        //Skapar html element
        this.appendChild(cartModalTemplate.content.cloneNode(true));

        //Custom Event för att öppna varukorgsmodal kommer från navbaren
        document.addEventListener("open-cart", () => {
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

        //selectors
        const productList = document.querySelector(".product-list")
        const productQty = document.querySelector(".product-qty")
        const cartTotal = document.querySelector(".cart-total")
        const purchase = document.querySelector(".purchase-button")

        const cart = JSON.parse(localStorage.getItem("cart")) || []

        // --------------------------------------------------------------------
        // SETITEM CART TO LOCAL STORAGE
        function setCartLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // --------------------------------------------------------------------
        // HANDLE BUTTON CLICKS ON PRODUCTS
        productList.onclick = function (e) {
            if (e.target && e.target.classList.contains("remove")) {
                const id = e.target.dataset.id
                removeProduct(id)
            } else if (e.target && e.target.classList.contains("add-one")) {
                const id = e.target.dataset.id
                addProduct(id)
                setCartLocalStorage()
            } else if (e.target && e.target.classList.contains("remove-one")) {
                const id = e.target.dataset.id
                removeProduct(id, 1)
            }
        }

        // --------------------------------------------------------------------
        // PURCHASE BUTTON THAT ADD CART TO LOCAL STORAGE.
        purchase.onclick = function (e) {
            if (e.target && e.target.classList.contains("purchase-button")) {
                setCartLocalStorage()
            }
            showProduct()
        }

        // --------------------------------------------------------------------
        // ADD PRODUCT TO CART
        function addProduct(id) {
            for (let i = 0; i < cart.length; i += 1) {
                if (cart[i].id === id) {
                    cart[i].qty += 1
                    showProduct()
                    return
                }
            }
        }

        // --------------------------------------------------------------------
        // SHOW PRODUCT
        function showProduct() {
            productQty.innerHTML = `Du har ${getQty()} produkt(er) i din varukorg`
            let productStr = ""
            //Produktinnehållet i cart (per produkt)
            for (let i = 0; i < cart.length; i += 1) {
                const {title, price, thumbnail, qty, id } = cart[i]
                
                productStr += `
                <li class="li-item">
                    <div class="product-img-name">
                        <img referrerpolicy="no-referrer" src="${thumbnail}">
                        <span class="img-li-description">${title} ${price} x ${qty} = ${qty * price}kr</span>
                    </div>
                    <div class="product-btns-li">
                        <button class="remove-one btn btn-secondary" data-id="${id}">-</button>
                        <button class="add-one btn btn-secondary" data-id="${id}">+</button>
                        <button class="remove btn btn-danger" data-id="${id}">Ta bort</button>
                    </div>
                </li>
                `                
            }
            productList.innerHTML = productStr
            cartTotal.innerHTML = `Summa: ${getTotal()}kr`
        }
        // --------------------------------------------------------------------
        // GET QTY
        function getQty() {
            let qty = 0
            for (let i = 0; i < cart.length; i += 1) {
                qty += cart[i].qty
            }
            return qty
        }

        // --------------------------------------------------------------------
        // GET TOTAL
        function getTotal() {
            let total = 0
            for (let i = 0; i < cart.length; i += 1) {
                total += cart[i].price * cart[i].qty
            }
            return total.toFixed(2)
        }

        // --------------------------------------------------------------------
        // REMOVE PRODUCT
        function removeProduct(id, qty = 0) {
            for (let i = 0; i < cart.length; i += 1) {
                if (cart[i].id === id) {
                    if (qty > 0) {
                        cart[i].qty -= 1
                    }
                    if (cart[i].qty < 1 || qty === 0) {
                        cart.splice(i, 1)
                    }
                    setCartLocalStorage()
                    showProduct()
                    return
                }
            }
        }

        showProduct()

    }
}
//definerar vad html elemetet ska heta för att kunna använda i html
customElements.define('cart-modal', CartModal);