class ProductHandler {
    constructor() {
        this.products = JSON.parse(localStorage.getItem('products')) || [];
    }

    saveData(){
        localStorage.setItem('products', JSON.stringify(this.products));
    }

    addProduct(newProduct){
        this.products.push(newProduct);
        this.saveData();
    }
}

export default ProductHandler;