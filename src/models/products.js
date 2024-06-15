const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: String, required: true},
})

const Model = mongoose.model('products', productSchema)

module.exports = Model