class Product extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        if(!this.data) return this.innerHTML = '<div style="text-align: center; width:100%">Missing Data</div>';

        let productTitle = document.createElement("div");
        productTitle.className = "product-title";
        productTitle.innerText = this.data.title;

        let wishlistBtn = document.createElement("div");
        wishlistBtn.className = "bi bi-suit-heart";
        wishlistBtn.addEventListener("click", (e) => {
            e.target.className = (e.target.className === "bi bi-suit-heart") ? "bi bi-suit-heart-fill" : "bi bi-suit-heart";
        });

        let productImg = document.createElement("img");
        productImg.className = "product-img";
        productImg.setAttribute("src", this.data.thumbnail)

        let productPrice = document.createElement("div");
        productPrice.className = "product-price";
        productPrice.innerText = this.data.price + " kr";

        let productShortDescription = document.createElement("div");
        productShortDescription.className = "product-s-description";
        productShortDescription.innerText = this.data.shortDescription;


        this.appendChild(productTitle);
        this.appendChild(wishlistBtn);
        this.appendChild(productImg);
        this.appendChild(productPrice);
        this.appendChild(productShortDescription);
    };
}

customElements.define('product-card', Product);