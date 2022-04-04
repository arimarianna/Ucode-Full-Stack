module.exports.EatException = product => {
    if (product.kcal_per_portion > 200) {
        throw new Error(`Too many calories in ${product.name} for ${this.type}`);
    }
}
