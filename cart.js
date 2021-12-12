const itemList = document.querySelector("#item-list")
const itemName = document.querySelector("#item-name")
const itemPrice = document.querySelector("#item-price")
const itemQty = document.querySelector("#item-qty")
const purchase = document.querySelector(".purchase-button")
const cartTotal = document.querySelector("#cart-total")
const cartStr = localStorage.getItem("cart")
const incomingCart = JSON.parse(cartStr)
const cart = incomingCart

/* ******* showItems gör att det som finns i de inkommande arrayerna visas direkt utan att man behöver klicka någonstans ****
funktionen showItem finns längre ned i den här koden.
*/
showItem()

// --------------------------------------------------------------------
// Handle remove and +/- buttons
itemList.onclick = function(e) {
    if(e.target && e.target.classList.contains("remove")) {
        const name = e.target.dataset.name
        removeItem(name)
    } else if(e.target && e.target.classList.contains("add-one")) {
        const name = e.target.dataset.name
        addItem(name)
    } else if(e.target && e.target.classList.contains("remove-one")) {
        const name = e.target.dataset.name
        removeItem(name, 1)
    }
}

// --------------------------------------------------------------------
// ADD ITEM
function addItem(name, price) {
    for(let i=0; i < cart.length; i+=1) {
        if(cart[i].name === name) {
            cart[i].qty +=1
            showItem()
            return
        }
    }
    const item = {name, price, qty: 1} //**************************FIX********
    cart.push(item)
    showItem()
}

// --------------------------------------------------------------------
// SHOW ITEM
function showItem() {
    itemQty.innerHTML = `You have ${getQty()} items in your cart`
    let itemStr = ""
    for (let i=0; i < cart.length; i+=1) {
        const {name, price, qty} = cart[i]

        itemStr += `<li>${name} $${price} x ${qty} = $${qty * price} 
        <button class="remove" data-name="${name}">Remove</button>
        <button class="add-one" data-name="${name}">+</button>
        <button class="remove-one" data-name="${name}">-</button>
        </li>`
    }
    itemList.innerHTML = itemStr
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
// REMOVE ITEM

function removeItem(name, qty = 0) {
    for(let i=0; i < cart.length; i+=1) {
        if(cart[i].name === name) {
            if(qty > 0) {
                cart[i].qty -= 1
            }
            if(cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1)
            }
            showItem()
            return
        }
    }
}

// --------------------------------------------------------------------
// BUTTON THAT ADD CART TO LOCAL STORAGE. ALSO CLEAR THE WISHLIST ARRAY.
purchase.onclick = function(e) {
    if(e.target && e.target.classList.contains("purchase-button")) {
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    showItem()
    console.log("fungerar")
}

// --------------------------------------------------------------------
// TEST PRODUCTS
/*
addItem("Game", 2)
addItem("Chair", 1)
addItem("Game", 2)
addItem("Laptop", 4)
addItem("Game", 2)
addItem("Chair", 1)
*/