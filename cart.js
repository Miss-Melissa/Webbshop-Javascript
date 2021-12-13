const productList = document.querySelector("#product-list")
const productName = document.querySelector("#product-name")
const productPrice = document.querySelector("#product-price")
const productQty = document.querySelector("#product-qty")
const purchase = document.querySelector(".purchase-button")
const cartTotal = document.querySelector("#cart-total")
const cart = JSON.parse(localStorage.getItem("cart")) || []
/* ******* showproducts gör att det som finns i de inkommande arrayerna visas direkt utan att man behöver klicka någonstans ****
funktionen showproduct finns längre ned i den här koden.
*/
showProduct()
// --------------------------------------------------------------------
// Handle remove and +/- buttons
productList.onclick = function(e) {
    if(e.target && e.target.classList.contains("remove")) {
        const name = e.target.dataset.name
        removeProduct(name)
    } else if(e.target && e.target.classList.contains("add-one")) {
        const name = e.target.dataset.name
        addProduct(name)
    } else if(e.target && e.target.classList.contains("remove-one")) {
        const name = e.target.dataset.name
        removeProduct(name, 1)
    }
}

// --------------------------------------------------------------------
// ADD product
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
// SHOW product
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
// REMOVE product

function removeProduct(name, qty = 0) {
    for(let i=0; i < cart.length; i+=1) {
        if(cart[i].name === name) {
            if(qty > 0) {
                cart[i].qty -= 1
            }
            if(cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1)
            }
            showProduct()
            return
        }
    }
}
// --------------------------------------------------------------------
// BUTTON THAT ADD CART TO LOCAL STORAGE.
purchase.onclick = function(e) {
    if(e.target && e.target.classList.contains("purchase-button")) {
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    showProduct()
    console.log("fungerar")
}

// --------------------------------------------------------------------
// TEST PRODUCTS
/*
addproduct("Game", 2)
addproduct("Chair", 1)
addproduct("Game", 2)
addproduct("Laptop", 4)
addproduct("Game", 2)
addproduct("Chair", 1)
*/