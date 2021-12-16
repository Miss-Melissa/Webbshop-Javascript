//Importing ProductHandler class from ./classes/ProductHandler.js   

import ProductHandler from '../classes/ProductHandler.js'; //var tvungen att lägga in type="module" i script-taggen

(()=>{
//i HTMl annars funkade inte detta
const ph = new ProductHandler();
const url = new URL(location.href);
const product = ph.getByID(url.searchParams.get('id'));

//om produkten ej finns
if (!product) {
    document.querySelector(".product-landing-page").innerHTML=`
    <div>Produkten du söker efter finns tyvärr inte :-(</div>
    `
    return   
}

//annars kör vi
console.log(product);
document.querySelector(".product-landing-page").innerHTML=`
<h1 class="product-title">${product.title}</div>
<div class="product-wrapper">
    <img class="product-img" src="${product.link}" referrerpolicy="no-referrer">
    <div class="product-aside"
        <h5 class="product-price">${product.price} kr</h5>
        <div class="product-btns">
            <button class="product-cart">Lägg i varukorg</button>
            <button class="product-wishlist">Spara i Wish List</button>
        </div>
    </div>
</div>
<section class="section-description">
    <p class="product-description">${product.description}</p>
    <p class="product-articleno">Vårt artikelnummer: ${product.id}</p>
    <p class="product-stock"></p>
</section>
`
if (product.stock > 0) {
    document.querySelector(".product-stock").innerHTML = `
    Lagerstatus: ${product.stock} produkter i lager.
    `
}
else {
    document.querySelector("product.stock").innerHTML = `
    Lagerstatus: Produkten är tyvärr slut.
    `
}

})();





//http://127.0.0.1:5501/product.html?id=tMop0X1