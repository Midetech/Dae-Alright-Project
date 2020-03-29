const router = require('express').Router()

let Vendor = require("../models/vendor.model")


router.route('/').get((req, res) => {
    Vendor.find()
    .then(vendor => res.json(vendor))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const image = req.body.image
    const vendor = req.body.vendor
    const product = req.body.product
    const order = Number(req.body.order)
    const delivery = Number(req.body.delivery)

    const newVendor = new Vendor({
        image,
        vendor,
        product,
        order,
        delivery
    })

    newVendor.save()
        .then(() => res.send('Vendor Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router