// selectors modal
const modal = document.querySelector(".varukorg-modal");
const varukorgKnapp = document.querySelector(".fa-shopping-cart");
const closeVarukorgModal = document.querySelector(".close-btn");

//addeventlistener för att öppna modalen
varukorgKnapp.addEventListener("click", openVarukorg);
closeVarukorgModal.addEventListener("click", closeVarukorg);

// addeventlistener för att stänga om man klickar utanför
document.addEventListener("click", outsideClick)


//funktion för att öppna varukorgsmodal
function openVarukorg () {
    modal.style.display = "block";
}

//funktion för att stänga varukorgsmodal med stängknappen
function closeVarukorg () {
    modal.style.display = "none";
}

//Funktion för att stänga varukorgsmodal om man klickar utanför varukorgen
function outsideClick(click) {
    if (click.target === modal) {
        modal.style.display = "none";
    }
}

//selectors varukorginnehåll
const productList = document.querySelector("#product-list")
const productName = document.querySelector("#product-name")
const productPrice = document.querySelector("#product-price")
const productQty = document.querySelector("#product-qty")
const purchase = document.querySelector(".purchase-button")
const cartTotal = document.querySelector("#cart-total")
const cart = JSON.parse(localStorage.getItem("cart")) || []

showProduct()

// --------------------------------------------------------------------
// setItem cart to local storage
function setCartLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// --------------------------------------------------------------------
// HANDLE BUTTON CLICKS ON PRODUCTS
productList.onclick = function(e) {
    if(e.target && e.target.classList.contains("remove")) {
        const name = e.target.dataset.name
        removeProduct(name)
    } else if(e.target && e.target.classList.contains("add-one")) {
        const name = e.target.dataset.name
        addProduct(name)
        setCartLocalStorage()
    } else if(e.target && e.target.classList.contains("remove-one")) {
        const name = e.target.dataset.name
        removeProduct(name, 1)
    }
}

// --------------------------------------------------------------------
// BUTTON THAT ADD CART TO LOCAL STORAGE.
purchase.onclick = function(e) {
    if(e.target && e.target.classList.contains("purchase-button")) {
        setCartLocalStorage()
    }
    showProduct()
}

// --------------------------------------------------------------------
// ADD PRODUCT TO CART
function addProduct(name, price) {
    for(let i=0; i < cart.length; i+=1) {
        if(cart[i].name === name) {
            cart[i].qty +=1
            showProduct()
            return
        }
    }
    const product = {name, price, qty: 1}
    cart.push(product)
    
    showProduct()
}

// --------------------------------------------------------------------
// SHOW PRODUCT
function showProduct() {
    productQty.innerHTML = `You have ${getQty()} products in your cart`
    let productStr = ""
    for (let i=0; i < cart.length; i+=1) {
        const {name, price, qty} = cart[i]

        productStr += `<li>${name} $${price} x ${qty} = $${qty * price} 
        <button class="remove" data-name="${name}">Remove</button>
        <button class="add-one" data-name="${name}">+</button>
        <button class="remove-one" data-name="${name}">-</button>
        </li>`
    }
    productList.innerHTML = productStr
    cartTotal.innerHTML = `Cart total: ${getTotal()}`
}
// --------------------------------------------------------------------
// GET QTY
function getQty() {
    let qty = 0
    for(let i=0; i < cart.length; i+=1) {
        qty += cart[i].qty
    }
    return qty
}

// --------------------------------------------------------------------
// GET TOTAL
function getTotal() {
    let total = 0
    for(let i=0; i < cart.length; i+=1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
}

// --------------------------------------------------------------------
// REMOVE PRODUCT

function removeProduct(name, qty = 0) {
    for(let i=0; i < cart.length; i+=1) {
        if(cart[i].name === name) {
            if(qty > 0) {
                cart[i].qty -= 1
            }
            if(cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1)
            }
            setCartLocalStorage()
            showProduct()
            return
        }
    }
}