const express = require('express');
const router  = express.Router();
const Branch = require('../models/Branch');


/* GET All Branch */
router.get('/branch', (req, res, next) => {
    Branch.find()
    .then(branches=>{
        res.status(200).json({branches})
    })
    .catch(e=>console.log(e))
});


/* POST Branch  */
router.post('/branch', (req, res, next) => {
    const newBranch = new Branch(req.body);
    newBranch.save()
    .then(branch=>{
        res.status(200).json(branch)
    })
    .catch(e=>console.log(e))
});

module.exports = router;