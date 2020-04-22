const express = require('express');
const router  = express.Router();
const Branch = require('../models/Branch');


/* GET All Branch */
router.get('/branch', (req, res, next) => {
    Branch.find({available:'true'})
    .populate('branchs')
    .then(branches=>{
        res.status(200).json({branches})
    })
    .catch(e=>console.log(e))
});

/* Delete by id Branch  */
router.delete('/branch/:id', (req, res, next) => {
    Branch.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.status(200).json({ message: `Branch with ${req.params.id} was removed successfully.` })
    })
    .catch(e=>console.log(e))
});


/* Edit by id Branch  */                           // ? ? ? ? ?  ?
router.post('/branch/:id/:nextQuestionId', (req, res, next) => {
    Branch.findByIdAndUpdate({_id:req.params.id},
    {
    next_question:req.params.nextQuestionId
    }
    )
    .then(()=>{
        res.status(200).json({ message: `Branch with ${req.params.id} was edited successfully.` })
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