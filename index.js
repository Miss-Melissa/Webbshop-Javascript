import ProductHandler from "./classes/ProductHandler.js";

const ph = new ProductHandler();

for(let i = 0; i < 4; i++){
    let productElem = document.createElement("product-card");
    productElem.data = ph.getRandom();
    document.querySelector('.products-container').appendChild(productElem)
};
