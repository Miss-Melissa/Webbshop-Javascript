//En klass som hanterar produkter, jag hämtar existerande produkter från localstorage, om data finns där

class ProductHandler {
    constructor() {
        this.products = JSON.parse(localStorage.getItem('products')) || [];
        this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        this.randomList = [];
    }

    // saveData sparar ner till localstorage 
    saveData() {
        localStorage.setItem('products', JSON.stringify(this.products));
        localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }

    //addProduct pushar in ny data som läggs till
    addProduct(newProduct) {
        this.products.push(newProduct);
        this.saveData();
        window.location.reload();
    }

    //tillåter att editera produkter i admin sidan
    updateProduct(updatedProduct) {
        let currentProduct = this.getByID(updatedProduct.id);

        Object.keys(currentProduct).forEach(key => {
            currentProduct[key] = updatedProduct[key];
        });

        this.saveData();
        window.location.reload();
    }

    //tillåter att ta bort produkter i admin sidan
    deleteProduct(productId){
        let index = this.products.findIndex(p => p.id === productId);
        if(index == -1) return;
        this.products.splice(index, 1);
        this.saveData();
        window.location.reload();
    }

    //Hämtar produkter baserat på dess id
    getByID(id) {
        return this.products.find(product => product.id === id);
    }

    //Hämtar produkter baserat på produkters kategori
    getByCategory(category) {
        return this.products.filter(product => product.category === category);
    }

    //Hämtar produkter random för att få variation på första sidan
    getRandom() {
        let randomNum = Math.floor(Math.random() * this.products.length);
        if (this.randomList.indexOf(randomNum) === -1) {
            this.randomList.push(randomNum);
            return this.products[randomNum];
        }
        else if (this.randomList.length < this.products.length) {
            return this.getRandom();
        }
    }
}
export default ProductHandler;