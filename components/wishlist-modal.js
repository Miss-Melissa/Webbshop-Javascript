//Skapar template med html 
const wishlistModalTemplate = document.createElement('template');
wishlistModalTemplate.innerHTML = `
<div class="wishlist-modal">
    <div class="wishlist-modal-content">
        <div class="modal-header">
            <span class="close-btn">&times;</span>
            <h2>Wishlist</h2>
        </div>
        <div class="modal-products">
            <div class="product-qty">
                <!-- total amount of products in wishlist -->
            </div>
            <div class="product-list">
                <!-- wishlist products  -->
            </div>
            <div class="wishlist-total">
                <!-- wishlist total -->
            </div>
            <div class="to-cart-btn"
                <a href="#">
                    <button type="submit" class="add-all-to-cart btn btn-secondary">Lägg till alla i varukorg</button>
                </a>
            </div>
        </div>
    </div>
</div>`;

//Skapar klassen WishlistModal
class WishlistModal extends HTMLElement {
    constructor() {
        super();

        //Skapar html element
        this.appendChild(wishlistModalTemplate.content.cloneNode(true));

        // selectors Modal
        const modal = document.querySelector(".wishlist-modal");
        const wishlistKnapp = document.querySelector(".bi-suit-heart-fill");
        const closeWishlistModal = document.querySelector(".close-btn");

        //addeventlistener för att öppna modalen
        document.addEventListener("open-wishlist", openWishlist);
        closeWishlistModal.addEventListener("click", closeWishlist);

        // addeventlistener för att stänga om man klickar utanför
        document.addEventListener("click", outsideClick)

        //funktion för att öppna varukorgsmodal
        function openWishlist() {
            console.log('OPEN WISHLIST');
            modal.style.display = "block";
        }

        //funktion för att stänga varukorgsmodal med stängknappen
        function closeWishlist() {
            modal.style.display = "none";
        }

        //Funktion för att stänga varukorgsmodal om man klickar utanför varukorgen
        function outsideClick(click) {
            if (click.target === modal) {
                modal.style.display = "none";
            }
        }

        //Selectors
        const productList = document.querySelector(".product-list")
        const productQty = document.querySelector(".product-qty")
        const wishlistTotal = document.querySelector(".wishlist-total")
        const addAllToCart = document.querySelector(".add-all-to-cart")
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

        // --------------------------------------------------------------------
        // setItem cart to local storage
        function setCartLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // --------------------------------------------------------------------
        // setItem wishlist to local storage
        function setWishlistLocalStorage() {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
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
                setWishlistLocalStorage()
            } else if (e.target && e.target.classList.contains("remove-one")) {
                const id = e.target.dataset.id
                removeProduct(id, 1)
            } else if (e.target && e.target.classList.contains("add-to-cart")) {
                const id = e.target.dataset.id
                addProductCart(id)
            }
        }

        // --------------------------------------------------------------------
        // BUTTON THAT ADD WISHLIST AND CART TO LOCAL STORAGE. ALSO CLEAR THE WISHLIST ARRAY.
        addAllToCart.onclick = function (e) {
            if (e.target && e.target.classList.contains("add-all-to-cart")) {
                cart.push(...wishlist)
                setCartLocalStorage()
            }
            wishlist.splice(0, wishlist.length)
            setWishlistLocalStorage()
            showProduct()
        }
        // --------------------------------------------------------------------
        // ADD PRODUCT TO WISHLIST
        function addProduct(id) {
            for (let i = 0; i < wishlist.length; i += 1) {
                if (wishlist[i].id === id) {
                    wishlist[i].qty += 1
                    showProduct()
                    return
                }
            }
        }

        // --------------------------------------------------------------------
        // ADD PRODUCTS TO CART
        function addProductCart(id) {
            for (let i = 0; i < wishlist.length; i += 1) {
                if (wishlist[i].id === id) {
                    cart.push(wishlist[i])
                }
            }

            setCartLocalStorage()

            for (let i = 0; i < wishlist.length; i += 1) {
                if (wishlist[i].id === id) {
                    wishlist.splice([i], 1)
                }
            }
            setWishlistLocalStorage()

            showProduct()
        }

        // --------------------------------------------------------------------
        // SHOW PRODUCT
        function showProduct() {
            productQty.innerHTML = `Här hittar du dina markerade favoriter`
            let productStr = ""
            //For varje produkt som läggs till i wishlist, skapa nedan htmlstruktur
            for (let i = 0; i < wishlist.length; i += 1) {
                let { title, price, thumbnail, id } = wishlist[i]

                productStr += `
                <li class="li-item">
                    <div class="product-img-name">
                        <img class="product-img-name" referrerpolicy="no-referrer" src="${thumbnail}"/>
                        <span class="img-li-description">${title} - ${price} kr</span>
                    </div> 
                    <div class="wishlist-btns-li">
                        <button class="add-to-cart btn btn-primary" type="submit" data-id="${id}">Lägg Till</button>
                        <button class="remove btn btn-danger" data-id="${id}"><span class="close">&times;</span></button>
                    </div>
                </li>
                `
            }
            productList.innerHTML = productStr
            // wishlistTotal.innerHTML = `Wishlist total: ${getTotal()}kr`
        }

        // --------------------------------------------------------------------
        // REMOVE PRODUCT
        function removeProduct(id, qty = 0) {
            for (let i = 0; i < wishlist.length; i += 1) {
                if (wishlist[i].id === id) {
                    if (qty > 0) {
                        wishlist[i].qty -= 1
                    }
                    if (wishlist[i].qty < 1 || qty === 0) {
                        wishlist.splice(i, 1)
                    }
                    setWishlistLocalStorage()
                    showProduct()
                    return
                }
            }
        }

        showProduct()

    }
}
//definerar vad html elemetet ska heta för att kunna använda i html
customElements.define('wishlist-modal', WishlistModal);