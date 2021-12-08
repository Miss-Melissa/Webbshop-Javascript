import ProductHandler from "../classes/ProductHandler.js";
import ProductTemplate from "../classes/ProductTemplate.js";
import ImageAPI from "../classes/imageAPI.js";

const imgAPI = new ImageAPI();
var product = new ProductTemplate();
const ph = new ProductHandler();
const productCategories = [
    'Datorer',
    'Tangentbord',
    'Möss',
    'Konsoler',
    'Gamingstolar',
    'Musmattor',
    'Hörlurar'
];

const form = {
    title: document.querySelector("#title"),
    category: document.querySelector("#category"),
    price: document.querySelector("#price"),
    stock: document.querySelector("#stock"),
    shortDescription: document.querySelector("#short-description"),
    description: document.querySelector("#description")
};

Object.keys(form).forEach(key => {
    form[key].value = product[key];
});

productCategories.forEach(category => {
    let option = document.createElement("option");
    option.setAttribute("value", category);
    option.innerText = category;
    form.category.appendChild(option);
});

document.querySelector("#add-product-btn").addEventListener('click', (e) => {
    e.preventDefault();

    Object.keys(form).forEach(key => {
        product[key] = form[key].value;
    });
    ph.addProduct(product);

    Object.keys(form).forEach(key => {
        form[key].value = "";
    });

    product = new ProductTemplate();
});

document.querySelector('#retrieve-img-btn').addEventListener('click', (e) => {
    e.preventDefault();
    let urlInput = document.querySelector("#image-input");
    if (urlInput.value.length < 5) return;
    imgAPI.getImage(urlInput.value).then(imageData => {
        if(imageData.data.error){
            urlInput.value = "";
            return alert(imageData.data.error);
        }

        product.id = imageData.data.id;
        product.link = imageData.data.link;
        product.thumbnail = imageData.data.link.split(".jpg")[0] + "b.jpg";

        if(imageData.data.title)
            form.title.value = imageData.data.title;

        if(imageData.data.description)
            form.description.value = imageData.data.description;

        urlInput.value = "";

        let imgElem = document.createElement("img");
        imgElem.setAttribute('src', product.thumbnail);
        imgElem.setAttribute("referrerpolicy","no-referrer");
        imgElem.setAttribute("width", "440");

        let imgContainer = document.querySelector(".right-col");
        imgContainer.innerHTML = "";
        imgContainer.appendChild(imgElem);

    });

})





