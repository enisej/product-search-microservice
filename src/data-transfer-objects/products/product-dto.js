const {percentageOf} = require("../../utils/number-helpers")

class ProductDTO {
    constructor(product) {
        this.title = product.title
        this.description = product.description
        this.final_price = percentageOf(product.price, product.discountPercentage)
    }
}

module.exports = {ProductDTO}