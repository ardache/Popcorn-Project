const express = require('express');
const router  = express.Router();
const Price = require('../models/Price');


/* GET Price by id. */
router.get('/price/:id', (req, res, next) => {
    Price.findById(req.params.id)
    .populate('price')
    .then(price=>{
        res.status(200).json(price)
    })
    .catch(e=>console.log(e))
});

/* POST Price  */
router.post('/price', (req, res, next) => {
    const newPrice = new Price(req.body);
    newPrice.save()
    .then(price=>{
        res.status(200).json(price)
    })
    .catch(e=>console.log(e))
});

module.exports = router;