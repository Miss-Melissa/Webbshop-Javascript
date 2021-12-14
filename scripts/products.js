import ProductHandler from '../classes/ProductHandler.js';
const ph = new ProductHandler();
ph.products.forEach(product => {
    if (!product.id) return;
    let tag = document.createElement("product-card");
    tag.data = product;
    document.querySelector('body').appendChild(tag);
});

const urlCategory = location.href; 

console.log(urlCategory);
ph.getByCategory()
