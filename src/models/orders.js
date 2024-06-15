const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    produto: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true },
    observacoes: { type: String, required: true },
    additionals: { type: String, required: true },
})

const Model = mongoose.model('orders', ordersSchema)

module.exports = Model