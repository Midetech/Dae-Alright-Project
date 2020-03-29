const mongoose = require('mongoose')
const Schema = mongoose.Schema


const vendorSchema = new Schema({
    image: {type: String, required: true},
    vendor: {type: String, required: true},
    product: {type: String, required: true},
    order: {type: Number, required: true},
    delivery: {type: Number, required: true},
})


const Vendor = mongoose.model('Vendor', vendorSchema)

module.exports = Vendor
