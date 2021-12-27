const shopperInfo = {
    mail: document.getElementById('mailInput'),
    firstName: document.getElementById('namnInput'),
    lastName: document.getElementById('lastnameInput'),
    adress: document.getElementById('adressInput'),
    postCode: document.getElementById('postcodeInput'),
    postOrt: document.getElementById('postortInput'),
    phoneNumber: document.getElementById('phoneInput')
}

const payWithCart = {
    cardName: document.getElementById('cc-name'),
    cardNumber: document.getElementById('cc-number'),
    cardexpire: document.getElementById('cc-expiration'),
    cardCvv: document.getElementById('cc-cvv')
}

const productList = document.querySelector("#product-list")
const productQty = document.querySelector("#product-qty")
const cartTotal = document.querySelector("#cart-total")

const cart = JSON.parse(localStorage.getItem("cart")) || []

// --------------------------------------------------------------------
// setItem cart to local storage
function setCartLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// --------------------------------------------------------------------
// HANDLE BUTTON CLICKS ON PRODUCTS
productList.onclick = function(e) {
    if(e.target && e.target.classList.contains("remove")) {
        const id = e.target.dataset.id
        removeProduct(id)
    } else if(e.target && e.target.classList.contains("add-one")) {
        const id = e.target.dataset.id
        addProduct(id)
        setCartLocalStorage()
    } else if(e.target && e.target.classList.contains("remove-one")) {
        const id = e.target.dataset.id
        removeProduct(id, 1)
    }
}

// --------------------------------------------------------------------
// ADD PRODUCT TO CART
function addProduct(id) {
    for(let i=0; i < cart.length; i+=1) {
        if(cart[i].id === id) {
            cart[i].qty +=1
            showProduct()
            return
        }
    }
}

// --------------------------------------------------------------------
// SHOW PRODUCT
function showProduct() {
    productQty.innerHTML = `${getQty()}`
    let productStr = ""
    for (let i = 0; i < cart.length; i += 1) {
        const {title, price, thumbnail, qty, id } = cart[i]

        productStr += `<li class="list"><img referrerpolicy="no-referrer" src="${thumbnail}">${title} ${price}kr x ${qty} = ${qty * price}kr 
        <button class="remove-one btn btn-secondary" data-id="${id}">-</button>
        <button class="add-one btn btn-secondary" data-id="${id}">+</button>
        <button class="remove btn btn-danger" data-id="${id}">Remove</button>
        </li>`
    }
    productList.innerHTML = productStr
    cartTotal.innerHTML = `${getTotal()}kr`
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
function removeProduct(id, qty = 0) {
    for(let i=0; i < cart.length; i+=1) {
        if(cart[i].id === id) {
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

showProduct()

function payFunction(e) {
    e.preventDefault();

    let mail = document.getElementById('mailInput').value
    let firstName = document.getElementById('namnInput').value
    let lastName = document.getElementById('lastnameInput').value
    let adress = document.getElementById('adressInput').value
    let postCode = document.getElementById('postcodeInput').value
    let postOrt = document.getElementById('postortInput').value
    let phoneNumber = document.getElementById('phoneInput').value

    const div = document.querySelector("#kundinfo");

    div.innerHTML += `<li>Email: ${mail} <br> Telefonnummer: ${phoneNumber} <br> 
${firstName} ${lastName} <br> ${adress} <br> ${postCode} ${postOrt}</li>`
    div.style.listStyleType = "none";


    const a = document.getElementById("postnord")
    const b = document.getElementById("homedelivery")
    const c = document.getElementById("instabox")

    if (a.checked == true) {
        let a = document.getElementById("postnord").value
        document.querySelector("#leveransinfo").innerHTML = a;
    } else if (b.checked == true) {
        let b = document.getElementById("homedelivery").value
        document.querySelector("#leveransinfo").innerHTML = b;
    } else if (c.checked == true) {
        let c = document.getElementById("instabox").value
        document.querySelector("#leveransinfo").innerHTML = c;
    }


    const d = document.getElementById("credit")

    if (d.checked == true) {
        let d = document.getElementById("credit").value
        document.querySelector("#betalinfo").innerHTML = d;
    }


    // om input inte fylls i funkar inte knappen (Betalning)
    if (!payWithCart.cardName.value) return alert("DU MÅSTE FYLLA I");
    if (!payWithCart.cardNumber.value) return;
    if (!payWithCart.cardexpire.value) return;
    if (!payWithCart.cardCvv.value) return;


    // om input inte fylls i funkar inte knappen (Dina uppgifter)
    if (!shopperInfo.mail.value) return;
    if (!shopperInfo.firstName.value) return;
    if (!shopperInfo.lastName.value) return;
    if (!shopperInfo.adress.value) return;
    if (!shopperInfo.postCode.value) return;
    if (!shopperInfo.postOrt.value) return;

    // hämta modal
    const modal = document.getElementById("myModal");

    // hämta kryss knapp
    const span = document.getElementsByClassName("close")[0];

    // När användare trycker på myBtn, öppna Modal
    modal.style.display = "block";

    // När användare trycker på <span> (x), stäng Modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // När användare trycker utanför Modal, stäng Modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    // tömmer input fälten efter click (betalning)
    Object.keys(payWithCart).forEach(key => {

        payWithCart[key].value = "";
    });

    // tömmer input fälten efter click (dina uppgifter)
    Object.keys(shopperInfo).forEach(key => {

        shopperInfo[key].value = "";
    });
}

// checkbox leverans och betalning
function myCheckBox() {

    const checkBoxDelivery = document.getElementById("postnord");
    var text = document.getElementById("textpostnord");

    if (checkBoxDelivery.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }


    const checkBoxHomeDelivery = document.getElementById("homedelivery");
    var text = document.getElementById("texthomedelivery");

    if (checkBoxHomeDelivery.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    const checkBoxInstaBox = document.getElementById("instabox");
    var text = document.getElementById("textinstabox");

    if (checkBoxInstaBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }

    const checkBoxVisaCard = document.getElementById("credit");
    var text = document.getElementById("textvisacard");

    if (checkBoxVisaCard.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

document.querySelector('#btnPay').addEventListener('click', payFunction);
