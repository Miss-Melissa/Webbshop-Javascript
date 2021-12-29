import ProductHandler from "../classes/ProductHandler.js";

//Hämtar min random metod från klassen ProduktHandler för att rendrera random produkter
const ph = new ProductHandler();
console.log("index funkar")
for (let i = 0; i < 4; i++) {
    let productElem = document.createElement("product-card");
    productElem.data = ph.getRandom();
    document.querySelector('.products-container').appendChild(productElem);
};
