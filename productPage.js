//Importing ProductHandler class from ./classes/ProductHandler.js
import ProductHandler from '../classes/ProductHandler.js'; //var tvungen att lägga in type="module" i script-taggen
//i HTMl annars funkade inte detta
const ph = new ProductHandler();
const url = new URL(location.href);
const product = ph.getByID(url.searchParams.get('id'));

console.log(ph)
console.log(url)
console.log(product)
console.log(ph.products[5].id)
console.log(ph.products[5].description)
console.log(ph.products[5].link)
console.log(ph.products[5].price)
console.log(ph.products[5].shortDescription)
console.log(ph.products[5].stock)
console.log(ph.products[5].thumbnail)
console.log(ph.products[5].title)




ph.products.map( (product) => {
    document.querySelector(".product-landing-page").innerHTML  = `
    <div class="product-${product.id}">${product.price}</div> 
    <span>${url}</span>
    <h1>${product.url}</h1>
    `
}) 

