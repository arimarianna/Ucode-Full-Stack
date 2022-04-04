const {EatException} = require("./eat-exception");

module.exports.Ingestion = class {
    products = [];

    constructor(id, meal_type = ['breakfast', 'lunch', 'dinner'], day_of_diet) {
        this.id = id;
        this.meal_type = meal_type;
        this.day_of_diet = day_of_diet;
    }

    setProduct(product) {
        this.products.push(product);
    }

    getProductInfo(productName) {
        let result = '';
        this.products.forEach((item) => {
            if (item.name === productName)
                result = item;
        });
        return result;
    }

    getFromFridge(productName) {
        let product = this.getProductInfo(productName);
        EatException(product);
    }
};
