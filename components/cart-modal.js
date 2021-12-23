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
                <ul class="product-list">
                    <!-- cart products  -->
                </ul>
                <div class="cart-total">
                    <!-- cart total -->
                </div>
                <a href="#">
                    <button type="submit" class="purchase-button">Purchase</button>
                </a>
            </div>

            <div class="randomProducts">
                <i>Psst! Du har väl inte missat dessa produkter..</i>
                <i class="far fa-grin-wink"></i>
            </div>

        </div>
    </div>
`;

class CartModal extends HTMLElement {
    constructor() {
        super();

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

        const productList = document.querySelector(".product-list")
        const productQty = document.querySelector(".product-qty")
        const cartTotal = document.querySelector(".cart-total")
        const purchase = document.querySelector(".purchase-button")

        const cart = JSON.parse(localStorage.getItem("cart")) || []

        // --------------------------------------------------------------------
        // setItem cart to local storage
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
            productQty.innerHTML = `You have ${getQty()} products in your cart`
            let productStr = ""
            for (let i = 0; i < cart.length; i += 1) {
                const { title, price, thumbnail, qty, id } = cart[i]

                productStr += `<li><img src="${thumbnail}">${title} $${price} x ${qty} = $${qty * price} 
                <button class="remove" data-id="${id}">Remove</button>
                <button class="add-one" data-id="${id}">+</button>
                <button class="remove-one" data-id="${id}">-</button>
                </li>`
            }
            productList.innerHTML = productStr
            cartTotal.innerHTML = `Cart total: ${getTotal()}`
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
customElements.define('cart-modal', CartModal);