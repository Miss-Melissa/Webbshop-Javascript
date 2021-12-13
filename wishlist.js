const productList = document.querySelector("#product-list")
const productName = document.querySelector("#product-name")
const productPrice = document.querySelector("#product-price")
const productQty = document.querySelector("#product-qty")
const wishlistTotal = document.querySelector("#wishlist-total")
const addAllToCart = document.querySelector(".add-all-to-cart")

/* ********** Det här ska ersätta det som står nedanför när det finns en wishlist array att hämta från produktsidan ********
*******DUBBELKOLLA addProductCart funktionen så att den passar med detta*********************

const wishlist = JSON.parse(localStorage.getProduct("wishlist")) || [];
const cart = JSON.parse(localStorage.getProduct("cart")) || []
*/
/* DUMMY DATA: {name: "Game", price: 2, qty: 1}, {name: "Laptop", price: 4, qty: 1}, {name: "Chair", price: 3, qty: 1}, {name: "Konsol", price: 10, qty: 1} */ 
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
const cart = JSON.parse(localStorage.getItem("cart")) || []

/* ******* showProducts gör att det som finns i de inkommande arrayerna visas direkt utan att man behöver klicka någonstans ****
funktionen showProduct finns längre ned i den här koden.
*/
showProduct()


// --------------------------------------------------------------------
// HANDLE BUTTON CLICKS, DEPENDING ON BUTTON CLASS NAME
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
    else if(e.target && e.target.classList.contains("add-to-cart")) {
        const name = e.target.dataset.name
        const price = e.target.dataset.price
        addProductCart(name, price)
    }
}

// --------------------------------------------------------------------
// ADD MORE productS TO WISHLIST
function addProduct(name, price) {
    for(let i=0; i < wishlist.length; i+=1) {
        if(wishlist[i].name === name) {
            wishlist[i].qty +=1
            showProduct()
            return
        }
    }
    const product = {name, price, qty: 1}
    wishlist.push(product)

    const localStorageCart = JSON.parse(localStorage.getItem("wishlist")) || []
    wishlist.push(...localStorageWishlist)
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
    
    showProduct()
}
// --------------------------------------------------------------------
// ADD productS TO CART
function addProductCart(name, price) {
    for(let i=0; i < wishlist.length; i+=1) {
        if(wishlist[i].name === name) {
            wishlist[i].qty -=1
        }
    }
    const product = {name, price, qty: 1}
    cart.push(product)
   
    const localStorageCart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(...localStorageCart)
    localStorage.setItem("cart", JSON.stringify(cart))
    
    for(let i=0; i < wishlist.length; i+=1) {
        if(wishlist[i].name === name) {
            wishlist.splice([i], 1)
        }
    }
    showProduct()
}

// --------------------------------------------------------------------
// SHOW product
function showProduct() {
    productQty.innerHTML = `You have ${getQty()} products in your wishlist`
    let productStr = ""
    for (let i=0; i < wishlist.length; i+=1) {
        const {name, price, qty} = wishlist[i]

        productStr += `<li>${name} $${price} x ${qty} = $${qty * price} 
        <button class="remove" data-name="${name}">Remove</button>
        <button class="add-one" data-name="${name}">+</button>
        <button class="remove-one" data-name="${name}">-</button>
        <button class="add-to-cart" type="submit" data-name="${name}" data-price="${price}">Add To Cart</button>
        </li>`
    }
    productList.innerHTML = productStr
    wishlistTotal.innerHTML = `Wishlist total: ${getTotal()}`
}

// --------------------------------------------------------------------
// GET QTY
function getQty() {
    let qty = 0
    for(let i=0; i < wishlist.length; i+=1) {
        qty += wishlist[i].qty
    }
    return qty
}

// --------------------------------------------------------------------
// GET TOTAL
function getTotal() {
    let total = 0
    for(let i=0; i < wishlist.length; i+=1) {
        total += wishlist[i].price * wishlist[i].qty
    }
    return total.toFixed(2)
}

// --------------------------------------------------------------------
// REMOVE product

function removeProduct(name, qty = 0) {
    for(let i=0; i < wishlist.length; i+=1) {
        if(wishlist[i].name === name) {
            if(qty > 0) {
                wishlist[i].qty -= 1
            }
            if(wishlist[i].qty < 1 || qty === 0) {
                wishlist.splice(i, 1)
            }
            showProduct()
            return
        }
    }
}

// --------------------------------------------------------------------
// BUTTON THAT ADD WISHLIST AND CART TO LOCAL STORAGE. ALSO CLEAR THE WISHLIST ARRAY.
addAllToCart.onclick = function(e) {
    if(e.target && e.target.classList.contains("add-all-to-cart")) {
        cart.push(...wishlist)
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    wishlist.splice(0, wishlist.length)
    showProduct()
}

/*  ************* SLÅ IHOP WISHLIST OCH CART I BARA CART INNAN DE FLYTTAS TILL LOCAL STORAGE
*/

// --------------------------------------------------------------------
// TEST PRODUCTS

/*
addProduct("Game", 2,)
addProduct("Chair", 1)
addProduct("Game", 2)
addProduct("Laptop", 4)
addProduct("Game", 2)
addProduct("Chair", 1)
addProductCart("Game", 2)
*/
